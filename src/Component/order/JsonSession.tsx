import React, { useEffect, useState } from "react";
import Form from "./form";
import "./UserCard.scss";
// import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  status: boolean;
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    // country: string;
  };
  mobile: number;
}

interface Details {
  userId: number;
  status: boolean;
}

interface Order {
  productName: string;
  imgUrl: string;
  total: number;
}
interface Total {
  amount: number;
}

const StoreDataInSessionStorage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [details, setDetails] = useState<Details>();
  const [total, setTotal] = useState<Total>();
  const deliveryCharges = 50;
  // const history = useNavigate();
  if (!total) {
    var totalAmount = deliveryCharges;
  } else {
    var totalAmount = deliveryCharges + total.amount;
  }

  useEffect(() => {
    const storedUsers = sessionStorage.getItem("details");
    const storedOrders = sessionStorage.getItem("orders");
    const storedTotals = sessionStorage.getItem("total");

    if (storedUsers) {
      setDetails(JSON.parse(storedUsers));
    } else {
      const defaultUsers: Details = { userId: 1, status: true };
      sessionStorage.setItem("details", JSON.stringify(defaultUsers));
      setDetails(defaultUsers);
    }
    if (storedTotals) {
      setTotal(JSON.parse(storedTotals));
    } else {
      const defaultTotal: Total = { amount: 1145 };
      sessionStorage.setItem("total", JSON.stringify(defaultTotal));
      setTotal(defaultTotal);
    }

    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    } else {
      const defaultOrders: Order[] = [
        {
          productName: "Sausage Casing - Pork",
          imgUrl:
            "https://lp2.hm.com/hmgoepprod?set=source[/b1/d4/b1d456b1a9ebf8451e0c36343af44f925c19c3a5.jpg],origin[dam],category[ladies_tops_printed_tshirts],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
          total: 40,
        },
        {
          productName: "Wine - White, Pelee Island",
          imgUrl:
            "https://lp2.hm.com/hmgoepprod?set=source[/53/c5/53c5c92bb060702a97a239025c502baaa61b429d.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
          total: 40,
        },
      ];
      sessionStorage.setItem("orders", JSON.stringify(defaultOrders));
      setOrders(defaultOrders);
    }
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3001/users");
        const data = await response.json();
        const filteredUsers = data.filter((user: User) => {
          return user.id === details?.userId;
        });
        setUsers(filteredUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [details]);

  return (
    <div className="user-details-container">
      <div className="header">Order Summary</div>
      <div className="details">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <h2 className="delivery">Delivery Address</h2>
            <div className="user-details">
              <div className="radio-group">
                <input
                  type="radio"
                  name="delivery-address"
                  id={`user-${user.id}`}
                />
                <label>Home</label>
                <div className="userDetails">
                  <p>
                    <span style={{ fontWeight: "bold" }}> Name : </span>
                    {user.name}
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }}> Address : </span>{" "}
                    {user.address.street} , {user.address.city} ,{" "}
                    {user.address.state}-{user.address.zipCode}
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }}> Mobile : </span>
                    {user.mobile}
                  </p>
                </div>
              </div>
            </div>
            <div className="user-details">
              <div className="formCall">
                <Form />
              </div>
            </div>
          </div>
        ))}

        <div className="cart-card">
          <h2>Product Details</h2>
          <div className="cart-details">
            <div>
              {orders.map((order, index) => (
                <div>
                  <div className="product-line">
                    <img src={order.imgUrl} alt="Product" className="image" />

                    <p> {order.productName}</p>
                  </div>
                </div>
              ))}
              <hr className="product-line" />
              <div className="product-prices">
                <h2>Price Details</h2>
                <div>
                  <p>
                    <span> Total MRP : ₹ {total?.amount} </span>
                  </p>
                  <p>
                    <span> Delivery Charges : ₹ {deliveryCharges} </span>
                  </p>
                </div>
              </div>
              <hr className="product-line" />
              <div className="product-prices">
                <div>
                  <p>
                    <span style={{ fontWeight: "bold" }}>
                      {" "}
                      Payable Amount : ₹{totalAmount}
                    </span>
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="placeOrder"
                onClick={() => {
                  alert("Thank you for your payment");
                  // history("/");
                }}
              >
                UPI PAY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDataInSessionStorage;

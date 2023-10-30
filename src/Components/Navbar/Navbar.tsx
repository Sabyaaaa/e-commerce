// import React, { useContext, useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import "./Navbar.scss";
// import Button from "../Button/Button";
// import { useNavigate } from "react-router-dom";
// import Nav from "../Nav";
// import Cart from "../Cart/Cart";
// import ProductList from "../ProductList";

// import { AuthContext } from "../AuthProvider/AuthProvider";
// // import LogoutButton from "../Logout/Logout";

// interface NavbarProps {
//   onGenderChange: (gender: string) => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ onGenderChange }) => {
//   // const [viewCart, setViewCart] = useState<boolean>(false)

//   // ************* Navigate to LOGIN *****************
//   const navigate = useNavigate();

//   const location = useLocation();
//   const { isLoggedIn, logOut } = useContext(AuthContext);

//   const logInfn = () => {
//     navigate("/login");
//   };
//   const logOutFn = () => {
//     logOut();
//     navigate("/");

//     // Perform any additional logout logic here
//   };

//   // const {isLoggedIn, logIn, logOut} = useContext(AuthContext);

//   // ************* Navigate to CART *****************

//   const cart = () => {
//     navigate("/cart");
//   };
//   useEffect(() => {
//     const canvas = document.querySelector("canvas");

//     if (canvas) {
//       const context = canvas.getContext("2d");
//       const navHeight = 80;
//       const waveStretch = 10;
//       const waveLength = 0.01;
//       let velocity = 0.01;

//       const resizeCanvas = () => {
//         if (canvas) {
//           canvas.width = window.innerWidth;
//           canvas.height = window.innerHeight;
//         }
//       };

//       window.addEventListener("resize", resizeCanvas);

//       const animate = () => {
//         if (context && canvas) {
//           requestAnimationFrame(animate);
//           context.clearRect(0, 0, canvas.width, canvas.height);

//           for (let i = 0; i < window.innerWidth; i += 0.5) {
//             context.save();
//             context.beginPath();
//             context.moveTo(i, 0);
//             context.lineTo(
//               i,
//               navHeight + Math.sin(i * waveLength + velocity) * waveStretch
//             );
//             context.strokeStyle = "#F8C8DC";
//             context.stroke();
//             context.closePath();
//             context.restore();
//           }

//           velocity += 0.1;
//         }
//       };

//       resizeCanvas();
//       animate();

//       return () => {
//         window.removeEventListener("resize", resizeCanvas);
//       };
//     }
//   }, []);

//   const handleGenderChange = (gender: string) => {
//     onGenderChange(gender);
//   };

//   const viewProducts = () => {
//     navigate("/");
//   };

//   const isCartPage = location.pathname === "/cart";
//   const isClothingPage = location.pathname === "/";
//   const isOrderPage = location.pathname === "/order";

//   return (
//     <>
//       <nav className="navbar">
//         <canvas id="canvas"></canvas>
//         <div className="brand-logo">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6baaublXNGVY3ZGg4DIQAfOU89md35NcJbA&usqp=CAU"
//             // src="src/logo.png"
//             alt="Brand Logo"
//             className="brand-logo"
//           />
//         </div>
//         <div className="navbar-menu">
//           <ul className="navbar-menu-list">
//             {!isCartPage && (
//               <>
//                 <li
//                   className="navbar-menu-item"
//                   onClick={() => handleGenderChange("men")}
//                 >
//                   MEN
//                 </li>
//                 <li
//                   className="navbar-menu-item"
//                   onClick={() => handleGenderChange("women")}
//                 >
//                   WOMEN
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//         <div className="navbar-actions">
//           <ul className="navbar-actions-list">
//             {/* <Nav viewCart={viewCart} setViewCart={setViewCart} /> */}
//             {isOrderPage && (
//               // <Button label="View Products" className="cart-btn" onClick={viewProducts} />
             
//                 <div className="para-on">
//                   <p className="para-order">Order summary</p>
//                 </div>
              
//             )}
//             {!isCartPage && !isOrderPage && (
              
//               <Button label="Cart" className="cart-btn" onClick={cart} />
              
              
              
//             )}
            
//             {!isClothingPage && !isOrderPage && (
//               <Button
//                 label="View Products"
//                 className="view-button1"
//                 onClick={viewProducts}
//               />
//             )}
//             {!isCartPage && (
//               <div>
//                 {isLoggedIn ? (
//                   <Button
//                     label="Logout"
//                     className="cart-btn card-btn-1"
//                     onClick={logOutFn}
//                   />
//                 ) : (
//                   <Button
//                     label="Login/Register"
//                     className="cart-btn card-btn-1"
//                     onClick={logInfn}
//                   />
//                 )}
//               </div>
//             )}
//             {isLoggedIn ? (
//               <Button
//                 label="Logout"
//                 className="cart-btn card-btn-1"
//                 onClick={logOutFn}
//               />
//             ) : (
//               <Button
//                 label="Login/Register"
//                 className="cart-btn card-btn-1"
//                 onClick={logInfn}
//               />
//             )}
//             {/* <Button
//             label="Login/Register"
//             className="cart-btn card-btn-1"
//             onClick={logInfn}
//           /> */}
//           </ul>
          
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;






import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.scss";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav";
import Cart from "../Cart/Cart";
import ProductList from "../ProductList";

import { AuthContext } from "../AuthProvider/AuthProvider";
// import LogoutButton from "../Logout/Logout";

interface NavbarProps {
  onGenderChange: (gender: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onGenderChange }) => {
  // const [viewCart, setViewCart] = useState<boolean>(false)

  // ************* Navigate to LOGIN *****************
  const navigate = useNavigate();

  const location = useLocation();
  const { isLoggedIn, logOut } = useContext(AuthContext);

  const logInfn = () => {
    navigate("/login");
  };
  const logOutFn = () => {
    logOut();
    navigate("/");

    // Perform any additional logout logic here
  };

  // const {isLoggedIn, logIn, logOut} = useContext(AuthContext);

  // ************* Navigate to CART *****************

  const cart = () => {
    navigate("/cart");
  };
  useEffect(() => {
    const canvas = document.querySelector("canvas");

    if (canvas) {
      const context = canvas.getContext("2d");
      const navHeight = 80;
      const waveStretch = 10;
      const waveLength = 0.01;
      let velocity = 0.01;

      const resizeCanvas = () => {
        if (canvas) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        }
      };

      window.addEventListener("resize", resizeCanvas);

      const animate = () => {
        if (context && canvas) {
          requestAnimationFrame(animate);
          context.clearRect(0, 0, canvas.width, canvas.height);

          for (let i = 0; i < window.innerWidth; i += 0.5) {
            context.save();
            context.beginPath();
            context.moveTo(i, 0);
            context.lineTo(
              i,
              navHeight + Math.sin(i * waveLength + velocity) * waveStretch
            );
            context.strokeStyle = "#F8C8DC";
            context.stroke();
            context.closePath();
            context.restore();
          }

          velocity += 0.1;
        }
      };

      resizeCanvas();
      animate();

      return () => {
        window.removeEventListener("resize", resizeCanvas);
      };
    }
  }, []);

  const handleGenderChange = (gender: string) => {
    onGenderChange(gender);
  };

  const viewProducts = () => {
    navigate("/");
  };

  const isCartPage = location.pathname === "/cart";
  const isClothingPage = location.pathname === "/";
  const isOrderPage = location.pathname === "/order";

  return (
    <>
      <nav className="navbar">
        <canvas id="canvas"></canvas>
        <div className="brand-logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6baaublXNGVY3ZGg4DIQAfOU89md35NcJbA&usqp=CAU"
            // src="src/logo.png"
            alt="Brand Logo"
            className="brand-logo"
          />
        </div>
        <div className="navbar-menu">
          <ul className="navbar-menu-list">
            {!isCartPage && (
              <>
                <li
                  className="navbar-menu-item"
                  onClick={() => handleGenderChange("men")}
                >
                  MEN
                </li>
                <li
                  className="navbar-menu-item"
                  onClick={() => handleGenderChange("women")}
                >
                  WOMEN
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-actions">
          <ul className="navbar-actions-list">
            {/* <Nav viewCart={viewCart} setViewCart={setViewCart} /> */}
            {isOrderPage && (
              // <Button label="View Products" className="cart-btn" onClick={viewProducts} />
              
                <div className="para-on">
                  <p className="para-order">Order summary</p>
                </div>
              
            )}
            {!isCartPage && !isOrderPage && (
              
              <Button label="Cart" className="cart-btn" onClick={cart} />
              
              
              
            )}
            
            {!isClothingPage && !isOrderPage && (
              <Button
                label="View Products"
                className="view-button1"
                onClick={viewProducts}
              />
            )}
            { !isOrderPage && (
              <div className="home-login">
                {isLoggedIn ? (
                  <Button
                    label="Logout"
                    className="cart-btn card-btn-1"
                    onClick={logOutFn}
                  />
                ) : (
                  <Button
                    label="Login/Register"
                    className="cart-btn card-btn-1"
                    onClick={logInfn}
                  />
                )}
              </div>
            )}
            {/* {isLoggedIn ? (
              <Button
                label="Logout"
                className="cart-btn card-btn-1"
                onClick={logOutFn}
              />
            ) : (
              <Button
                label="Login/Register"
                className="cart-btn card-btn-1"
                onClick={logInfn}
              />
            )} */}
            {/* <Button
            label="Login/Register"
            className="cart-btn card-btn-1"
            onClick={logInfn}
          /> */}
          </ul>
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;

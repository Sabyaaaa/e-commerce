import React from "react";
import Card from "../Cards/Cards";
import "./ClothingPage.css";
import Filters from "../Filters/Filters";

const Page: React.FC = () => {
  const clothingItems = [
    {
      id: 1,
      productName: "T-Shirt",
      price: 25.99,
      imageSrc:
        "https://lp2.hm.com/hmgoepprod?set=source[/6d/4c/6d4c7b3c96cf3e58e3b8c78f297fcafb41ef0d1a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
    },
    {
      id: 1,
      productName: "T-Shirt",
      price: 25.99,
      imageSrc:
        "https://lp2.hm.com/hmgoepprod?set=source[/29/e4/29e427d44c30982ed2ad0a4993762aafafc8ede3.jpg],origin[dam],category[ladies_tops_printed_tshirts],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
    },
    {
      id: 1,
      productName: "T-Shirt",
      price: 25.99,
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQcazEUJLcGRtobWflfMPOwcA0umCiPbfjZLKbADFh1f9Z8SZgoemhgD3t3jBTNzUMQ4&usqp=CAU",
    },
    {
      id: 1,
      productName: "T-Shirt",
      price: 25.99,
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQcazEUJLcGRtobWflfMPOwcA0umCiPbfjZLKbADFh1f9Z8SZgoemhgD3t3jBTNzUMQ4&usqp=CAU",
    },
    {
      id: 1,
      productName: "T-Shirt",
      price: 25.99,
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQcazEUJLcGRtobWflfMPOwcA0umCiPbfjZLKbADFh1f9Z8SZgoemhgD3t3jBTNzUMQ4&usqp=CAU",
    },
  ];

  return (
    <div className="container clothing-page">
      <div className="row">
        <div className="col-md-3">
          <Filters /> {/* Add Filters component */}
        </div>
        <div className="col-md-9">
          <div className="row">
            {clothingItems.map((item) => (
              <div className="col-md-4 mb-4" key={item.id}>
                <Card
                  imageSrc={item.imageSrc}
                  productName={item.productName}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

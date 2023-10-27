import React from "react";
interface SizeProps {
    selectedSizes: string[];
    onSizeChange: (size: string) => void;
  }
  
const Size: React.FC<SizeProps> = ({ selectedSizes, onSizeChange }) => {
    const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        onSizeChange(value);
      };
  return (
    <div className="filter-section">
      <h5>Size</h5>
      <label>
        <input
          type="checkbox"
          name="size"
          value="small"
          checked={selectedSizes.includes("small")}
          onChange={handleSizeChange}
        />
        Small
      </label>
      <label>
        <input
          type="checkbox"
          name="size"
          value="medium"
          checked={selectedSizes.includes("medium")}
          onChange={handleSizeChange}
        />
        Medium
      </label>
      <label>
        <input
          type="checkbox"
          name="size"
          value="large"
          checked={selectedSizes.includes("large")}
          onChange={handleSizeChange}
        />
        Large
      </label>
    </div>
  );
};

export default Size;


// ...
// import React from "react";
 
// interface SizeProps {

//   selectedSizes: { [productId: number]: string[] };

//   onSizeChange: (productId: number, size: string) => void;

// }
 
// const Size: React.FC<SizeProps> = ({ selectedSizes, onSizeChange }) => {

//   return (

//     <div className="filter-section">

//       <h5>Sizes</h5>

//       {Object.keys(selectedSizes).map((productIdStr) => {

//         const productId = parseInt(productIdStr, 10); // Parse the productId to a number

//         return (

//           <div key={productId}>

//             <span>Product ID: {productId}</span>

//             <div>

//               {selectedSizes[productId].map((size) => (

//                 <label key={size}>

//                   <input

//                     type="checkbox"

//                     checked={false} // You should provide the correct logic for 'checked' here

//                     onChange={() => onSizeChange(productId, size)}

//                   />

//                   {size}

//                 </label>

//               ))}

//             </div>

//           </div>

//         );

//       })}

//     </div>

//   );

// };
 
// export default Size;

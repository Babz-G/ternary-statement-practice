import { useState } from "react";

function ProductCard({ productName }) {
  const [inStock, setInStock] = useState(true);

  return (
    <div className="product-card">
      <h2 className="product-name"> {productName}</h2>
      <p
        className={
          inStock ? "stock-message in-stock" : "stock-message out-of-stock"
        }
      >
        {inStock ? "Available now!" : "Sorry, were out of stock."}
      </p>

      <button
        className="stock-button"
        onClick={() => {
          // console.log(inStock);
          setInStock(!inStock);
        }}
      >
        {inStock ? "Mark as Out of Stock" : "Restock Item"}
      </button>
    </div>
  );
}

export default ProductCard;

// const [variableName, setVariableName] = useState(initialValue);
// condition ? showThisIfTrue : showThisIfFalse

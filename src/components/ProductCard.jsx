import { useState } from "react";
// Imports the useState hook from React to manage component state.

// function ProductCard({ productName }) {
// Defines the ProductCard component, receiving data as a prop through destructuring
function ProductCard({ data }) {
  // Creates state variable 'inStock' initialized with data.inStock value
  const [inStock, setInStock] = useState(data.inStock);

  return (
    // Main container div for the product card
    <div className="product-card">
      {/* Displays the product name from data prop */}
      <h2 className="product-name"> {data.name}</h2>

      {/* Stock status message with conditional styling */}
      <p
        // Applies "in-stock" class if true, "out-of-stock" if false
        className={
          inStock ? "stock-message in-stock" : "stock-message out-of-stock"
        }
      >
        {/* Displays checkmark and availability message if in stock, X and out of stock message if not */}
        {inStock ? "✓ Available now!" : "✗ Sorry, were out of stock."}
      </p>

      {/* Button to toggle stock status */}
      <button
        className="stock-button"
        // onClick handler toggles inStock between true and false
        onClick={() => {
          // Updates inStock to its opposite value (!inStock flips true/false)
          setInStock(!inStock);
        }}
      >
        {/* Button text changes based on current stock status */}
        {inStock ? "Mark as Out of Stock" : "Restock Item"}
      </button>
    </div>
  );
}

// Exports ProductCard so it can be imported in other files
export default ProductCard;

// const [variableName, setVariableName] = useState(initialValue);
// condition ? showThisIfTrue : showThisIfFalse

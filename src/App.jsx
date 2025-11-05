import "./App.css";
import ProductCard from "./components/ProductCard.jsx";

function App() {
  return (
    <>
      <h1>Ternary Statement Practice</h1>
      <div className="card-container">
        <ProductCard productName="Vintage Tactical Military Backpack" />
        <ProductCard productName="Dr. Martens 8-Eye Burgandy Vegan Boot" />
        <ProductCard productName="Black & Leopard Vegan Creepers" />
        <ProductCard productName="Vans Slip-On Black / White Checkerboard Skate Shoe" />
      </div>
    </>
  );
}
export default App;

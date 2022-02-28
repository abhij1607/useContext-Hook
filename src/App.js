import { useContext } from "react";
import { useCart } from "./Cartcontext";

export function ProductListing() {
  const { addToCart } = useCart();
  return ["1", "2", "3", "4"].map((item) => (
    <div>
      <h2> Product {item} </h2>
      <button onClick={addToCart}>Add to Cart </button>
    </div>
  ));
}

export function Cart() {
  const { items } = useCart();
  return <h1> Items in Cart {items} </h1>;
}

export default function App() {
  return (
    <div className="App">
      <Cart />
      <ProductListing />
    </div>
  );
}

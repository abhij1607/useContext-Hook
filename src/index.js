import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "./Cartcontext";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
  rootElement
);

// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CartContextProvider from "./context/CartContext";
import WidgetCartContextProvider from "./context/WidgetCartContext";
import AlertContextProvider from "./context/AlertContext";
import ProductsContextProvider from "./context/ProductsContext";
import RemoveFiltersProvider from "./context/RemoveFilters";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <WidgetCartContextProvider>
          <AlertContextProvider>
            <ProductsContextProvider>
              <RemoveFiltersProvider>
                <App />
              </RemoveFiltersProvider>
            </ProductsContextProvider>
          </AlertContextProvider>
        </WidgetCartContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);



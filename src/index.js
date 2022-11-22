import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./Context/ProductContext";
import { FilterContextProvider } from "./Context/FilterContext";
import { CartProvider } from "./Context/CartContext";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-7uzmo2w38zkjgx5g.us.auth0.com"
      clientId="oJkJDKp3betkUN2MHEEqJRYdzblYtWBD"
      redirectUri={window.location.origin}
    >
      <AppProvider>
        <FilterContextProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterContextProvider>
      </AppProvider>
    </Auth0Provider>
  </React.StrictMode>
);

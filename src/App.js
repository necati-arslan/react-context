import { CheckoutPage } from "./CheckoutPage";
import { Sidebar } from "./Sidebar";
import "./styles.css";
import { Toolbar } from "./Toolbar";

import { CartProvider } from "./Cart";

export default function App() {
  return (
    <CartProvider>
      <div className="App">
        <Toolbar />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div
            style={{
              padding: "0 0 0 20px",
              borderLeft: "1px solid black"
            }}
          >
            <CheckoutPage />
          </div>
        </div>
      </div>
    </CartProvider>
  );
}

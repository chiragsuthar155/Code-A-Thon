import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart";
import { HomePage } from "./components/HomePage";
import { CheckoutForm } from "./components/CheckoutForm";
import { Checkout } from "./components/Checkout";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkoutForm" element={<CheckoutForm />} />
        <Route path="/order-complete" element={<Checkout />} />
      </Routes>

      {/* <img
        src="https://img.icons8.com/ios/50/null/drop-of-blood--v2.png"
        alt=""
      /> */}
    </>
  );
}

export default App;

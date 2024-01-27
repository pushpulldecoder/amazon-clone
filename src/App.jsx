import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import CartPage from "./Components/Pages/CartPage";
import ProductPaga from "./Components/Pages/ProductPage";
import Context from "./ContextApi/Context";

function App() {
  return (
    <>
    <Context>
      <Header />
        <Routes>
          <Route path="/" index element={<Home />}/>
          <Route path="/CartPage" element={<CartPage />}/>
          <Route path={`/ProductPaga/:id`} element={<ProductPaga />}/>
        </Routes>
      <Footer />
      </Context>
    </>
  );
}

export default App;

CartPage
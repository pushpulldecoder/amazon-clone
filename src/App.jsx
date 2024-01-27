import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Context from "./ContextApi/Context";

function App() {
  return (
    <>
    <Context>
      {/* <Header /> */}
        <Routes>
          <Route path="/" index element={<Home />}/>
        </Routes>
      <Footer />
      </Context>
    </>
  );
}

export default App;

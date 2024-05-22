import "./css/style.css" ;
import "./css/bootstrap.min.css";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart, Home, Shop } from "./pages/index";
import Footer from "./common/Footer";
import NavBar from "./common/NavBar";

function App() {
  return (
    <div>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  </div>
  );
}

export default App;

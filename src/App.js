import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import {
  Home,
  Products,
  About,
  Contact,
  Auth,
  Cart,
  Design,
} from "./pages/index";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/Y-BRO-Clothings/home" element={<Home />} />
          <Route exact path="/Y-BRO-Clothings/products" element={<Products />} />
          <Route exact path="/Y-BRO-Clothings/design" element={<Design />} />
          <Route exact path="/Y-BRO-Clothings/about" element={<About />} />
          <Route exact path="/Y-BRO-Clothings/contact" element={<Contact />} />
          <Route exact path="/Y-BRO-Clothings/Auth" element={<Auth />} />
          <Route exact path="/Y-BRO-Clothings/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


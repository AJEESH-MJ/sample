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
          <Route exact path="Y_BRO/" element={<Home />} />
          <Route exact path="Y_BRO/products" element={<Products />} />
          <Route exact path="Y_BRO/design" element={<Design />} />
          <Route exact path="Y_BRO/about" element={<About />} />
          <Route exact path="Y_BRO/contact" element={<Contact />} />
          <Route exact path="Y_BRO/Auth" element={<Auth />} />
          <Route exact path="Y_BRO/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


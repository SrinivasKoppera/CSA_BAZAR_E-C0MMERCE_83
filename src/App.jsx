import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import { Routes, Route } from "react-router-dom";
import About from "./component/About/About";
import Home from "./component/Home/Home";
import Contact from "./component/Contact/Contact";
import Notfound from "./component/Notfound";
import Footer from "./component/Footer/footer";
import Products from "./component/Products/Products";
import ProductDetails from "./component/Product-details/product-details";
import Login from "./component/Login";
import PrivateRoute from "./private-route";
import Signup from "./component/Signup";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />

        <Route element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route
            exact
            path="/product/:identifier"
            element={<ProductDetails />}
          />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/*" element={<Notfound />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

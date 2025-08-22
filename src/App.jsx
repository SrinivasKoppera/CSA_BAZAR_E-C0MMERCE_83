import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import { Routes, Route } from "react-router-dom";
import About from "./component/About/About";
import Home from "./component/Home/Home";
import Contact from "./component/Contact/Contact";
import Notfound from "./component/Notfound";
import Footer from "./component/Footer/footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

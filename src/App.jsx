import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./components/Home/HomeLayout";
import Product from "./Product/Product";
import Navbar from "./components/Navbar/Navbar";
import PreviewOrder from "./components/PreviewList/PreviewOrder";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/shop-now" element={<Product />} />
          <Route path="/preview-box" element={<PreviewOrder />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;

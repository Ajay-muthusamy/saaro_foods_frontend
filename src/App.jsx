import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./components/Home/HomeLayout";
import Product from "./Product/Product";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}/>
          <Route path="/shop-now" element={<Product />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

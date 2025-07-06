import React from "react";
import Header from "./static/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./static/Footer";
import PiggyBank from "./pages/PiggyBank";
import Invest from "./pages/Invest";
import Stories from "./pages/Stories";
import Hero from "./components/block/home/Hero";
import Security from "./components/block/home/Security";
import Savings from "./components/block/home/Savings";
import Sidebar from "./static/Sidebar";
import Shop from "./pages/Shop";
import FAQs from "./pages/FAQs";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/piggybank" element={<PiggyBank />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/FAQs" element={<FAQs />} />

        </Routes>
      
        <Hero/>
        <Security/>
        <Savings/>
        <Sidebar/>
        <Footer />
        

      </BrowserRouter>
    </div>
  );
};

export default App;

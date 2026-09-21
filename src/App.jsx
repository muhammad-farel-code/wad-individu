import { BrowserRouter, Routes, Route } from "react-router";
import Footer from "./components/Footer";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";    
import Pricing from "./pages/Pricing";

import featuresData from "./data/features.js";


const App = () => {
  const [features, setFeatures] = useState(featuresData);
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home features={features} />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />         
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        {/* <Route path="/lookbook" element={<Partners />} /> 
        <Route path="/contact" element={<Partners />} />*/}
      </Routes>
    <Footer/>
    </>
  )
}

export default App

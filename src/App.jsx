import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Lookbook from './pages/Lookbook';

function App() {
  return (
    <>
    <ScrollToTop />
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App

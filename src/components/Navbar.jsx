import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-[90px] fixed top-0 bg-[#1e1e1e] bg-opacity-85 flex justify-between items-center pl-[75px] pr-[75px] z-50 shadow-[0_5px_5px_rgba(30,30,30,0.25)]">
        <h4 className="font-playfair font-black text-[#ffffff] text-[40px] text-center">MOS</h4>
        <div className="flex justify-between">
            <Link to='/' className="font-mont navbar-link">Home</Link>
            <Link to='/about' className="font-mont navbar-link ml-[44px]">About</Link>
            <Link to='/service' className="font-mont navbar-link ml-[44px]">Services</Link>
            <Link to='#' className="font-mont navbar-link ml-[44px]">Lookbook</Link>
            <Link to='#' className="font-mont navbar-link ml-[44px]">Contact</Link>
        </div>
    </nav>
  );
};

export default Navbar;

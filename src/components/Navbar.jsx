import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-24 fixed top-0 bg-[#1e1e1e] bg-opacity-85 flex justify-between items-center pl-14 pr-14">
        <h4 className="font-playfair font-black text-[#ffffff] text-[40px] text-center">MOS</h4>
        <div className="flex justify-between">
            <Link to='#' className="font-mont navbar-link">Home</Link>
            <Link to='#' className="font-mont navbar-link">About</Link>
            <Link to='#' className="font-mont navbar-link">Services</Link>
            <Link to='#' className="font-mont navbar-link">Lookbook</Link>
            <Link to='#' className="font-mont navbar-link">Contact</Link>
        </div>
    </nav>
  );
};

export default Navbar;

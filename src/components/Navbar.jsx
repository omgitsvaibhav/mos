import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="w-full h-[70px] lg:h-[90px] fixed top-0 bg-[#1e1e1e] bg-opacity-85 flex justify-between items-center px-[26px] lg:px-[75px] z-40 shadow-[0_5px_5px_rgba(30,30,30,0.25)]">
        <Link to="/" className="font-playfair font-black text-[#ffffff] text-[32px] lg:text-[40px] text-center">
          MOS
        </Link>
        <div className="lg:hidden" onClick={toggleSidebar}>
          <LazyLoadImage src="/assets/menu.png" alt="menu" width={25} height={25} />
        </div>
        <div className="hidden lg:flex lg:justify-between">
          <Link to="/" className={`font-mont navbar-link ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/about" className={`font-mont navbar-link ml-[44px] ${location.pathname === '/about' ? 'active' : ''}`}>
            About
          </Link>
          <Link to="/service" className={`font-mont navbar-link ml-[44px] ${location.pathname === '/service' ? 'active' : ''}`}>
            Services
          </Link>
          <Link to="/lookbook" className={`font-mont navbar-link ml-[44px] ${location.pathname === '/lookbook' ? 'active' : ''}`}>
            Lookbook
          </Link>
          <Link to="/contact" className={`font-mont navbar-link ml-[44px] ${location.pathname === '/contact' ? 'active' : ''}`}>
            Contact
          </Link>
        </div>
      </nav>
      <div 
        className={`fixed top-0 flex flex-col space-y-[100px] bg-[#282829] w-full h-screen z-50 lg:hidden transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex justify-between items-center p-[20px] h-[72px]">
          <h4 className="font-playfair font-black text-[#ffffff] text-[32px] lg:text-[40px] text-center">
            MOS
          </h4>
          <LazyLoadImage 
            src="/assets/close.png"
            alt="close"
            onClick={toggleSidebar}
            width={25}
            height={25}
          />
        </div>
        <div className="grid place-items-center gap-[30px]">
          <Link to="/" className="font-mont navbar-link-mobile text-center" onClick={toggleSidebar}>
            Home
          </Link>
          <Link to="/about" className="font-mont navbar-link-mobile text-center" onClick={toggleSidebar}>
            About
          </Link>
          <Link to="/service" className="font-mont navbar-link-mobile text-center" onClick={toggleSidebar}>
            Services
          </Link>
          <Link to="/lookbook" className="font-mont navbar-link-mobile text-center" onClick={toggleSidebar}>
            Lookbook
          </Link>
          <Link to="/contact" className="font-mont navbar-link-mobile text-center" onClick={toggleSidebar}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

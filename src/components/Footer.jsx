import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center w-full h-[350px] bg-[#1e1e1e] pl-[220px] pr-[220px]">
      <div className="grid grid-cols-1 space-y-[20px]">
          <h1 className="font-playfair text-white text-[42px] font-black leading-[45px]">
            <span className="tracking-wide">Makeovers</span><br/>
            by Sukanya
          </h1>
        <div className="flex flex-cols-2 items-center">
          <Link to="https://www.youtube.com/@makeoversbysukanya" target="blank" className="mr-[15px]">
            <img src="/assets/yt.png" alt="youtube" className="h-[38px]" />
          </Link>
          <Link to="https://www.instagram.com/makeoversbysukanya/?igsh=bGU0Y2Y4cGV2ejIw" target="blank">
            <img src="/assets/Insta.png" alt="instagram" className="w-[22px] h-[22px]" />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[124px] mt-[50px]">
        <div className="flex flex-col">
          <p className="font-mont font-bold text-[20px] text-white">Discover</p>
          <div className="grid mt-[24px] space-y-[20px]">
            <Link to="/" className="font-mont footer-link">
              Home
            </Link>
            <Link to="/about" className="font-mont footer-link">
              About
            </Link>
            <Link to="/service" className="font-mont footer-link">
              Services
            </Link>
            <Link to="/lookbook" className="font-mont footer-link">
              Lookbook
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-mont font-bold text-[20px] text-white">Contact</p>
          <div className="grid mt-[24px] space-y-[20px]">
            <div>
              <p className="font-mont font-bold text-[16px] text-white">Call Us</p>
              <Link to="tel:+919370189427" className="font-mont footer-link">
                  +91 9370189427
              </Link>
            </div>
            <div>
            <p className="font-mont font-bold text-[16px] text-white">Email Us</p>
              <Link to="mailto:vaish.manerikar@gmail.com" target="blank" className="font-mont footer-link">
              vaish.manerikar@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

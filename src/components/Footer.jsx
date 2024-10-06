import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center w-full h-[423px] bg-[#1e1e1e] pl-[220px] pr-[220px]">
      <div className="grid grid-cols-1 space-y-[20px]">
          <h1 className="font-playfair text-white text-[42px] font-black">
            Makeovers<br/>
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
            <Link to="#" className="font-mont footer-link">
              Home
            </Link>
            <Link to="#" className="font-mont footer-link">
              About
            </Link>
            <Link to="#" className="font-mont footer-link">
              Services
            </Link>
            <Link to="#" className="font-mont footer-link">
              Lookbook
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-mont font-bold text-[20px] text-white">Contact</p>
          <div className="grid mt-[24px] space-y-[20px]">
            <Link to="#" className="font-mont footer-link">
              WhatsApp Us
            </Link>
            <Link to="#" className="font-mont footer-link">
              Email Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Footer = () => {
  return (
    <footer className="grid place-items-center gap-10 lg:gap-20 w-full bg-[#1e1e1e] px-[30px] pt-[55px] lg:px-[180px] lg:pt-[100px] pb-[50px]">
      <div className="w-full flex flex-col max-lg:space-y-[58px] lg:flex-row justify-between items-baseline">
        <div className="grid grid-cols-2 gap-x-32 lg:grid-cols-1 lg:gap-y-5">
            <div className="grid">
              <p className="lg:tracking-wide font-playfair text-white text-[32px] lg:text-[42px] font-black leading-[45px]">
                Makeovers
              </p>
              <p className="font-playfair text-white text-[30px] lg:text-[42px] font-black leading-[45px]">by Sukanya</p>
            </div>
          <div className="flex items-center">
            <Link to="https://www.youtube.com/@makeoversbysukanya" target="blank" className="mr-[15px]">
              <img src="/assets/yt.png" alt="youtube" className="h-[38px]" />
            </Link>
            <Link to="https://www.instagram.com/makeoversbysukanya/?igsh=bGU0Y2Y4cGV2ejIw" target="blank">
              <img src="/assets/Insta.png" alt="instagram" className="w-[22px] h-[22px]" />
            </Link>
          </div>
        </div>
        <div className="grid max-md:gap-y-10 lg:grid-cols-2 lg:gap-x-[124px]">
          <div className="flex flex-col">
            <p className="font-mont font-bold text-[20px] text-white">Discover</p>
            <div className="grid mt-[15px] lg:mt-[24px] space-y-[15px]">
              <Link to="/" className="font-mont footer-link-mobile lg:footer-link">
                Home
              </Link>
              <Link to="/about" className="font-mont footer-link-mobile lg:footer-link">
                About
              </Link>
              <Link to="/service" className="font-mont footer-link-mobile lg:footer-link">
                Services
              </Link>
              <Link to="/lookbook" className="font-mont footer-link-mobile lg:footer-link">
                Lookbook
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-mont font-bold text-[20px] text-white">Contact</p>
            <div className="grid max-md:mt-[15px] lg:mt-[24px] space-y-[15px]">
              <div>
                <p className="font-mont font-semibold text-[16px] text-white">Call Us</p>
                <Link to="tel:+919370189427" className="font-mont footer-link-mobile lg:footer-link">
                    +91 9370189427
                </Link>
              </div>
              <div>
              <p className="font-mont font-semibold text-[16px] text-white">Email Us</p>
                <Link to="mailto:vaish.manerikar@gmail.com" target="blank" className="font-mont footer-link-mobile lg:footer-link">
                vaish.manerikar@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[#878686] w-full text-[13px] lg:text-[16px] text-center">© 2024 Makeovers by Sukanya. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

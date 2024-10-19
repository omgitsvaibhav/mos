import { Link } from "react-router-dom";
import { PhoneCallIcon } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Contact = () => {
  return (
    <section className="animate-fadeIn">
      <section className="bg-contact h-[310px] lg:h-[600px] w-full bg-cover lg:bg-[center_top_-30rem] relative" />
      <div className="page-header-gradient" />
      <section className="px-[25px] lg:px-[76px] bg-white pb-[52px] lg:pb-[90px]">
        <h1 className="font-playfair font-bold text-[32px] mb-[22px] lg:text-[72px] lg:mb-[27px]">
          Contact Us
        </h1>
        <p className="font-mont text-[14px] lg:text-[16px] text-justify lg:w-3/4 mb-[30px] lg:mb-[60px]">
          We’d love to connect with you! Contact us to schedule a call, request
          a personalized quotation, or address any inquiries you may have.
          Please note that our quotes are tailored specifically for each
          wedding, taking into account your location, timeline, and the services
          you need. Every makeover we create is uniquely designed to reflect
          your individual style. Reach out to us using the contact details
          below, and let’s begin the journey to your perfect look!
        </p>
        <div className="flex max-md:flex-col justify-evenly items-center bg-[#F9EBEB] font-mont text-[16px] py-10 lg:py-12">
          <Link to="https://wa.me/message/U4OU4KSH7NAFG1" target="blank">
            <LazyLoadImage
              src="/assets/wa.png"
              alt="whatsapp"
              className="w-10 h-10 lg:w-14 lg:h-14"
            />
          </Link>

          <div className="max-md:my-10 max-md:w-[60%] h-[0.5px] lg:h-[100px] lg:border-l max-md:bg-[#fda9a9] lg:border-[#fda9a9]"></div>

          <Link to="mailto:vaish.manerikar@gmail.com" target="blank">
            <LazyLoadImage
              src="/assets/email.png"
              alt="email"
              className="w-10 h-8 lg:w-14 lg:h-12"
            />
          </Link>

          <div className="max-md:my-10 max-md:w-[60%] h-[0.5px] lg:h-[100px] lg:border-l max-md:bg-[#fda9a9] lg:border-[#fda9a9]"></div>

          <Link
            to="https://www.instagram.com/makeoversbysukanya/?igsh=bGU0Y2Y4cGV2ejIw"
            target="blank"
          >
            <LazyLoadImage
              src="/assets/Insta.png"
              alt="instagram"
              className="w-10 h-10 lg:w-14 lg:h-14"
            />
          </Link>

          <div className="max-md:my-10 max-md:w-[60%] h-[0.5px] lg:h-[100px] lg:border-l max-md:bg-[#fda9a9] lg:border-[#fda9a9] lg:hidden"></div>
          
              <Link to='tel:+919370189427' className="lg:hidden">
                  <LazyLoadImage  src="/assets/phone.png" alt="phone" className="w-10 h-10 lg:w-14 lg:h-14"/>
              </Link>
              
          
        </div>
      </section>
    </section>
  );
};

export default Contact;

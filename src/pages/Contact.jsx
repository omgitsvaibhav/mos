import { Link } from "react-router-dom";
import { PhoneCallIcon } from "lucide-react";

const Contact = () => {
  return (
    <section className="animate-fadeIn">
      <section className="bg-contact h-[600px] w-full bg-cover bg-[center_top_-30rem] relative" />
      <div className="page-header-gradient" />
      <section className="px-[76px] bg-white mb-[90px]">
        <h1 className="font-playfair font-bold text-[72px] mb-[27px]">
          Contact Us
        </h1>
        <p className="font-mont text-[16px] text-justify w-3/4">
          We’d love to connect with you! Contact us to schedule a call, request
          a personalized quotation, or address any inquiries you may have.
          Please note that our quotes are tailored specifically for each
          wedding, taking into account your location, timeline, and the services
          you need.
          Every makeover we create is uniquely designed to reflect your
          individual style.
        </p>
        <p className="font-mont text-[16px] text-justify w-3/4 mb-[60px]">
          Reach out to us using the contact details below, and
          let’s begin the journey to your perfect look!
        </p>
        <div className="flex justify-evenly items-center bg-[#F9EBEB] font-mont text-[16px] py-12">
          <Link to="https://wa.me/message/U4OU4KSH7NAFG1" target="blank">
            <img src="/assets/wa.png" alt="whatsapp" className="w-14 h-14" />
          </Link>

          <div className="h-[100px] w-[0.8px] bg-[#fda9a9]"></div>

          <Link to="mailto:vaish.manerikar@gmail.com" target="blank">
            <img src="/assets/email.png" alt="email" className="w-14 h-12" />
          </Link>

          <div className="h-[100px] w-[0.8px] bg-[#fda9a9]"></div>

          <Link
            to="https://www.instagram.com/makeoversbysukanya/?igsh=bGU0Y2Y4cGV2ejIw"
            target="blank"
          >
            <img
              src="/assets/Insta.png"
              alt="instagram"
              className="w-14 h-14"
            />
          </Link>

          {/* <div className="h-[100px] w-[0.8px] bg-[#fda9a9]"></div>
          <div className="grid place-items-center gap-4">
              <Link to='tel:+919370189427'>
                  <img src="/assets/phone.png" alt="phone" className="w-14 h-14"/>
              </Link>
              <Link to="tel:+919370189427" className="transition-all duration-500 ease-in-out hover:font-semibold">
                  +91 9370189427
              </Link>
          </div> */}
        </div>
      </section>
    </section>
  );
};

export default Contact;

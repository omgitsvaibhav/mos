import { Link } from "react-router-dom";
import { PhoneCallIcon } from "lucide-react";

const Contact = () => {
  return (
    <>
      <section className="bg-contact h-[600px] w-full bg-cover bg-[center_top_-30rem] relative" />
      <div className="page-header-gradient" />
      <section className="px-[76px] bg-white mb-[90px]">
        <h1 className="font-playfair font-bold text-[72px] mb-[27px]">
          Contact Us
        </h1>
        <p className="font-mont text-[16px]">
          Schedule a date, request a quotation, or address any
          inquiries you may have with us. Please note, our
        </p>
        <p className="font-mont text-[16px]">
          quotations are personalized for each wedding, considering the
          location, your schedule, and the services
        </p>
        <p className="font-mont text-[16px] mb-[60px]">
          required. Every makevoer we design is uniquely tailored to you.
        </p>
        <div className="flex justify-evenly items-center bg-[#F9EBEB] font-mont text-[16px] py-12">
          <Link to="https://wa.me/message/U4OU4KSH7NAFG1" target="blank">
            <img src="/assets/wa.png" alt="whatsapp" className="w-14 h-14" />
          </Link>

          <div className="h-[100px] w-[0.8px] bg-[#fda9a9]"></div>

          <Link to="mailto:manager@mosbeauty.in" target="blank">
            <img src="/assets/email.png" alt="email" className="w-14 h-12" />
          </Link>

          <div className="h-[100px] w-[0.8px] bg-[#fda9a9]"></div>

          <Link to="https://www.instagram.com/makeoversbysukanya/?igsh=bGU0Y2Y4cGV2ejIw" target="blank">
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
    </>
  );
};

export default Contact;

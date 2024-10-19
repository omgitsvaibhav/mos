import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Service = () => {
  return (
    <section className="animate-fadeIn">
      <section className="bg-service page-header" />
      <div className="page-header-gradient" />
      <section className="px-[15px] lg:px-[76px] bg-white pb-[60px] lg:pb-[90px]">
        <h1 className="font-playfair font-bold text-[32px] lg:text-[72px] mb-[27px]">
          Our Services
        </h1>
        <p className="font-mont text-[14px] lg:text-[16px] mb-[55px] lg:w-3/4 text-justify">
        From luxury weddings and high-fashion projects to exclusive makeup
          workshops and private lessons, our expertise covers a wide range of
          beauty needs. At MakeoversbySukanya, we specialize in providing
          on-site makeup and hairstyling services, offering convenience and
          flexibility for our clients wherever they need us.
          Explore our services below to see how we can help you achieve your
          perfect look.
        </p>
        <div className="grid gap-y-[44px] lg:gap-[67px]">
          <div className="flex flex-col-reverse lg:flex-row lg:justify-between bg-[#f9ebeb] relative parent max-md:w-[352px]">
            <div className="flex flex-col justify-center lg:space-y-8 relative lg:py-10 lg:px-10 lg:w-full max-md:mb-[40px] max-md:px-[24px]">
              <h2 className="font-playfair text-[24px] max-md:mb-[12px] lg:text-[48px]">Make Up</h2>
              <p className="text-justify font-mont text-[14px] max-md:mb-[37px]">
                We’re passionate about weddings and deeply honored to be part of
                such a cherished moment in your life. With over a decade of
                experience in luxury destination weddings, I bring refined
                expertise and artistry to ensure you look and feel your absolute
                best. We use only the finest luxury brands—MAC, Estee Lauder,
                Bobbi Brown, Laura Mercier, and more—guaranteeing a radiant,
                long-lasting finish.
                <br />
                <br />
                Whether you’re seeking bridal makeup, consultations, pricing
                details, or have any other questions, we’re here to help. Take a
                look at our lookbook to see how we’ve created unforgettable,
                stunning bridal looks, and let’s start crafting yours today!
              </p>
              <Link
                to="/contact"
                className="w-[105px] h-[35px] text-[16px] py-1 font-playfair font-bold lg:text-[20px] lg:h-[50px] lg:w-[150px] other-button-hover lg:py-2 bg-[#de919b] text-center"
              >
                Contact Us
              </Link>
            </div>
            <LazyLoadImage 
              className="w-[352px] max-md:h-[305px] lg:child lg:w-[480px] object-cover max-md:mb-[24px]"
              src="/service/service 1.jpg"
              alt="service 1"
            />
          </div>
          <div className="flex flex-col-reverse lg:flex-row lg:justify-between bg-[#f9ebeb] relative parent max-md:w-[352px] lg:max-h-[420px]">
            <div className="flex flex-col justify-center lg:space-y-8 relative lg:py-10 lg:px-10 lg:w-full max-md:mb-[40px] max-md:px-[24px]">
              <h2 className="font-playfair text-[24px] max-md:mb-[12px] lg:text-[48px]">Hair Styling</h2>
              <p className="text-justify font-mont text-[14px] max-md:mb-[37px]">
                Hairstyling is an art, and we take great pride in creating
                beautiful styles that complement your bridal look. We are here
                to bring our decade long expertise to design everything from
                timeless updos to modern, effortless Hairstyles.
                <br />
                <br />
                Using only the top-quality products and techniques, we ensure
                your hair stays perfect throughout your special day. With us,
                your vision of the dreamy bridal look is bound to come to life.
              </p>
              <Link
                to="/contact"
                className="w-[105px] h-[35px] text-[16px] py-1 font-playfair font-bold lg:text-[20px] lg:h-[50px] lg:w-[150px] other-button-hover lg:py-2 bg-[#de919b] text-center"
              >
                Contact Us
              </Link>
            </div>
            <LazyLoadImage 
              className="w-[352px] max-md:h-[305px] lg:child lg:w-[480px] object-cover max-md:mb-[24px] object-top"
              src="/service/service 2.JPG"
              alt="service 2"
            />
          </div>
          <div className="flex flex-col-reverse lg:flex-row lg:justify-between bg-[#f9ebeb] relative parent max-md:w-[352px] lg:max-h-[480px]">
            <div className="flex flex-col justify-center lg:space-y-8 relative lg:py-10 lg:px-10 lg:w-full max-md:mb-[40px] max-md:px-[24px]">
              <h2 className="font-playfair text-[24px] max-md:mb-[12px] lg:text-[48px]">Workshops</h2>
              <p className="text-justify font-mont text-[14px] max-md:mb-[37px]">
                Our exclusive makeup workshops cater to both beginners and
                advanced learners, offering a comprehensive learning experience
                for all levels. For beginners, we cover the
                fundamentals—understanding skin types, selecting the right
                products, and mastering the basics of makeup application. For
                advanced learners, we dive deeper into professional techniques,
                from perfecting eye makeup to layering products for a flawless
                finish.
                <br />
                <br />
                You’ll also learn to create various looks, from dewy natural to
                regal bridal and high-fashion glam, mastering the art of makeup
                artistry. Whether you’re just starting out or looking to refine
                your skills, our workshops offer expert guidance every step of
                the way.
              </p>
              <Link
                to="/contact"
                className="w-[105px] h-[35px] text-[16px] py-1 font-playfair font-bold lg:text-[20px] lg:h-[50px] lg:w-[150px] other-button-hover lg:py-2 bg-[#de919b] text-center"
              >
                Contact Us
              </Link>
            </div>
            <LazyLoadImage 
              className="w-[352px] max-md:h-[305px] lg:child lg:w-[480px] object-cover max-md:mb-[24px] object-[center_-3rem] lg:object-top"
              src="https://res.cloudinary.com/dsy1vfp2c/image/upload/v1729330685/service_3.jpg"
              alt="service 3"
            />
          </div>
        </div>
      </section>

    </section>
  );
};

export default Service;

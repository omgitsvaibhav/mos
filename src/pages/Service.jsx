import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Service = () => {
  return (
    <section className="animate-fadeIn">
      <section className="bg-service page-header" />
      <div className="page-header-gradient" />
      <section className="px-[76px] bg-white pb-[90px]">
        <h1 className="font-playfair font-bold text-[72px] mb-[27px]">
          Our Services
        </h1>
        <p className="font-mont text-[16px] mb-[55px] w-3/4 text-justify">
        From luxury weddings and high-fashion projects to exclusive makeup
          workshops and private lessons, our expertise covers a wide range of
          beauty needs. At MakeoversbySukanya, we specialize in providing
          on-site makeup and hairstyling services, offering convenience and
          flexibility for our clients wherever they need us.
          Explore our services below to see how we can help you achieve your
          perfect look.
        </p>
        <div className="grid gap-[67px]">
          <div className="flex flex-row justify-between bg-[#f9ebeb] relative parent max-h-[450px]">
            <div className="flex flex-col relative p-10 w-[850px]">
              <h2 className="font-playfair text-[48px] mb-4">Make Up</h2>
              <p className="text-justify font-mont text-[14px] mb-10">
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
                className="font-playfair font-bold text-[20px] h-[50px] w-[150px] other-button-hover py-2 bg-[#de919b] text-center"
              >
                Contact Us
              </Link>
            </div>
            <LazyLoadImage 
              className="child w-[480px] object-cover"
              src="/service/service 1.jpg"
              alt="service 1"
            />
          </div>
          <div className="flex flex-row justify-between bg-[#f9ebeb] relative parent max-h-[400px]">
            <div className="flex flex-col relative p-10 w-[850px]">
              <h2 className="font-playfair text-[48px] mb-4">Hair Styling</h2>
              <p className="text-justify font-mont text-[14px] mb-10">
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
                className="font-playfair font-bold text-[20px] h-[50px] w-[150px] other-button-hover py-2 bg-[#de919b] text-center"
              >
                Contact Us
              </Link>
            </div>
            <LazyLoadImage 
              className="child w-[480px] object-cover object-top"
              src="/service/service 2.JPG"
              alt="service 2"
            />
          </div>
          <div className="flex flex-row justify-between bg-[#f9ebeb] relative parent max-h-[450px]">
            <div className="flex flex-col relative p-10 w-[850px]">
              <h2 className="font-playfair text-[48px] mb-4">Workshops</h2>
              <p className="text-justify font-mont text-[14px] mb-10">
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
                className="font-playfair font-bold text-[20px] h-[50px] w-[150px] other-button-hover py-2 bg-[#de919b] text-center"
              >
                Contact Us
              </Link>
            </div>
            <LazyLoadImage 
              className="child w-[480px] object-cover"
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

import { Link } from "react-router-dom";
import TestimonialSlider from "../components/Slider";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { useState, useEffect } from "react";

function AnimatedNumber({ from, to }) {
  const [animate, setAnimate] = useState(false);
  const {ref, inView} = useInView({
    triggerOnce: false,
    threshold: 0.10
  });

  useEffect(() => {
    inView ? setAnimate(true) : setAnimate(false);
  }, [inView])

  const { number } = useSpring({
    from: { number: animate && from },
    to: { number: animate && to },
    config: { tension: 10, friction: 5 },
    pause: !inView,
  });

  return (
      <animated.span ref={ref} >
      {number.to((n) => Math.floor(n))}
    </animated.span>

  );
}

const Home = () => {
  return (
    <section className="animate-fadeIn">
      <section className="relative h-[700px] lg:h-[830px] w-full overflow-hidden">
      <video
        className="max-md:hidden lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-full lg:object-cover"
        autoPlay
        loop
        muted
        controls={false}
        playsInline
      >
        <source src="https://res.cloudinary.com/dsy1vfp2c/video/upload/v1729330177/vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover lg:hidden"
        autoPlay
        loop
        muted
        controls={false}
        playsInline
      >
        <source src="https://res.cloudinary.com/dsy1vfp2c/video/upload/v1729355970/mobile_yd5eiw.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex flex-col justify-between max-md:pt-[110px] max-md:pb-[200px] lg:justify-center items-center h-full">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="font-playfair font-black text-white text-[34px] lg:text-[96px]">
            Makeovers by Sukanya
          </h1>
          <p className="font-mont font-[400] text-white text-[18px] lg:text-[26px]">
            Taking bookings all over the world
          </p>
        </div>
        <Link
          to='/contact'
          className="button-hover font-playfair font-bold text-[18px] lg:text-[24px] text-[#543737] w-[110px] h-[35px] lg:w-[172px] lg:h-[48px] text-center bg-[#faeae4] lg:mt-16 py-1"
        >
          Contact Us
        </Link>
      </div>
    </section>
      <section className="min-h-[450px] w-full pb-12">
        <h1 className="font-playfair text-[26px] lg:text-[48px] font-bold mb-[40px] lg:mb-[57px] mt-[40px] text-center">
          Awards
        </h1>
        <div className="flex lg:justify-evenly flex-col lg:flex-row items-center">
        <div className="grid lg:gap-5">
            <LazyLoadImage 
              src="/home/award 1.png"
              alt="wed me good"
              className="h-[165px] w-[205px] place-self-center p-3"
            />
            <div>
              <p className="text-center font-mont font-bold text-[14px]">
              WEDDINGSUTRA
              </p>
              <p className="font-mont text-[14px] text-center">Best Bridal Makeup Artist in India - 2024</p>
            </div>
          </div>
        <div className="max-md:my-6 max-md:w-3/4 h-[0.5px] lg:h-[280px] lg:border-l max-md:bg-black lg:border-black"></div>
          <div className="grid gap-2 lg:gap-4">
            <LazyLoadImage 
              src="/home/wedmegood.png"
              alt="wed me good"
              className="h-[165px] w-[235px] place-self-center"
            />
            <div>
              <p className="text-center font-mont font-bold text-[14px]">
                WedMeGood
              </p>
              <p className="font-mont text-[14px] text-center">Best Bridal Makeup Artist in Goa - 2023</p>
            </div>
          </div>
          <div className="max-md:my-6 max-md:w-3/4 h-[0.5px] lg:h-[280px] lg:border-l max-md:bg-black lg:border-black"></div>
          <div className="grid gap-2 lg:gap-4">
            <LazyLoadImage 
              src="/home/award.png"
              alt="award"
              className="h-[165px] w-[200px] place-self-center"
            />
            <div>
              <p className="text-center font-mont font-bold text-[14px]">
                WEDDINGSUTRA
              </p>
              <p className="font-mont text-[14px] text-center">Best Cocktail Makeup Artist in India - 2019</p>
            </div>
          </div>
        </div>
      </section>
      <TestimonialSlider/>
      <section className="flex flex-col justify-center items-center w-full px-[44px] lg:px-[140px]">
        <h1 className="font-playfair text-[#343232] text-[24px] lg:text-[48px] font-bold mb-[20px] mt-[50px] lg:mt-[60px] text-center">Our Bridal Lookbook</h1>
        <div className="max-md:hidden">
          <p className="font-mont text-[14px] text-center">Dive into our exquisite bridal lookbook</p>
          <p className="font-mont text-[14px] text-center">to explore stunning transformations we have achieved on our beautiful brides having</p>
          <p className="font-mont text-[14px] text-center mb-[53px]">tailored to various bridal traditions and styles</p>
        </div>
        <p className="font-mont text-[14px] text-center mb-[40px] lg:hidden">Dive into our exquisite bridal lookbook to explore stunning transformations we have achieved on our beautiful brides having tailored to various bridal traditions and styles</p>
        <div className="grid grid-cols-2 place-items-center gap-3 lg:flex lg:flex-row w-full lg:justify-center lg:items-center mb-[40px]">
          <figure className="relative group">
            <LazyLoadImage  src="https://res.cloudinary.com/dsy1vfp2c/image/upload/v1729330625/lookbook1.webp" alt="lookbook 1" className="w-[200px] h-[150px] lg:w-[273px] lg:h-[273px] object-cover object-center lg:mx-[24px]"/>
            <figcaption className="max-md:hidden absolute w-[273px] py-2 text-center bottom-0 left-6 h-8 font-mont text-[12px] bg-[#f9ebeb] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">The delicate floral bride - a subtle beauty</figcaption>
          </figure>
          <figure className="relative group">
            <LazyLoadImage  src="/home/lookbook2.jpg" alt="lookbook 2" className="w-[200px] h-[150px] lg:w-[273px] lg:h-[273px] object-cover object-right lg:mx-[24px]"/>
            <figcaption className="max-md:hidden absolute w-[273px] py-2 text-center bottom-0 left-6 h-8 font-mont text-[12px] bg-[#f9ebeb] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">The regal bride - an absolute royalty</figcaption>
          </figure>
          <figure className="relative group">
            <LazyLoadImage  src="https://res.cloudinary.com/dsy1vfp2c/image/upload/v1729330636/lookbook3.webp" alt="lookbook 3" className="w-[200px] h-[150px] lg:w-[273px] lg:h-[273px] object-cover lg:mx-[24px]"/>
            <figcaption className="max-md:hidden absolute w-[273px] py-2 text-center bottom-0 left-6 h-8 font-mont text-[12px] bg-[#f9ebeb] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">The perfect sultry bride - a timeless allure</figcaption>
          </figure>
          <figure className="relative group">
            <LazyLoadImage  src="https://res.cloudinary.com/dsy1vfp2c/image/upload/v1729330645/lookbook4.webp" alt="lookbook 4" className="w-[200px] h-[150px] lg:w-[273px] lg:h-[273px] object-cover object-center lg:mx-[24px]"/>
            <figcaption className="max-md:hidden absolute w-[273px] py-2 text-center bottom-0 left-6 h-8 font-mont text-[12px] bg-[#f9ebeb] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">The fresh dewy bride - a classic charm</figcaption>
          </figure>
        </div>
        <Link to='/lookbook' className="font-playfair font-bold text-[14px] lg:text-[20px] other-button-hover text-center h-[35px] w-[170px] lg:h-[49px] lg:w-[232px] bg-[#de919b] py-2 mb-[60px]">View Full Lookbook</Link>
      </section>
      <section className="bg-[#f9ebeb] flex flex-col justify-center items-center w-full px-[45px] lg:px-[144px] py-[47px] lg:py-[55px]">
      <h1 className="font-playfair font-bold text-[28px] lg:text-[40px] text-[#343232] text-center mb-[25px] lg:mb-[44px]">About Us</h1>
      <div className="flex flex-col-reverse max-md:items-center lg:flex-row">
        <div className="max-md:grid max-md:place-items-center relative w-[310px] lg:w-[497px] lg:pr-[39px] font-mont text-[14px]">
          <p className="text-justify">Welcome to Makeovers by Sukanya, where every bride is transformed into a masterpiece of elegance admiration, uniquely crafted for her special day. With over a decade of experience, Sukanya has become one of India’s leading bridal makeup artists, having brought her artistry to more than 3,000 brides worldwide.</p>
          <br className="max-md:hidden"/>
          <p className="text-justify">Sukanya’s love affair with makeup began in her childhood, fueled by a deep passion for art and a fascination with colours.</p>
          <div className="grid grid-cols-3 max-md:gap-4 place-items-baseline max-md:mt-[25px] lg:mt-[35px]">
            <div className="flex flex-col">
              <h3 className="font-playfair font-bold text-[28px] lg:text-[40px] text-center inline-flex">
                <AnimatedNumber
                  from={2950}
                  to={3000}
                />+</h3>
              <span className="font-mont text-[14px] text-center">BRIDES</span>
            </div>
            <div className="flex flex-col pl-5">
            <h3 className="font-playfair font-bold text-[28px] lg:text-[40px] text-center inline-flex">
                <AnimatedNumber
                  from={5}
                  to={10}
                />+</h3>
              <span className="font-mont text-[14px] text-center">YEARS</span>
            </div>
            <div className="flex flex-col">
            <h3 className="font-playfair font-bold text-[28px] lg:text-[40px] text-center inline-flex">
                <AnimatedNumber
                  from={15}
                  to={65}
                />k+</h3>
              <span className="font-mont text-[14px] text-center">INSTAGRAM<br/>FOLLOWERS</span>
            </div>
          </div>
          <Link to='/about' className="max-md:mt-8 font-playfair font-bold text-[16px] lg:text-[20px] other-button-hover text-center h-[35px] lg:h-[49px] w-[110px] lg:w-[157px] bg-[#de919b] py-1 lg:py-2 lg:absolute lg:bottom-0 lg:left-0">Read More</Link>
        </div>
        <div alt="Sukanya image" className="max-md:mb-3 w-[310px] h-[190px] lg:w-[625px] lg:h-[400px] bg-home bg-cover bg-[center_top_-4rem] lg:bg-[center_top_-8rem]"/>
      </div>
      </section> 
      <section className="max-md:grid w-full px-[16px] lg:px-[255px] lg:min-h-[680px] max-md:py-[50px] lg:py-[55px]">
        <h1 className="font-playfair text-[28px] lg:text-[40px] font-bold text-[#343232] text-center mb-[35px] lg:mb-[55px]">Services</h1>
        <div className="flex flex-col lg:flex-row lg:justify-around max-md:mb-[40px] lg:space-x-[90px] max-md:space-y-[15px]">
          <div className="max-md:py-5 max-md:space-x-[16px] max-md:flex max-md:items-center lg:grid lg:place-items-center lg:h-[300px] lg:px-[25px] lg:pt-[25px] group bg-[#f9ebeb] lg:bg-opacity-0 lg:transition-all lg:duration-500 lg:ease-in-out lg:hover:bg-opacity-100 lg:transform lg:hover:h-[430px] lg:hover:shadow-[8px_8px_10px_0px_rgba(0,0,0,0.1)]">
            <LazyLoadImage  alt="service 1" src="https://res.cloudinary.com/dsy1vfp2c/image/upload/v1729330661/service_1.webp" className="max-md:ml-8 rounded-full h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] object-cover"/>
            <div className="max-md:w-1/2 max-md:grow">
              <p className="font-playfair text-[20px] max-md:mb-2 lg:text-[24px] lg:mt-6 lg:text-center">Makeup</p>
              <p className="font-mont text-[14px] lg:text-center lg:mb-[30px]">Flawless bridal makeup<br className="max-md:hidden"/> for destination weddings</p>
            </div>
            <Link to="/service" className="max-md:hidden bg-[#de919b] w-[180px] mb-[40px] font-playfair text-[19px] text-center h-[39px] py-1 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 hover:bg-transparent hover:border-[1px] hover:border-[#90444d] hover:border-solid hover:text-[#90444d]">Know more</Link>
          </div>
          <div className="max-md:py-5 max-md:space-x-[16px] max-md:flex max-md:items-center lg:grid lg:place-items-center lg:h-[300px] lg:px-[25px] lg:pt-[25px] group bg-[#f9ebeb] lg:bg-opacity-0 lg:transition-all lg:duration-500 lg:ease-in-out lg:hover:bg-opacity-100 lg:transform lg:hover:h-[430px] lg:hover:shadow-[8px_8px_10px_0px_rgba(0,0,0,0.1)]">
            <LazyLoadImage  src="https://res.cloudinary.com/dsy1vfp2c/image/upload/v1729330665/service_2.webp" alt="service 2" className="max-md:ml-8 rounded-full h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] object-cover"/>
            <div className="max-md:w-1/2 max-md:grow">
              <p className="font-playfair text-[20px] max-md:mb-2 lg:text-[24px] lg:mt-6 lg:text-center">Hair Styling</p>
              <p className="font-mont text-[14px] lg:text-center lg:mb-[30px]">Gorgeous bridal hairstyling<br className="max-md:hidden"/> for your perfect look</p>
            </div>
            <Link to="/service" className="max-md:hidden bg-[#de919b] w-[180px] mb-[40px] font-playfair text-[19px] text-center h-[39px] py-1 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 hover:bg-transparent hover:border-[1px] hover:border-[#90444d] hover:border-solid hover:text-[#90444d]">Know more</Link>
          </div>
          <div className="max-md:py-5 max-md:space-x-[16px] max-md:flex max-md:items-center lg:grid lg:place-items-center lg:h-[300px] lg:px-[25px] lg:pt-[25px] group bg-[#f9ebeb] lg:bg-opacity-0 lg:transition-all lg:duration-500 lg:ease-in-out lg:hover:bg-opacity-100 lg:transform lg:hover:h-[430px] lg:hover:shadow-[8px_8px_10px_0px_rgba(0,0,0,0.1)]">
          <LazyLoadImage  src="https://res.cloudinary.com/dsy1vfp2c/image/upload/v1729330685/service_3.webp" alt="service 3" className="max-md:ml-8 rounded-full h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] object-cover object-top"/>
            <div className="max-md:w-1/2 max-md:grow">
              <p className="font-playfair text-[20px] max-md:mb-2 lg:text-[24px] lg:mt-6 lg:text-center">Workshops</p>
              <p className="font-mont text-[14px] lg:text-center lg:mb-[30px]">Exclusive hands-on<br className="max-md:hidden"/> bridal makeup workshops</p>
            </div>
            <Link to="/service" className="max-md:hidden bg-[#de919b] w-[180px] mb-[40px] font-playfair text-[19px] text-center h-[39px] py-1 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 hover:bg-transparent hover:border-[1px] hover:border-[#90444d] hover:border-solid hover:text-[#90444d]">Know more</Link>
          </div>
        </div>
        <Link to="/service" className="place-self-center other-button-hover bg-[#de919b] w-[135px] font-bold font-playfair text-[16px] text-center h-[35px] py-1 lg:hidden">Know more</Link>
      </section>
    </section>
  );
}; 

export default Home;

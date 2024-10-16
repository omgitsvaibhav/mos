import { Link } from "react-router-dom";
import TestimonialSlider from "../components/Slider";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Home = () => {
  return (
    <section className="animate-fadeIn">
      <section className="relative h-[830px] w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        controls={false}
        playsInline
      >
        <source src="https://res.cloudinary.com/dsy1vfp2c/video/upload/v1729270412/vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="font-playfair font-black text-white text-[96px]">
            Makeovers by Sukanya
          </h1>
          <p className="font-mont font-[400] text-white text-[26px]">
            Taking bookings all over the world
          </p>
        </div>
        <Link
          to='/contact'
          className="button-hover font-playfair font-bold text-[24px] text-[#543737] w-[172px] h-[48px] text-center bg-[#faeae4] mt-16 py-1"
        >
          Contact Us
        </Link>
      </div>
    </section>
      <section className="h-[450px] w-full mb-12">
        <h1 className="font-playfair text-[48px] font-bold mb-[57px] mt-[40px] text-center">
          Awards
        </h1>
        <div className="flex justify-evenly flex-row items-center">
        <div className="grid gap-5">
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
        <div className="h-[280px] border-l border-black"></div>
          <div className="grid gap-4">
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
          <div className="h-[280px] border-l border-black"></div>
          <div className="grid gap-4">
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
      <section className="flex flex-col justify-center items-center w-full px-[140px]">
        <h1 className="font-playfair text-[#343232] text-[48px] font-bold mb-[20px] mt-[60px] text-center">Our Bridal Lookbook</h1>
        <p className="font-mont text-[14px] text-center">Dive into our exquisite bridal lookbook</p>
        <p className="font-mont text-[14px] text-center">to explore stunning transformations we have achieved on our beautiful brides having</p>
        <p className="font-mont text-[14px] text-center mb-[53px]">tailored to various bridal traditions and styles</p>
        <div className="flex flex-row w-full justify-center items-center mb-[40px]">
          <figure className="relative group">
            <LazyLoadImage  src="/home/lookbook1.JPG" alt="lookbook 1" className="w-[273px] h-[273px] object-cover object-center mx-[24px]"/>
            <figcaption className="absolute w-[273px] py-2 text-center bottom-0 left-6 h-8 font-mont text-[12px] bg-[#f9ebeb] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">The delicate floral bride - a subtle beauty</figcaption>
          </figure>
          <figure className="relative group">
            <LazyLoadImage  src="/home/lookbook2.jpg" alt="lookbook 2" className="w-[273px] h-[273px] object-cover object-right mx-[24px]"/>
            <figcaption className="absolute w-[273px] py-2 text-center bottom-0 left-6 h-8 font-mont text-[12px] bg-[#f9ebeb] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">The regal bride - an absolute royalty</figcaption>
          </figure>
          <figure className="relative group">
            <LazyLoadImage  src="/home/lookbook3.JPG" alt="lookbook 3" className="w-[273px] h-[273px] object-cover mx-[24px]"/>
            <figcaption className="absolute w-[273px] py-2 text-center bottom-0 left-6 h-8 font-mont text-[12px] bg-[#f9ebeb] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">The perfect sultry bride - a timeless allure</figcaption>
          </figure>
          <figure className="relative group">
            <LazyLoadImage  src="/home/lookbook4.JPG" alt="lookbook 4" className="w-[273px] h-[273px] object-cover object-center mx-[24px]"/>
            <figcaption className="absolute w-[273px] py-2 text-center bottom-0 left-6 h-8 font-mont text-[12px] bg-[#f9ebeb] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">The fresh dewy bride - a classic charm</figcaption>
          </figure>
        </div>
        <Link to='/lookbook' className="font-playfair font-bold text-[20px] other-button-hover text-center h-[49px] w-[232px] bg-[#de919b] py-2 mb-[60px]">View Full Lookbook</Link>
      </section>
      <section className="bg-[#f9ebeb] flex flex-col justify-center items-center w-full px-[144px]">
      <h1 className="font-playfair font-bold text-[40px] text-[#343232] text-center mt-[55px] mb-[44px]">About Us</h1>
      <div className="flex flex-row mb-[55px]">
        <div className="relative w-[497px] pr-[39px] font-mont text-[14px]">
          <p className="text-justify">Welcome to Makeovers by Sukanya, where every bride is transformed into a masterpiece of elegance admiration, uniquely crafted for her special day. With over a decade of experience, Sukanya has become one of India’s leading bridal makeup artists, having brought her artistry to more than 3,000 brides worldwide.</p>
          <br/>
          <p className="text-justify">Sukanya’s love affair with makeup began in her childhood, fueled by a deep passion for art and a fascination with colours.</p>
          <div className="grid grid-cols-3 place-items-baseline mt-[35px]">
            <div className="grid place-items-center">
              <h3 className="font-playfair font-bold text-[40px] text-center">3000+</h3>
              <span className="font-mont text-[14px] text-center">BRIDES</span>
            </div>
            <div className="grid place-items-center pl-5">
              <h3 className="font-playfair font-bold text-[40px] text-center">10+</h3>
              <span className="font-mont text-[14px] text-center">YEARS</span>
            </div>
            <div className="grid place-items-center">
              <h3 className="font-playfair font-bold text-[40px] text-center">65k+</h3>
              <span className="font-mont text-[14px] text-center">INSTAGRAM<br/>FOLLOWERS</span>
            </div>
          </div>
          <Link to='/about' className="font-playfair font-bold text-[20px] other-button-hover text-center h-[49px] w-[157px] bg-[#de919b] py-2 absolute bottom-0 left-0">Read More</Link>
        </div>
        <div alt="Sukanya image" className="w-[625px] h-[400px] bg-home bg-cover bg-[center_top_-8rem]"/>
      </div>
      </section> 
      <section className="w-full px-[255px] h-[650px]">
        <h1 className="font-playfair text-[40px] font-bold text-[#343232] text-center mt-[55px] mb-[55px]">Services</h1>
        <div className="flex flex-row justify-around space-x-[90px] mb-[111px] h-[480px]">
          <div className="grid place-items-center h-[300px] px-[25px] pt-[25px] group bg-[#f9ebeb] bg-opacity-0 transition-all duration-500 ease-in-out hover:bg-opacity-100 transform hover:h-[430px] hover:shadow-[8px_8px_10px_0px_rgba(0,0,0,0.1)]">
            <LazyLoadImage  alt="service 1" src="/home/service 1.JPG" className="rounded-full h-[200px] w-[200px] object-cover"/>
            <p className="font-playfair text-[24px] mt-6">Makeup</p>
            <p className="font-mont text-[14px] text-center mb-[30px]">Flawless bridal makeup<br/>for destination weddings</p>
            <Link to="/service" className="bg-[#de919b] w-[180px] mb-[40px] font-playfair text-[19px] text-center h-[39px] py-1 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 hover:bg-transparent hover:border-[1px] hover:border-[#90444d] hover:border-solid hover:text-[#90444d]">Know more</Link>
          </div>
          <div className="grid place-items-center h-[300px] px-[25px] pt-[25px] group bg-[#f9ebeb] bg-opacity-0 transition-all duration-500 ease-in-out hover:bg-opacity-100 transform hover:h-[430px] hover:shadow-[8px_8px_10px_0px_rgba(0,0,0,0.1)]">
            <LazyLoadImage  src="/home/service 2.JPG" alt="service 2" className="rounded-full h-[200px] w-[200px] object-cover"/>
            <p className="font-playfair text-[24px] mt-6">Hair Styling</p>
            <p className="font-mont text-[14px] text-center mb-[30px]">Gorgeous bridal hairstyling<br/>for your perfect look</p>
            <Link to="/service" className="bg-[#de919b] w-[180px] mb-[40px] font-playfair text-[19px] text-center h-[39px] py-1 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 hover:bg-transparent hover:border-[1px] hover:border-[#90444d] hover:border-solid hover:text-[#90444d]">Know more</Link>
          </div>
          <div className="grid place-items-center h-[300px] px-[25px] pt-[25px] group bg-[#f9ebeb] bg-opacity-0 transition-all duration-500 ease-in-out hover:bg-opacity-100 transform hover:h-[430px] hover:shadow-[8px_8px_10px_0px_rgba(0,0,0,0.1)]">
          <LazyLoadImage  src="/home/service 3.JPG" alt="service 3" className="rounded-full h-[200px] w-[200px] object-cover object-top"/>
            <p className="font-playfair text-[24px] mt-6">Workshops</p>
            <p className="font-mont text-[14px] text-center mb-[30px]">Exclusive hands-on<br/>bridal makeup workshops</p>
            <Link to="/service" className="bg-[#de919b] w-[180px] mb-[40px] font-playfair text-[19px] text-center h-[39px] py-1 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 hover:bg-transparent hover:border-[1px] hover:border-[#90444d] hover:border-solid hover:text-[#90444d]">Know more</Link>
          </div>
        </div>
      </section>
    </section>
  );
}; 

export default Home;

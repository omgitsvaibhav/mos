import { Link } from "react-router-dom";
import TestimonialSlider from "../components/Slider";

const Home = () => {
  return (
    <>
      <section className="flex justify-center items-center relative h-[830px] bg-home bg-cover w-full bg-[center_top_-10rem]">
        <div className="absolute flex flex-col justify-center items-center w-full top-[175px]">
          <h1 className="font-playfair font-black text-white text-[96px]">
            Makeovers by Sukanya
          </h1>
          <p className="font-mont font-[400] text-white text-[26px]">
            Taking bookings all over the world
          </p>
        </div>
        <Link
          to="#"
          className="button-hover absolute font-playfair font-bold text-[24px] text-[#543737] w-[172px] h-[40px] text-center bg-[#faeae4] top-[610px]"
        >
          Contact Us
        </Link>
      </section>
      <section className="h-[450px] w-full mb-12">
        <h1 className="font-playfair text-[48px] font-bold mb-[57px] mt-[40px] text-center">
          Awards
        </h1>
        <div className="flex justify-center items-center space-x-14">
          <div>
            <img
              src="/home/wedmegood.png"
              alt="wed me good"
              className="h-[165px] w-[235px] m-[43px]"
            />
            <figcaption className="text-center font-mont font-bold text-[14px]">
              WedMeGood
            </figcaption>
            <p className="font-mont text-[14px] text-center">Best Bridal Makeup Artist in Goa - 2023</p>
          </div>
          <div className="h-[280px] border-l border-black"></div>
          <div className="relative">
            <img
              src="/home/award.png"
              alt="award"
              className="h-[250px] w-[320px] "
            />
            <figcaption className="text-center font-mont font-bold text-[14px]">
              WEDDINGSUTRA
            </figcaption>
            <p className="font-mont text-[14px] text-center">Best Cocktail Makeup Artist in India - 2019</p>
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
          <img src="/home/lookbook1.JPG" alt="lookbook 1" className="w-[273px] h-[273px] object-cover object-center mx-[24px]"/>
          <img src="/home/lookbook2.jpg" alt="lookbook 2" className="w-[273px] h-[273px] object-cover object-right mx-[24px]"/>
          <img src="/home/lookbook3.JPG" alt="lookbook 3" className="w-[400px] h-[273px] object-cover mx-[24px]"/>
          <img src="/home/lookbook4.JPG" alt="lookbook 4" className="w-[273px] h-[273px] object-cover object-center mx-[24px]"/>
        </div>
        <Link className="font-playfair font-bold text-[20px] other-button-hover text-center h-[49px] w-[232px] bg-[#de919b] py-2 mb-[60px]">View Full Lookbook</Link>
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
          <Link className="font-playfair font-bold text-[20px] other-button-hover text-center h-[49px] w-[157px] bg-[#de919b] py-2 absolute bottom-0 left-0">Read More</Link>
        </div>
        <div alt="Sukanya image" className="w-[625px] h-[400px] bg-home bg-cover bg-[center_top_-8rem]"/>
      </div>
      </section> 
    </>
  );
}; 

export default Home;

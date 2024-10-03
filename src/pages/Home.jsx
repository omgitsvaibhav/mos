import { Link } from "react-router-dom";

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
        <Link to="#"
          className="button-hover absolute font-playfair font-bold text-[24px] text-[#543737] w-[172px] h-[40px] text-center bg-[#faeae4] top-[610px]"
        >
          Contact Us
        </Link>
    </section>
    <section className="h-[800px]"></section>
    <section className="h-[800px]"></section>
    </>
  );
};

export default Home;

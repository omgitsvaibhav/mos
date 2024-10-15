import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Service = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imagePaths = [];
    for (let i = 1; i <= 24; i++) {
      imagePaths.push(`/lookbook/lookbook (${i}).png`);
    }
    setImages(imagePaths);
  }, []);

  return (
    <>
      <section className="bg-lookbook h-[600px] w-full bg-cover bg-[center_top_-40rem] relative" />
      <div className="page-header-gradient" />
      <section className="grid px-[76px] bg-white mb-[95px]">
        <h1 className="font-playfair font-bold text-[72px] mb-[20px]">
          Lookbook
        </h1>
        <p className="font-mont text-[16px] w-3/4 text-justify">
          Welcome to our Lookbook, where your vision of beauty comes to life!
          Here, you’ll discover an array of breathtaking makeup looks crafted by
          us, each designed to help you shine on your special day.
          We understand how important it is to feel perfect, and our creations
          are tailored to reflect your unique style, preferences, and
          traditions. As you explore these stunning transformations, imagine the
          possibilities for your own look. 
        </p>
        <p className="font-mont text-[16px] mb-[60px] w-3/4 text-justify">
          Let us be part of your journey to
          perfection—your dream look awaits!
        </p>
        <div className="lookbook-grid">
          {images.map((src, index) => (
            <div key={index} className="lookbook-item">
              <img src={src} alt={`Lookbook ${index + 1}`} />
            </div>
          ))}
        </div>
        <Link
          to="/contact"
          className="font-playfair font-bold text-[20px] h-[50px] w-[180px] other-button-hover py-2 bg-[#de919b] text-center p-8 justify-self-center"
        >
          Contact Us
        </Link>
      </section>
    </>
  );
};

export default Service;

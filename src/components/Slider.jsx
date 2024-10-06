import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';
import { Link } from 'react-router-dom';

const slides = [
  {
    name: "Aashna Malhotra",
    content: "Booked Sukanya to do my wedding and cocktail makeup. She was an absolute delight to be around, and did a great job. She was considerate about the ready time and was very punctual. Sukanya is great at what she does and I was quite happy with all the looks. Her team managed everything efficiently. The hair artist was also great and everyone was very helpful. She's just the kind of person one needs around during all the pre wedding stress. I would definitely recommend her."
  },
  {
    name: "Sid Malhotra",
    content: "Booked Sukanya to do my wedding and cocktail makeup. She was an absolute delight to be around, and did a great job. She was considerate about the ready time and was very punctual. Sukanya is great at what she does and I was quite happy with all the looks. Her team managed everything efficiently. The hair artist was also great and everyone was very helpful. She's just the kind of person one needs around during all the pre wedding stress. I would definitely recommend her."
  },
  {
    name: "Yes Malhotra",
    content: "Booked Sukanya to do my wedding and cocktail makeup. She was an absolute delight to be around, and did a great job. She was considerate about the ready time and was very punctual. Sukanya is great at what she does and I was quite happy with all the looks. Her team managed everything efficiently. The hair artist was also great and everyone was very helpful. She's just the kind of person one needs around during all the pre wedding stress. I would definitely recommend her."
  },
  {
    name: "No Malhotra",
    content: "Booked Sukanya to do my wedding and cocktail makeup. She was an absolute delight to be around, and did a great job. She was considerate about the ready time and was very punctual. Sukanya is great at what she does and I was quite happy with all the looks. Her team managed everything efficiently. The hair artist was also great and everyone was very helpful. She's just the kind of person one needs around during all the pre wedding stress. I would definitely recommend her."
  },
];

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrev = () => {
        if (currentIndex === 0) setCurrentIndex(slides.length - 1);
        else setCurrentIndex(currentIndex - 1);
      };
    
      const handleNext = () => {
        if (currentIndex === slides.length - 1) setCurrentIndex(0);
        else setCurrentIndex(currentIndex + 1);
      };
  
      const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
      });
  
    return (
      <div className="bg-[#F9EBEB] py-[50px] px-[294px]">
        <h1 className="font-playfair text-[48px] font-bold text-center text-[#343232]">Testimonials</h1>
        <p className="font-mont text-center text-[16px] mb-12">
          See what our clients have to say on <Link className="text-[#E65757] underline" to="https://www.wedmegood.com/profile/MAC-Makeup-Artist-13664#:~:text=A%20fabulous%20attitude%20and%20A,reflects%20in%20all%20her%20work" target='blank'>WedMeGood</Link>
        </p>
        
        <div className="w-full mx-auto relative overflow-hidden" {...swipeHandlers}>
          <button onClick={handlePrev} className="absolute -left-3 top-1/2 transform -translate-y-1/2 z-10">
            <ChevronLeft size={40} className="text-[#343232]" />
          </button>
          
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full px-10">
                <div  key={index} className="bg-white rounded-lg shadow-lg w-[852px] p-8">
                  <p className="font-mont text-[14px] font-bold mb-4">{slide.name} says,</p>
                  <p className="font-mont text-[14px]">{slide.content}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button onClick={handleNext} className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
            <ChevronRight size={40} className="text-[#343232]" />
          </button>
        </div>
        
        <div className="flex justify-center mt-10 space-x-2 mb-6">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-[1.5px] w-5 ${
                index === currentIndex ? 'bg-[#343232]' : 'bg-[#D8AAAA]'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

export default TestimonialSlider;
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';
import { Link } from 'react-router-dom';

const slides = [
  {
    name: "Aashna Malhotra",
    content: "Booked Sukanya to do my wedding and cocktail makeup. She was an absolute delight to be around, and did a great job. She was considerate about the ready time and was very punctual. Sukanya is great at what she does and I was quite happy with all the looks. Her team managed everything efficiently. The hair artist was also great and everyone was very helpful. She's just the kind of person one needs around during all the pre wedding stress. I would definitely recommend her. "
  },
  {
    name: "Shraddha Jadhav",
    content: "I absolutely loved Sukanya’s work for both my sangeet and wedding; I couldn't have been more impressed. Sukanya and her team made me feel incredibly comfortable and they were so genuine with everything. Sukanya was able to highlight and enhance my features and yet make me feel natural. I loved both the looks and not once did I feel insecure in any sort of way. In fact, she made me feel so confident on my special days. Thank you for your amazing work, and making me feel like the best version of myself and truly special! :)."
  },
  {
    name: "Naini Gandhi",
    content: "Sukanya and team are literally amazing! Sukanya is so lovely and warm that I instantly felt comfortable telling her exactly how I wanted the looks but she would give me so many ideas too and was so happy to go minimal and make my bridal looks about me. Even though it was minimal Sukanya used all the make up techniques to highlight my key features and cover my insecurities. I felt beautiful every time I left the room and got so many compliments for my hair and make up."
  },
  {
    name: "Alisha Mascarenhas",
    content: "Sukanya and her Team did absolute magical work on my wedding day. From travelling so far early morning to be at my location at 5 am and being there on time, I was quite impressed by the professionalism. She made me look so flawless. It was amazing to feel so beautiful (and to receive so many compliments). Thank you so much Sukanya and the team for adding to the beauty of my wedding and making me look picture perfect!!"
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
                <div  key={index} className="bg-white rounded-2xl w-[852px] p-8">
                  <p className="font-mont text-[14px] font-bold mb-4">{slide.name} says,</p>
                  <p className="font-mont text-[14px] text-justify">{slide.content}</p>
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
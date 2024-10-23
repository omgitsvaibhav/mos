import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
    return (
        <section className="animate-fadeIn">
        <section className="bg-about page-header"/>
        <div className="absolute top-[210px] h-[100px] lg:top-[400px] lg:h-[200px] inset-0 bg-gradient-to-b from-transparent max-md:to-white lg:to-[#f9ebeb]"/>
        <section className="px-[24px] lg:px-[80px] max-md:bg-white lg:bg-[#f9ebeb] pb-[64px] lg:pb-[160px]">
            <h1 className="font-playfair font-bold text-[32px] lg:text-[72px] mb-[41px]">About Us</h1>
            <div className="max-md:flex max-md:flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-[82px]">
                <div className="relative max-md:grid">
                    <p className="font-mont text-[14px] lg:text-[16px] text-justify max-md:mb-[55px]">
                    Welcome to Makeovers by Sukanya, where every bride is transformed into a masterpiece of elegance admiration, uniquely crafted for her special day. With over a decade of experience, Sukanya has become one of India’s leading bridal makeup artists, having brought her artistry to more than 3,500 brides worldwide.
                    <br/><br/>Sukanya’s love affair with makeup began in her childhood, fueled by a deep passion for art and a fascination with colors. What started as playful experimentation soon blossomed into a profound talent, leading to the birth of Makeovers by Sukanya. Her dedication and skills have earned her prestigious accolades, including recognition from industry giants like WeddingSutra and WedMeGood, solidifying her place as a top-tier bridal makeup artist.
                    <br/><br/>In addition to her bridal expertise, Sukanya has been the face of major campaigns for renowned beauty brands such as HUDA Beauty, MAC cosmetics, Bobby Brown, Charlotte Tilbury and Forever 52 cosmetics.
                    <br/><br/>What sets Sukanya apart is her unwavering commitment to evolving her craft. She has dedicated years to refining her makeup training methodologies, ensuring that every bride receives a bespoke makeover tailored to her unique style and preferences. Her attention to detail, particularly in imaginative eye makeup, has earned her a reputation as a maestro in the industry.
                    <br/><br/>At Makeovers by Sukanya, we don’t just apply makeup; we create art that resonates with your personality, enhancing your natural beauty to make your wedding day truly unforgettable.
                    </p>
                    <Link to='/contact' className="max-md:place-self-center other-button-hover py-1 lg:py-2 bg-[#de919b] text-center lg:absolute lg:bottom-0 lg:left-0 w-[105px] h-[35px] lg:w-[150px] lg:h-[50px] font-playfair font-bold text-[16px] lg:text-[20px]">Contact Us</Link>
                </div>
                <LazyLoadImage src="https://res.cloudinary.com/dsy1vfp2c/image/upload/v1729331674/header_ns8mgt.jpg" alt="sukanya" className="object-cover max-md:object-[center_-55px] max-md:mb-[18px] h-[210px] max-md:w-full lg:w-[740px] lg:h-[720px]"/>
            </div>
        </section>
        </section>
    )
}

export default About;
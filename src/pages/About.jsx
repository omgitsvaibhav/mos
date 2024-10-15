import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className="animate-fadeIn">
        <section className="bg-about page-header"/>
        <div className="absolute top-[400px] h-[200px] inset-0 bg-gradient-to-b from-transparent to-[#f9ebeb]"/>
        <section className="px-[80px] bg-[#f9ebeb] pb-[160px]">
            <h1 className="font-playfair font-bold text-[72px] mb-[41px]">About Us</h1>
            <div className="grid grid-cols-2 gap-[82px]">
                <div className="relative">
                    <p className="font-mont text-[14px] text-justify">
                    Welcome to Makeovers by Sukanya, where every bride is transformed into a masterpiece of elegance admiration, uniquely crafted for her special day. With over a decade of experience, Sukanya has become one of India’s leading bridal makeup artists, having brought her artistry to more than 3,500 brides worldwide.
                    <br/><br/>Sukanya’s love affair with makeup began in her childhood, fueled by a deep passion for art and a fascination with colors. What started as playful experimentation soon blossomed into a profound talent, leading to the birth of Makeovers by Sukanya. Her dedication and skills have earned her prestigious accolades, including recognition from industry giants like WeddingSutra and WedMeGood, solidifying her place as a top-tier bridal makeup artist.
                    <br/><br/>In addition to her bridal expertise, Sukanya has been the face of major campaigns for renowned beauty brands such as HUDA Beauty, MAC cosmetics, Bobby Brown, Charlotte Tilbury and Forever 52 cosmetics.
                    <br/><br/>What sets Sukanya apart is her unwavering commitment to evolving her craft. She has dedicated years to refining her makeup training methodologies, ensuring that every bride receives a bespoke makeover tailored to her unique style and preferences. Her attention to detail, particularly in imaginative eye makeup, has earned her a reputation as a maestro in the industry.
                    <br/><br/>At Makeovers by Sukanya, we don’t just apply makeup; we create art that resonates with your personality, enhancing your natural beauty to make your wedding day truly unforgettable.
                    </p>
                    <Link to='/contact' className="other-button-hover py-2 bg-[#de919b] text-center absolute bottom-0 left-0 w-[150px] h-[50px] font-playfair font-bold text-[20px]">Contact Us</Link>
                </div>
                <img src="/home/header.jpg" alt="sukanya" className="object-cover w-[740px] h-[675px]"/>
            </div>
        </section>
        </section>
    )
}

export default About;
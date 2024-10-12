import { Link } from "react-router-dom";

const Service = () => {
    return (
        <>
        <section class="bg-service page-header"/>
        <div class="page-header-gradient"/>
        <section className="px-[76px] bg-white pb-[90px]">
            <h1 className="font-playfair font-bold text-[72px] mb-[27px]">Our Services</h1>
            <p className="font-mont text-[16px]">We offer freelance and on-location makeup services, meaning you can book me almost anywhere!</p>
            <p className="font-mont text-[16px]">My expertise spans fashion, luxury weddings, workshops, and private lessons.</p>
            <p className="font-mont text-[16px] mb-[55px]">Discover more about what we offer below.</p>
            <div className="grid gap-[67px]">
                <div className="flex flex-row justify-between bg-[#f9ebeb] relative parent h-[400px]">
                    <div className="flex flex-col relative p-10 w-[850px]">
                       <h2 className="font-playfair text-[48px] mb-4">Make Up</h2>
                       <p className="text-justify font-mont text-[14px] mb-10">
                        We love weddings! It's a true honor and joy to be part of someone’s most special day. With over 10 years of experience in luxury destination weddings, I bring a wealth of expertise to each event. We use only top-quality, luxury products, such as MAC, Estee Lauder, Bobbi Brown, Laura Mercier and so on, ensuring your look remains flawless all day long. 
                        <br/><br/>Get in touch with us, to know more about bridal makeup, bridal consultations, pricing or any other questions you might have. Don't forget to browse our lookbook to see how stunning our previous brides looked.
                       </p>
                       <Link to='#' className="font-playfair font-bold text-[20px] h-[50px] w-[150px] other-button-hover py-2 bg-[#de919b] text-center">Contact Us</Link> 
                    </div>
                    <img className="child w-[480px] object-cover" src="/service/service 1.jpg" alt="service 1"/>
                </div>
                <div className="flex flex-row justify-between bg-[#f9ebeb] relative parent h-[400px] max-h-[500px]">
                    <div className="flex flex-col relative p-10 w-[850px]">
                       <h2 className="font-playfair text-[48px] mb-4">Hair Style</h2>
                       <p className="text-justify font-mont text-[14px] mb-10">
                       We love weddings! It's a true honor and joy to be part of someone’s most special day. With over 10 years of experience in luxury destination weddings, I bring a wealth of expertise to each event. We use only top-quality, luxury products, such as MAC, Estee Lauder, Bobbi Brown, and Laura Mercier, ensuring your look remains flawless all day. 
                       <br/><br/>Get in touch with us, to know more about bridal makeup, trial sessions, pricing or any other questions you might have.
                       </p>
                       <Link to="#" className="font-playfair font-bold text-[20px] h-[50px] w-[150px] other-button-hover py-2 bg-[#de919b] text-center">Contact Us</Link> 
                    </div>
                    <img className="child w-[480px] object-cover object-top" src="/service/service 2.JPG" alt="service 2"/>
                </div> 
                <div className="flex flex-row justify-between bg-[#f9ebeb] relative parent h-[400px]">
                    <div className="flex flex-col relative p-10 w-[850px]">
                       <h2 className="font-playfair text-[48px] mb-4">Workshops</h2>
                       <p className="text-justify font-mont text-[14px] mb-10">
                       With over 10 years of experience, our team has conducted numerous workshops specializing in makeup and hairstyling. We have educated hundreds of students in bridal makeup, casual everyday makeup, various hairstyles, and hair care. 
                       <br/><br/>Sukanya is passionate about teaching and ensures each student receives personalized attention to fully benefit from her expertise. For updates on our upcoming workshops, follow us on Instagram and stay tuned.
                       </p>
                       <Link to="#" className="font-playfair font-bold text-[20px] h-[50px] w-[150px] other-button-hover py-2 bg-[#de919b] text-center">Contact Us</Link> 
                    </div>
                    <img className="child w-[480px] object-cover" src="/home/service 3.JPG" alt="service 3"/>
                </div> 
            </div>
        </section>
        </>
    )
}

export default Service;
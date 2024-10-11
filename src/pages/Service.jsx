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
                <div>
                    <div className="relative p-10">
                       <h2 className="font-playfair text-[48px] ">Make Up</h2>
                       <p className="text-justify font-mont text-[14px]">
                        We love weddings! It's a true honor and joy to be part of someone’s most special day. With over 10 years of experience in luxury destination weddings, I bring a wealth of expertise to each event. We use only top-quality, luxury products, such as MAC, Estee Lauder, Bobbi Brown, Laura Mercier and so on, ensuring your look remains flawless all day long. 
                        <br/><br/>Get in touch with us, to know more about bridal makeup, bridal consultations, pricing or any other questions you might have. Don't forget to browse our lookbook to see how stunning our previous brides looked.
                       </p>
                       <Link className="h-[50px] w-[150px] other-button-hover py-2 bg-[#de919b] text-center absolute bottom-0 left-0">Contact Us</Link> 
                    </div>
                    <div/>
                </div>
                <div></div> 
                <div></div>
            </div>
        </section>
        </>
    )
}

export default Service;
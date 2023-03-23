import React from "react";
import Footer from "../footer/footer";
import About from "./about/about";
import ContactUs from "./contactUs/contactus";
import Experience from "./experience/experience";
import Hero from "./heroSection/hero";
import Portfolio from "./portfolio/portfolio";
import Services from "./services/services";

const LandingPage = () => {
    return (
        <>
        <Hero />
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <ContactUs/>
        <Footer/>
        </>

    )
}

export default LandingPage;
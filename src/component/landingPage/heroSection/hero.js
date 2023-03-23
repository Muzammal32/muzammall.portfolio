import React from "react";
const Hero = () => {
    return (

        <section id="hero" className="d-flex flex-column justify-content-end align-items-center">
            <div id="heroCarousel" className="container">


                <div className="carousel-container">
                <div >
                    <h1>Muzammal Hayat</h1>
                    <p> I'm <span class="typed" data-typed-items="Developer,Designer,Freelancer,"></span></p>
                    {/* <h2 className="animate__animated animate__fadeInDown">I'm Muzammal Hayat</h2>
                    <h2 className="hero-subtitle"><span className="typed"
                        data-typed-items="Mobile App Dev,Web App Dev,Full Stack Dev,"></span></h2> */}
                   <center> <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a></center>
                    </div>
                </div>

            </div>

            <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 24 150 28 " preserveAspectRatio="none">
                <defs>
                    <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="wave1">
                    <use href="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" />
                </g>
                <g className="wave2">
                    <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
                </g>
                <g className="wave3">
                    <use href="#wave-path" x="50" y="9" fill="#F8F8F8" />
                </g>
            </svg>

        </section>
    )
}

export default Hero;
import React from "react";
import './services.css'

const services = [
  { name: 'Mobile App Development', icon: 'assets/img/mobile.png', description: 'Be it iOS or Android, Mobile or Tablet, Native or cross-platform development, we have got you covered' },
  { name: 'Web App Development', icon: 'assets/img/web.png', description: 'We build custom web applications using the latest cutting edge technologies, helping you stay ahead of your competition' },
  { name: 'UI/UX Design', icon: 'assets/img/uiux.png', description: 'We create mood boards and prototypes (wireframes) to define user journey and test product validation' },
]

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">

        <div className="section-title" data-aos="zoom-out">
          <h2>Services</h2>
          <p>What I offer</p>
        </div>

        <div className="row g-5">
          {services.map((service) =>
            <div className="col-md-6 col-lg-4 wow bounceInUp" data-aos="zoom-in" data-aos-delay="100">
              <a href="https://www.upwork.com/freelancers/~01e886efab081c9589" target = "_blank"> 
              <div className="box">
                <div className="icon">
                  <img src={service.icon}/>
                  {/* <i className="bi bi-briefcase" style={{ color: '#ff689b' }}></i> */}
                  </div>
                <h4 className="title mt-3">{service.name}</h4>
                <p className="description">{service.description}</p>
              </div>
              </a>
            </div>
          )}
      
        </div>

      </div>
    </section>
  )
}


export default Services;
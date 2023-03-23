import React, { useRef, useState, CSSProperties } from "react"
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from "react-spinners/ClipLoader";



const ContactUs = () => {


  const form = useRef();
  let [loading, setLoading] = useState(true);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ap6lqql', 'template_eagjn1n', form.current, 'AmlpkkkNc3i-opomE')
      .then((result) => {
        toast.success("successfully submitted response !");

        document.getElementById("contact-form").reset();
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="contact" className="contact">

      <ToastContainer />
      <div className="container">
        <div className="section-title" data-aos="zoom-out">
          <h2>Contact</h2>
          <p>Contact Me</p>
        </div>

        <div className="row mt-5">

          <div className="col-lg-4" data-aos="fade-right">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Model Town Link Road Lahore, Pakistan</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>muzammalhayat32@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+92 308 6821577</p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">


            <form id="contact-form" ref={form} onSubmit={sendEmail} className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="from_name" className="form-control" id="from_name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" name="user_email" className="form-control" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" type="text" name="message" id="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

        </div>
        {/* <div className="loader" >
        <ClipLoader loading={loading} size={50} />
      </div> */}
      </div>
     
    </section>
  )
}

export default ContactUs
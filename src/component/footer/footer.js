import React from "react"
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        {/* <h2>Muzammal Hayat</h2>

        <div class="footer-menu">
          <p>+92 308 6821577</p>
          <p>muzammalhayat32@gmail.com</p>
        </div> */}
        <h3>Muzammal Hayat</h3>
          <p>Its all start with goods</p>
        <div className="social-links">
          {/* <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a> */}
          <a href="https://api.whatsapp.com/send?phone= + +923086821577 + &text=%20" className="whatsapp"><i className="bx bxl-whatsapp"></i></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=muzammalhayat32@gmail.com&body=" className="google-plus"><i className="bx bxl-google"></i></a>
          <a href="http://www.linkedin.com/in/muzammal-hayat-4313b6188" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
        <div className="copyright">
            Copyright  &copy; <strong><span>Muzammal Hayat</span></strong>. This site is owned and 
          </div>
          <div className="credits">
              operated by <a href="#">Muzammal Hayat</a>
          </div>
      </div>
    </footer>
  )
}

export default Footer
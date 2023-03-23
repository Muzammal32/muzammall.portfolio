import React, {useState, useEffect} from 'react'
const Header = () => {

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY > 80){
      setNavbar(true)
    }
    else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

    return (
     
        <header id={navbar?'header2':'header'} className="fixed-top d-flex align-items-center  header-transparent ">
          <div className="container d-flex align-items-center justify-content-between">
      
            <div className="logo">
              <h1><a href="index.html"></a></h1>
            
               {/* <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a> */}
            </div>
      
            <nav id="navbar" className="navbar">
              <ul>
                <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                <li><a className="nav-link scrollto" href="#about">About</a></li>
                <li><a className="nav-link scrollto" href="#resume">Experience</a></li>
                <li><a className="nav-link scrollto" href="#services">Services</a></li>
                <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
      
          </div>
        </header>
      
    )
}

export default Header;
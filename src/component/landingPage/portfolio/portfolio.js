import React from "react";
const Portfolio = () => {

  const values = [
    { css: 'filter-app', img: 'assets/img/portfolio/teachingCircle.jpg',name: 'Teaching Circle', type: 'App',href:'https://play.google.com/store/apps/details?id=com.onebyte.teachingcircle' },
    { css: 'filter-app', img: 'assets/img/portfolio/campConnect.png',name: 'Camp Connect', type: 'App',href:'https://play.google.com/store/apps/details?id=com.campconnect.au' },
    { css: 'filter-app', img: 'assets/img/portfolio/marvel.jpg',name: 'Marvel Paints', type: 'App',href:'' },
    { css: 'filter-app', img: 'assets/img/portfolio/sensight.jpg',name: 'Sensights Health Care', type: 'App',href:'https://apps.apple.com/pk/app/sensights/id1522446657' },
    { css: 'filter-app', img: 'assets/img/portfolio/digitalWallet.jpg',name: 'Digital wallet', type: 'App',href:'' },
    { css: 'filter-app', img: 'assets/img/portfolio/adco.png',name: 'ADCO', type: 'App',href:'https://play.google.com/store/apps/details?id=com.adco' },
    

  ]


  return (
    <section id="portfolio" className="portfolio">
  <div className="container">

    <div className="section-title" data-aos="zoom-out">
      <h2>Portfolio</h2>
      <p>What I've done</p>
    </div>

    <ul id="portfolio-flters" className="d-flex justify-content-end" data-aos="fade-up">
      <li data-filter="*" className="filter-active">All</li>
      <li data-filter=".filter-app">App</li>
      {/* <li data-filter=".filter-card">Card</li> */}
      {/* <li data-filter=".filter-web">Web</li> */}
    </ul>

    <div className="row portfolio-container" data-aos="fade-up">

      {values.map(item =>(
        <div className={`col-lg-4 col-md-6 portfolio-item ${item.css}`}>
        <div className="portfolio-img"><img src={item.img} className="img-fluid"  /></div>
        <div className="portfolio-info">
          <h4>{item.name}</h4>
          <p>{item.type}</p>
          <a href={item.img} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title={item.name}><i className="bx bx-plus"></i></a>
         {item.href && <a href={item.href} target='_blank' className="details-link" title="More Details"><i className="bx bx-link"></i></a>}
        </div>
      </div>
      ))

      }

      {/* <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" /></div>
        <div className="portfolio-info">
          <h4>App 1</h4>
          <p>App</p>
          <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-web">
        <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" /></div>
        <div className="portfolio-info">
          <h4>Web 3</h4>
          <p>Web</p>
          <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-3.png" className="img-fluid" alt="" /></div>
        <div className="portfolio-info">
          <h4>App 2</h4>
          <p>App</p>
          <a href="assets/img/portfolio/portfolio-3.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-card">
        <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" /></div>
        <div className="portfolio-info">
          <h4>Card 2</h4>
          <p>Card</p>
          <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-web">
        <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" /></div>
        <div className="portfolio-info">
          <h4>Web 2</h4>
          <p>Web</p>
          <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" /></div>
        <div className="portfolio-info">
          <h4>App 3</h4>
          <p>App</p>
          <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-card">
        <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-7.png" className="img-fluid" alt="" /></div>
        <div className="portfolio-info">
          <h4>Card 1</h4>
          <p>Card</p>
          <a href="assets/img/portfolio/portfolio-7.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus"></i></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-card">
        <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" /></div>
        <div className="portfolio-info">
          <h4>Card 3</h4>
          <p>Card</p>
          <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus"></i></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-web">
        <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" /></div>
        <div className="portfolio-info">
          <h4>Web 3</h4>
          <p>Web</p>
          <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
        </div>
      </div> */}

    </div>

  </div>
</section>
       
    )
}

export default Portfolio; 
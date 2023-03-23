import React from 'react'


const About = () => {
    return (
        <section id="about" className="features">
            <div className="container">

                <div className="tab-content" data-aos="fade-up">
                    <div className="tab-pane active show" id="tab-1">
                        <div className="row">
                            <div className="col-lg-6 order-2 order-lg-1 mt-5 mt-lg-0 d-flex justify-content-center aligns-items-center" style={{flexDirection: "column" ,alignItems:'center' }}>
                                <div className="section-title" data-aos="zoom-out">
                                    <h2>About</h2>
                                    <p>Who I'm</p>
                                </div>

                                {/* <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3> */}
                                <div>
                                <p className="fst-italic">
                                    Hi, I’m Muzammal Hayat, a full-stack developer having more than three years of experience in Web and Mobile App development. I'm an active, diligent, and optimistic young man with a strong desire to learn. I'm a detail-oriented, highly organized individual that is committed to delivering a high-quality product. I'll bring all of my experience to bear on making your app better and quicker.
                                </p>
                                </div>
                                {/* <ul>
                                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.
                                    </li>
                                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                        aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla
                                        pariatur.</li>
                                </ul>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                    sunt in
                                    culpa qui officia deserunt mollit anim id est laborum
                                </p> */}
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 text-center">
                                <img src="assets/img/features-1.jpg"  className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    {/* <div className="tab-pane" id="tab-2">
                        <div className="row">
                            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                <h3>Neque exercitationem debitis soluta quos debitis quo mollitia officia est</h3>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                    sunt in
                                    culpa qui officia deserunt mollit anim id est laborum
                                </p>
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore
                                    magna aliqua.
                                </p>
                                <ul>
                                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.
                                    </li>
                                    <li><i className="ri-check-double-line"></i> Provident mollitia neque rerum asperiores dolores quos qui a.
                                        Ipsum neque dolor voluptate nisi sed.</li>
                                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                        aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla
                                        pariatur.</li>
                                </ul>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 text-center">
                                <img src="assets/img/features-2.png" alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="tab-3">
                        <div className="row">
                            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                <h3>Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor ut assumenda</h3>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                    sunt in
                                    culpa qui officia deserunt mollit anim id est laborum
                                </p>
                                <ul>
                                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.
                                    </li>
                                    <li><i className="ri-check-double-line"></i> Provident mollitia neque rerum asperiores dolores quos qui a.
                                        Ipsum neque dolor voluptate nisi sed.</li>
                                </ul>
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore
                                    magna aliqua.
                                </p>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 text-center">
                                <img src="assets/img/features-3.png" alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="tab-4">
                        <div className="row">
                            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                <h3>Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum</h3>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                    sunt in
                                    culpa qui officia deserunt mollit anim id est laborum
                                </p>
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore
                                    magna aliqua.
                                </p>
                                <ul>
                                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.
                                    </li>
                                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                        aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla
                                        pariatur.</li>
                                </ul>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 text-center">
                                <img src="assets/img/features-4.png" alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>
        </section>
    )
}


export default About
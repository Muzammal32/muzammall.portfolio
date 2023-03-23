import React from "react";

const Experience = () => {
    return (
        <section id="resume" >
            <div class="experience" >
                <div class="container">
                    <header class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                        <div className="section-title" data-aos="zoom-out">
                            <h2>My Resume</h2>
                            <p>Working Experience</p>
                        </div>
                    </header>
                    <div class="timeline">
                        <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                            <div class="timeline-text">
                                <div class="timeline-date">2019 - 2020</div>
                                <h2>Apps Developer</h2>
                                <h4>Dapper Pty Ltd, Australia</h4>
                                <p>
                                    Collaborated in multiple projects as team member.
                                </p>
                                <br/>
                                <ul>
                                    <li> Gather customer requirements and document it before start development.</li>
                                    <li> Coordinate with team members to create client apps in a coordinated and timely manner. </li>
                                    <li> Utilize advanced features and Build perfect, smooth and flexible UIs across both mobile platforms. </li>
                                    <li> Integrate the agile methodology to meet the client requirements and use Jira technology. </li>
                                    <li> Integrate Fabric for Continuous Integration. </li>
                                </ul>
                            </div>
                        </div>
                        <div class="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                            <div class="timeline-text">
                                <div class="timeline-date">2020 - Present</div>
                                <h2>Senior Software Engineer</h2>
                                <h4>Markitech Agency, Canada</h4>
                                <p>Worked as a team lead and train the juniors on code quality and code optimization. Managed complex tasks and equally participate in bug fixes to make high performance applications.</p>
                                {/* <p>
                                    Collaborated in Sensights Health Care Product as team member. Managed complex tasks and equally participate in bug fixes to make high performance applications..
                                </p> */}
                                <br/>
                                <ul>
                                    <li> Worked on SenSights Healthcare product for bug fixing, implementing new features and optimized the app performance. </li>
                                    <li> Designing, developing, implementation and troubleshooting of application </li>
                                    <li> Ensure the testing of apps to meet the performance requirements completely </li>
                                    <li> Optimize the existing apps to ensure structure and architecture maintenance </li>
                                    <li> Respond to client needs for applications with an eye to the most viable and efficient solution </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;
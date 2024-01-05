import React from 'react';
import myImage from '../Allimages/faq.jpg';
const About = () => {
    return (
        <div >
            <div className="row m-5 align-items-center">
                <div className="col-md-5">
                    <img src={myImage} alt="" className='img-fluid' />
                </div>
                <div className="col-md-7">
                    <h3 className='fs-4 pb-2 fw-bold'>Frequently Asked Questions (FAQ) </h3>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What is Workgine?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>Workgine is a comprehensive job portal that connects employers and job seekers. It facilitates the recruitment process by providing a platform for employers to post job openings and for job seekers to discover and apply for relevant positions.</strong>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    How can employers post job openings on Workgine?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong> Employers can post job openings by logging into their Workgine account, navigating to the "Post a Job" section, and filling out the required details about the position, including job title, description, requirements, and application instructions.</strong>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Do you offer any resources for career development?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>Yes, Workgine provides resources such as career advice articles, resume tips, and interview guides to help job seekers enhance their professional development.
                                        Feel free to reach out if you have additional questions or need further assistance!</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
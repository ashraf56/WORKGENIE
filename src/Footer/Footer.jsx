import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=' container-fluid  pt-5 mt-5 border-2 border-black bg-body-secondary'>
            <div >
                <div className="row p-5 justify-content-center  align-item-center">
                    <div className="col-md-5">
                        <h1><span className='text-info'>Work</span>Genie</h1>
                        <p className="text-secondary  ">
                            Connect with Your Future:  WorkGenie is your gateway to exciting career opportunities. Explore a diverse range of job listings, connect with top employers, and take the next step in your professional journey. Our mission is to empower you with the tools and resources you need for a successful career. Start your job search today and pave the way for a brighter tomorrow. Your dream job awaits.
                        </p>
                    </div>

                    <div className="col-md-4 ">

                        <h5 className="text-info pt-4">Get Notified</h5>

                        <p className="text-secondary  ">
                            we're dedicated to transforming aspirations into achievements.  Your success story begins here. Join us in shaping the future of work and discover the perfect career fit. Your next big opportunity is just a click away!
                        </p>

                        <div className="gx-1 d-flex ">
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." className='form-control w-50 ' />
                            <input type="submit" value="Submit" className='btn btn-info ml-1' />
                        </div>



                    </div>
                    <div className='col-md-2 text-center '>
                        <h5 className='pt-4 text-info'>Company</h5>
                        <ul className="navbar-nav m-auto   ">
                            <li className='nav-link' >
                                <Link to='/main' className="text-secondary " >Home</Link>
                            </li>
                            <li className='nav-link'>
                                <Link to='/statistics' className="text-secondary " >Statistics</Link>
                            </li>
                            <li className='nav-link' >
                                <Link to='/jobs' className="text-secondary "  >Applied Jobs</Link>
                            </li>
                            <li className=' nav-link'>
                                <Link to='/blog' className="text-secondary " >Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="row  text-center" >

                <div className="col-md-12">
                    <p className="">Copyright ©2023 All rights reserved </p>

                </div>
            </div>
        </div>
    );
};

export default Footer;
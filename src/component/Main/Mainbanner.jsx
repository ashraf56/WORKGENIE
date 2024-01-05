import React from 'react';
import banners from '../Allimages/banner3.png'
const Mainbanner = () => {

    return (
        <div className='bg-body-tertiary' >

            <div className="row align-items-center h-100 mx-5 "  >
                <div className="col-md-12 text-center mx-auto">
                    <h3 className='display-3 fw-bold pt-5 '>One Step Closer To Your <br />
                        <span className='text-info '> Dream Job</span></h3>

                    <p>Explore thousands of job opportunities with all the information you need. Its your future. <br /> Come find it. Manage all your job application from start to finish.</p>

                    <img src={banners} alt="g" className='img-fluid w-50' />

                </div>
            </div>
        </div>
    );
};
export default Mainbanner;
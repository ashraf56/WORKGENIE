import React from 'react';
import myImage from '../Allimages/banner.png';
const Mainbanner = () => {
    return (
        <div>
            <div className="row m-5 align-items-center">
                <div className="col-md-6">
                    <h3 className='display-4 fw-bold'>One Step Closer To Your
                        <span className='text-info-emphasis'>Dream Job</span></h3>
                    <p className='text-secondary-emphasis fw-semibold'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button type="button" className="btn btn-info fw-bold text-light">Get Started</button>
                </div>
                <div className="col-md-6">
                    <img src={myImage} alt="" className='img-fluid' />
                </div>
            </div>
        </div>
    );
};
export default Mainbanner;
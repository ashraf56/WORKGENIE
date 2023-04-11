import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const AppliedCard = ({job}) => {
    let {id,company_name,position_name,company_address,salary,job_type,image}=job;

    return (
        <div className='container'>
            <div className="card mb-2 ">
  <div className="row g-0 align-item-center">
    <div className="col-md-3 text-center mt-4  ">
      <img src={image} className="img-fluid w-75 " />
    </div>
    <div className="col-md-7">
      <div className="card-body">
        <h5 className="card-title">{position_name}</h5>
        <p className="card-text">{company_name}</p>
        <div>
        <button type="button" className="btn btn-outline-info me-2">{job_type[0]}</button>
        <button type="button" className="btn btn-outline-info">{job_type[1]}</button>
        </div>
        <div className='pt-2 pb-3'>
            <span className='text-secondary-emphasis ' > <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>  Adress: {company_address}</span> <br />
           <span className='fs-6 fw-bold '> Salary: {salary}</span> 
         </div>
      </div>
    </div>
<div className="col-md-2 ">
<div className='mt-5'>
             <Link to={`/main/${id}`} className="btn btn-primary mt-5">View Details</Link>
        </div>
</div>

  </div>
</div>
        </div>
    );
};

export default AppliedCard;
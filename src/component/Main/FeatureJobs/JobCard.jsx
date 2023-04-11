import { faLocation, faLocationDot, faMapLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({job}) => {
    let {id,company_name,position_name,company_address,salary,job_type,image}=job
    return (
        <div>
            
  <div className="col h-100">
    <div className="card h-100">
        
      <div className="card-body">
        <img src={image} alt="" className='img-fluid w-25' />
        <h5 className="card-title">{position_name}</h5>
        <p className="card-text">{company_name}</p>
        <div>
        <button type="button" className="btn btn-outline-info me-2">{job_type[0]}</button>
        <button type="button" className="btn btn-outline-info">{job_type[1]}</button>
        </div>
         <div className='pt-2 pb-3'>
            <span className='text-secondary-emphasis' > <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>   {company_address}</span> <br />
           <span className='fs-6 fw-bold '>{salary}</span> 
         </div>
        <div className='bottom-0'>
             <Link to={`/main/${id}`} className="btn btn-primary mt-auto">View Details</Link>
        </div>
       


      </div>
    </div>
  </div>
        </div> 
    );
};

export default JobCard;
import React from 'react';

const JobCard = ({job}) => {
    let {id,company_name,position_name,company_address,salary,job_type,image}=job
    return (
        <div>
            
  <div className="col">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{position_name}</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
        </div> 
    );
};

export default JobCard;
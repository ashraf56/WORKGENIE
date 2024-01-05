import React, { useState } from 'react';
import JobCard from './JobCard';
import { Link, useNavigate } from 'react-router-dom';
const FeatureJobs = ({ jobs }) => {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className='bg-body-tertiary'>
      <div className='container mt-4  '>
        <div className='text-center pt-3'>
          <h2 className='fw-bold'>Featured <span className='text-info'>Jobs</span></h2>
          <p>Explore thousands of job opportunities with all the information you need. Its your future</p> </div>
        <div className='row row-cols-1 row-cols-md-2 g-4'>
          {showAll ?
            jobs.map(job => <JobCard job={job} key={job.id} ></JobCard>)
            :
            jobs.slice(0, 4).map(job => <JobCard job={job} key={job.id} ></JobCard>)
          }
        </div>
        <div className='text-center my-5 '>
          <button className='btn btn-info my-3 text-light' onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Hide' : 'Show All Jobs'}
          </button>
        </div>
      </div>
    </div>
  );
};
export default FeatureJobs;
import React from 'react';
import JobCard from './JobCard';

const FeatureJobs = ({jobs}) => {
  console.log(jobs);
    return (
        <div className='container mt-4'>
          <div className='text-center'>
          <h2>Featured Jobs</h2>
           <p>Explore thousands of job opportunities with all the information you need. Its your future</p> 
           <div>
            {
              jobs.map(job=> <JobCard job={job} key={job.id} ></JobCard> )
            }
           </div>
          </div>
        </div>
    );
};

export default FeatureJobs;
import React from 'react';
import JobCard from './JobCard';

const FeatureJobs = ({jobs}) => {
  console.log(jobs);
    return (
        <div className='container mt-4'>
          <div className='text-center'>
          <h2>Featured Jobs</h2>
           <p>Explore thousands of job opportunities with all the information you need. Its your future</p> </div>
           <div className='row row-cols-1 row-cols-md-2 g-4'>
            {
              jobs.map(job=> <JobCard job={job} key={job.id} ></JobCard> )
            }
           </div>

           <div className='text-center my-4'>
            <button type="button" className="btn btn-primary">See All Jobs</button>
           </div>
           


          </div>
       
    );
};

export default FeatureJobs;
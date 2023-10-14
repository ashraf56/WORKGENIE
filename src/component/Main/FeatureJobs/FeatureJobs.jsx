import React, { useState } from 'react';
import JobCard from './JobCard';
import { Link, useNavigate } from 'react-router-dom';

const FeatureJobs = ({jobs}) => {
  const [showAll, setShowAll] = useState(false);
 
    return (
        <div className='container mt-4'>
          <div className='text-center'>
          <h2>Featured Jobs</h2>
           <p>Explore thousands of job opportunities with all the information you need. Its your future</p> </div>
           <div className='row row-cols-1 row-cols-md-2 g-4'>
            {showAll?
            jobs.map(job=> <JobCard job={job} key={job.id} ></JobCard> )
              :
                jobs.slice(0,4).map(job=> <JobCard job={job} key={job.id} ></JobCard> )
              
            }
           </div>

           <div className='text-center my-4'>
           <button onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Hide' : 'Show All Data'}
      </button>
           </div>
           


          </div>
       
    );
};

export default FeatureJobs;
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedCard from './AppliedCard';

const AppliedJobs = () => {
    let showjobs=useLoaderData();
     let [jobs,Setjobs]=useState(showjobs);
    console.log(jobs);

    return (
        <div>
       <div className='text-center my-5  bg-success bg-opacity-75  '  >
    <h2 className='py-5 text-light text-uppercase'>All Applied jobs </h2>
</div>
       <div>

{
    jobs.map(job=><AppliedCard job={job} key={job.id} />)
}        
       </div>

        </div>
    );
};

export default AppliedJobs;
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedCard from './AppliedCard';
import { deleteShoppingCart } from '../fakedb';

const AppliedJobs = () => {
    let showjobs=useLoaderData();
     let [jobs,Setjobs]=useState(showjobs);
     const [jobType, setJobType] = useState("all");
const deleteJobs=()=>{
  deleteShoppingCart()
}
     const handleJobTypeClick = (type) => {
       if (jobType === type) {
      setJobType("all");
    } else {
      setJobType(type);
    }
     };
   
     const filteredJobs = jobs.filter((job) => {
       if (jobType === "all") {
         return true;
       } else {
         return job.job_type.includes(jobType);
       }
     });

    return (
        <div>
       <div className='text-center my-5  bg-success bg-opacity-75  '  >
    <h2 className='py-5 text-light text-uppercase'>All Applied jobs </h2>
</div>

<div className='text-end my-3'>
    <a  className={jobType === "onsite" ? "active" : ""}>
<button type="button" onClick={() => handleJobTypeClick("onsite")} className="btn btn-success fw-bold mx-2 ">Onsite</button></a>

<a  className={jobType === "remote" ? "active" : ""}>
<button type="button" onClick={() => handleJobTypeClick("remote")} className="btn btn-success fw-bold ">Remote</button></a>
</div>
       <div>

{filteredJobs.length===0 ?  <div className='text-center text-uppercase alert alert-primary'>Please  apply for any jobs First</div>  :
    filteredJobs.map(job=><AppliedCard job={job} key={job.id} deleteJobs={deleteJobs} />)
}        
       </div>

        </div>
    );
};

export default AppliedJobs;
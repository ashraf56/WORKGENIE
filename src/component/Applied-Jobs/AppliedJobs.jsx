import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    let showjobs=useLoaderData();
     let [jobs,Setjobs]=useState(showjobs);

    console.log(jobs);
    return (
        <div>
            this is applide jobs
       {jobs.length}
        </div>
    );
};

export default AppliedJobs;
import { faBox, faContactBook, faLocationDot, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../fakedb';
import toast, { Toaster } from 'react-hot-toast';
const JobDetail = () => {
    let { id } = useParams();
    let data = useLoaderData();
    let [jobs, setJobs] = useState([]);
    useEffect(() => {
        let fin = data.find(dt => dt.id == id)
        setJobs(fin)
    }, [])
    let { experiences, educational_requirements, job_responsibility, job_description, job_type, salary, email, phone, company_address, position_name } = jobs;
    let addData = (jobs) => {
        addToDb(jobs.key_id)
    }
    return (
        <div className='container'>
            <div className='text-center my-5  bg-info bg-opacity-75  '  >
                <h2 className='py-5 text-light text-uppercase'>Work Details</h2>
            </div>
            <div className='row my-5'>
                <div className="col-md-7 px-2 pt-3">
                    <div className='pb-3'>
                        <span className='fs-6 fw-bold'>Job-description: </span> <span>{job_description}</span>
                    </div>
                    <div className='pb-3'>
                        <span className='fs-6 fw-bold'>Job-Responsibility: </span> <span>{job_responsibility}</span>
                    </div>
                    <div className='pb-3'>
                        <span className='fs-6 fw-bold'>Educational-requirements: </span> <span>{educational_requirements}</span>
                    </div>
                    <div >
                        <span className='fs-6 fw-bold'>Experiences: </span> <span>{experiences}</span>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card h-100 bg-info-subtle">
                        <div className="card-body " >
                            <h5>Job Detail</h5>
                            <hr />
                            <div>
                                <span className='fw-semibold pb-2'> <FontAwesomeIcon icon={faBox} /> Job Title : {position_name}</span> <br />
                                <span className='fs-6  '> <strong>$ Salary</strong>: {salary}</span>
                            </div>
                            <div className='pt-2 pb-3'>
                                <h4>Contact Information</h4> <hr />
                                <span className='text-secondary-emphasis' > <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon><strong> Adress:</strong>:  {company_address}</span> <br />
                                <span>   <FontAwesomeIcon icon={faMailBulk} /> <strong>Email :</strong>:  {email}</span><br />
                                <span> <FontAwesomeIcon icon={faContactBook} /> <strong>Phone :</strong>:  {phone}</span>
                            </div>
                        </div>
                        <button type="button" onClick={() => addData(jobs)} className="btn btn-info fw-bold ">Apply now</button>
                        <Toaster />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default JobDetail;
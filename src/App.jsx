import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom';
import JobCard from './component/Main/FeatureJobs/JobCard';

function App() {
  let alljobs=useLoaderData();

  return (
    <div className="App">
     
     <div className='row row-cols-1 row-cols-md-2 g-4'>
            {
             alljobs.map(job=> <JobCard job={job} key={job.id} ></JobCard> )
            }
           </div>
    </div>
  )
}

export default App

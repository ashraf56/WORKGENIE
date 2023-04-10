import React from 'react';
import Mainbanner from './Mainbanner';
import MainCategory from './MainCategory/MainCategory';
import FeatureJobs from './FeatureJobs/FeatureJobs';
import { useLoaderData } from 'react-router-dom';

const Main = () => {
    let jobs=useLoaderData();
   
    return (
        <div>
            <Mainbanner/>
            <MainCategory/>
            <FeatureJobs jobs={jobs} key={jobs.id}/>
        </div>
    );
};

export default Main;
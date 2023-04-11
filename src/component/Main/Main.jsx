import React, { useState } from 'react';
import Mainbanner from './Mainbanner';
import MainCategory from './MainCategory/MainCategory';
import FeatureJobs from './FeatureJobs/FeatureJobs';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Main = () => {
    let jobs=useLoaderData();
  
    const [cards, setcard] = useState(jobs.slice(2,6));

 

    return (
        <div>
            <Mainbanner/>
            <MainCategory/>
            <FeatureJobs jobs={cards} key={cards.id} />
        </div>
    );
};

export default Main;
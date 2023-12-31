import React, { useState } from 'react';
import Mainbanner from './Mainbanner';
import MainCategory from './MainCategory/MainCategory';
import FeatureJobs from './FeatureJobs/FeatureJobs';
import { useLoaderData, useNavigate } from 'react-router-dom';
import About from '../About/About';
const Main = () => {
    let jobs = useLoaderData();
    const [cards, setcard] = useState(jobs);
    return (
        <div>
            <Mainbanner />
            <MainCategory />
            <FeatureJobs jobs={cards} key={cards.id} />
            <About></About>
        </div>
    );
};
export default Main;
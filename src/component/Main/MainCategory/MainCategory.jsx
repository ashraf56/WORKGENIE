import React, { useEffect, useState } from 'react';
import CatagoryCard from './CatagoryCard';
import './MainCategory.css'
const MainCategory = () => {
    let [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('Categorydata.json').then(res => res.json())
            .then(data => setCategory(data.categories))
    }, [])
    return (
        <div className='container text-center my-5'>
            <h2>Job Category List</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className=' row row-cols-1 row-cols-md-4 g-4 pt-3'>
                {category.map(list => <CatagoryCard list={list} key={list.id}></CatagoryCard>)
                }
            </div>
        </div>
    );
};
export default MainCategory;
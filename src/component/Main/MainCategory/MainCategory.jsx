import React, { useEffect, useState } from 'react';
import CatagoryCard from './CatagoryCard';

const MainCategory = () => {
    let [category,setCategory]=useState([]);
useEffect(()=>{
fetch('Categorydata.json').then(res=> res.json())
.then(data => setCategory(data.categories))


},[])


    return (
        <div className='container text-center'>
          <h2>Job Category List</h2>
          <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
          <div className='d-flex justify-content-center'>
             { category.map(list =>  <CatagoryCard list={list} key={list.id}></CatagoryCard>  )
             }
          </div>
        
        </div>
    );
};

export default MainCategory;
import React from 'react';

const CatagoryCard = ({list}) => {
    let {id,image,openings,category}=list;
    return (
        <div>
            <div className="card mx-3 h-100">
  <div className="card-body">
    <img src={image} alt="" className='w-25' />
    <h5 className="card-title">{category}</h5>
    <p className=" fw-semi-bold">{openings} job left</p>
    
  </div>
</div>
        </div>
    );
};

export default CatagoryCard;
import React from 'react';

const CatagoryCard = ({list}) => {
    let {id,image,openings,category}=list;
    return (
        <div>
        <div className="col">
        <div className="card mx-3 p-3 h-100 bg-info-subtle align-items-center text-start">
  <div className="card-body">
    <img src={image} alt="" className='w-25 pb-3 border-4' />
    <h5 className="fw-bold pt-2">{category}</h5>
    <p className=" fw-semibold">{openings} job left</p>
    
  </div>
</div>
  </div>
        </div>
    );
};

export default CatagoryCard;
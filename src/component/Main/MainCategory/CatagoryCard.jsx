import React from 'react';

const CatagoryCard = ({list}) => {
    let {id,image,openings,category}=list;
    return (
        <div>
        <div class="col">
        <div className="card mx-3 h-100 bg-info-subtle align-items-center">
  <div className="card-body">
    <img src={image} alt="" className='w-25' />
    <h5 className="fw-bold">{category}</h5>
    <p className=" fw-semibold">{openings} job left</p>
    
  </div>
</div>
  </div>
        </div>
    );
};

export default CatagoryCard;
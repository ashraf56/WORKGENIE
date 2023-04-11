import React from 'react';

const Blog = () => {
    return (
        <div>
          <div className='text-center my-5  bg-success bg-opacity-75  '  >
    <h2 className='py-5 text-light text-uppercase'>Blog FAQ </h2>
</div>
            
           <div className="accordion " id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <p>When we should use context Api?</p>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
       
      <div className="accordion-body">
      <p>
      Context api is a feature of React. It can help us avoid props drilling. It's made the code simple . We should use This when we need to access the component at different levels in the component tree.
      </p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <p>What is useRef?</p>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>useRef is a React hook that let us create a reference to a value that persists between renders.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <p>What is useMemo?</p>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      useMemo() is a built-in React hook .It is used for performance optimization..It is returns a memoized value.useMemo can improve performance by avoiding unnecessary re-rendering of components that depend on expensive calculations.

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
      <p>What is custom hook?</p>
      </button>
    </h2>
    <div id="collapseThree3" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        A customhook is a js function and it starts with 'use' .it can call other hooks.
      A custom hook allows us to extract some component logic into a reusable function that can be shared among different components.
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body">
  <div className="container">  
  <Link className="navbar-brand" href="#">WorkGenie</Link>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/statistics' className="nav-link" href="#">Statistics</Link>
        </li>
        <li className="nav-item">
          <Link to='/jobs' className="nav-link" href="#">Applied Jobs</Link>
        </li>
        <li className="nav-item">
          <Link to='/blog' className="nav-link ">Blog</Link>
        </li>
      </ul>
      
        <button className="btn btn-outline-success" type="submit">Search</button>
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;
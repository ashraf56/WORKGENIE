import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='container'>
      <nav className="navbar  navbar-expand-lg bg-body ">
        <div className="container">
          <Link className="navbar-brand fw-bold" href="#"><span className='fw-Bold text-info'>WORK</span>GENIE</Link>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/main' className="nav-link active" aria-current="page" href="#">Home</Link>
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
            <Link to='/blogs' className="nav-link ">
              <button className="btn btn-outline-info" type="submit">Start Applying</button></Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
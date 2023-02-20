import React from 'react';
import logo from '../assets/images/logo.png';
import '../App.css';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-green">
      <div className="container-fluid">
        <a className="navbar-brand ml-8" href="/">
          <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top" />
          <span className='ms-3 text-warning fs-3'> I & A Clinic </span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mx-2 mb-lg-0">
            <li className="nav-item h5 pe-4 ">
              <a className="nav-link text-white fs-4 " aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item h5 pe-4">
              <a className="nav-link text-white fs-4 " href="#">Doctors</a>
            </li>
            <li className="nav-item h5 pe-4">
              <a className="nav-link text-white fs-4 " href="#">Contact Us</a>
            </li>
            <li className="nav-item h5 pe-4">
              <a className="nav-link text-white fs-4 " href="#">About Us</a>
            </li>

            <li className="nav-item h5 ms-5  bg-white rounded">
              <a className="nav-link blink" href="#">Make an Appointment</a>
            </li>
            <li className="nav-item h5 ms-5 ">
              <a className="nav-link text-white bg-primary  btn btn-primary rounded-pill py-1 px-7" href="#">
                <i className="bi bi-fingerprint me-2"></i>
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Nav;

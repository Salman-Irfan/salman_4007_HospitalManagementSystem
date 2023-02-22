import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

import '../css/nav.css'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-green">
      <div className="container-fluid">
        <Link className="navbar-brand ml-8" to="/">
          <img src={logo} alt="" width="30" height="24" className='d-inline-block align-text-top' />
          <span className='ms-3 text-warning fs-3'> I & A Clinic </span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mx-2 mb-lg-0">
            <li className="nav-item h5 pe-4 ">
              <Link className="nav-link text-white fs-4 " aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item h5 pe-4">
              <Link className="nav-link text-white fs-4 " to="/doctors">Doctors</Link>
            </li>
            <li className="nav-item h5 pe-4">
              <Link className="nav-link text-white fs-4 " to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item h5 pe-4">
              <Link className="nav-link text-white fs-4 " to="/about">About Us</Link>
            </li>

            <li className="nav-item h5 ms-5  bg-white rounded">
              <Link className="nav-link blink" to="/appointment">Make an Appointment</Link>
            </li>
            <li className="nav-item h5 ms-5 ">
              <Link className="nav-link text-white bg-primary  btn btn-primary rounded-pill py-1 px-7" to="/login">
                <i className="bi bi-fingerprint me-2"></i>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Nav;

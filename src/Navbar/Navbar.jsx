/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import LiveDemo from '../Login/LiveDemo';
import { Link, NavLink } from 'react-router-dom';
import breath from './breath.png';
import style from './Navbar.css';
import LiveDemoSign from '../signup/LiveDemoSign';
import { useContext } from 'react';
import { AuthContext } from './../auth/AuthContext';
import Layout from '../Layout/Layout';





export default function Navbar() {
  let { logOut , userData , toggleOpenLogin  , toggleOpenSignin } = useContext(AuthContext);

  // for close Navebar
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  // end close navbar



  // fuction to handle nav and login

  const handleBothClickslog = () => {
    toggleNav();
    toggleOpenLogin();
  };


  // fuction to handle nav and Register
  const handleBothClicksregister = () => {
    toggleNav();
    toggleOpenSignin();
  };


  return (

    <>
      <LiveDemoSign />

      <div className="container">
        <LiveDemo />
      </div>

      <div>
        <nav className="navbar navbar-expand-lg bg-body py-0 position-absolute w-100 top-0  ">
          <div className="container">
            <img src={breath} alt=" My logo" className="logo" />
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNav}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>

{userData? <ul className="navbar-nav me-auto mb-2 mb-lg-0">

<li className="nav-item">
  <NavLink
    className={({ isActive, isPending }) =>
      isActive ? " nav-link text-info" : "nav-link"
    }
    to=""
    onClick={toggleNav}
  >
    Home
  </NavLink>
</li>

{userData? <>
  <li className="nav-item dropdown">
  <Link
    className="nav-link dropdown-toggle"
    to="#"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Pages
  </Link>
  <ul className="dropdown-menu">
    <li>
      <Link className="dropdown-item" to="listpatient" onClick={toggleNav}>
        List of patients
      </Link>
    </li>
    <li>
    <Link className="dropdown-item" to='/newpatient' onClick={toggleNav} >
      New patient
    </Link>
    </li>
  </ul>
</li>
</>: ''}

<li className="nav-item">
  <NavLink
    className={({ isActive, isPending }) =>
      isActive ? " nav-link text-info" : "nav-link"
    }
    to="about"
    onClick={toggleNav}
  >
    About Us
  </NavLink>
</li>

<li className="nav-item">
  <NavLink
    className={({ isActive, isPending }) =>
      isActive ? " nav-link text-info" : "nav-link"
    }
    to="help"
    onClick={toggleNav}
  >
    Help
  </NavLink>
</li>

<li className="nav-item">
  <NavLink
    className={({ isActive, isPending }) =>
      isActive ? " nav-link text-info" : "nav-link"
    }
    to="contact"
    onClick={toggleNav}
  >
    Contact US
  </NavLink>
</li>



</ul>:''}
            


              {/* 3333333333333333333333333333333333333 */}
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item d-flex align-items-center justify-content-center">
                
                </li>

                {
                  userData ?
                    <>

                      <li className="nav-item">
                        <NavLink
                          className={({ isActive, isPending }) =>
                            isActive ? " nav-link text-info" : "nav-link"
                          }
                          to="profile"
                          onClick={toggleNav}
                        >
                          Profile
                        </NavLink>
                      </li>

                      {/* <li className="px-3 cursor-pointer "> <span>Log Out</span></li> */}

                      {/* form for add new patient */}

                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          to="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="add_icon fa-solid fa-circle-plus fs-2 "></i>
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to='/newpatient' onClick={toggleNav} >
                              New patient
                            </Link>


                          </li>
                          {/* endddddddddddddddddddd */}
                          <li>
                            <Link className="dropdown-item" to="listpatient" onClick={toggleNav} >
                              Already Existed patient
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <Link onClick={logOut} className='mt-2 text-muted'>
                      <li className="px-3 cursor-pointer" > <span>Log Out</span></li>
                      </Link>
                    </> :
                    <>    <li className="nav-item">
                      <NavLink
                        onClick={handleBothClickslog}

                        className={({ isActive, isPending }) =>
                          isActive ? " nav-link text-info" : "nav-link"
                        }

                      >
                        Log In
                      </NavLink>
                    </li>

                      <li className="nav-item">
                        <NavLink
                          onClick={handleBothClicksregister}
                          className={({ isActive, isPending }) =>
                            isActive ? " nav-link text-info" : "nav-link"
                          }
                        >
                          Sign Up
                        </NavLink>
                      </li></>
                }
                {/* end form */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>


  );
}

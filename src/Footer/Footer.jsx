/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import style from  './Footer.module.css';
import robot from '../images/robot.png';


export default function Footer() {
  return (
    <>
    <footer>

    <div className={`${style.foot1} py-4`}>
      <h1><span className={`${style.sign}`}>Sign Up</span> The First</h1>



<div className="container">
  <div className="row">
    <div className="col-md-4 mx-auto">
      <div className="input-group my-4">
        <input type="email" className="form-control" placeholder="E-mail" />
        <div className="input-group-append">
          <button className={`${style.btn_color} p-2 rounded-2 px-3`} type="button">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>

<div>
      
      <img src={robot}></img>
      </div>

    </div>

    <div className={`${style.foot2} pt-4`}>
      <div className="container">
        <div className="row">


          <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
            <div className="d-flex justify-content-center align-items-center h-100 "> 
          
            <h4 className='text-white'><span className={`${style.breathe} text-white`}>B</span>reathe</h4>
          
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-4 mb-3 ">
            <div className="">
              <h3>CATEGORIES</h3>
              <p className='text-white'>Home</p>
              <p className='text-white'>Pages</p>
              
              </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-4 mb-3">
            <div className="">
              <h3>NAVIGATE</h3>
              <p className='text-white'>Help</p>
              <p className='text-white'>About</p>
              </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-4 mb-3 ">
            <div className=""> 
            <h3>FOLLOW US</h3>
            <i className="fa-brands fa-facebook me-3 text-info"></i>
            <i className="fa-brands fa-google mb-5 text-info"></i>
            <p className={`${style.copy} text-white`}>Copyright All Resaved@Breathe.2022-2023</p>
            
            </div>

          </div>




        </div>
      </div>
    </div>











    </footer>



    </>
  )
}

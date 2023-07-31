/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import  style from './Check.module.css';
import checkk from '../images/check.png';


export default function Check() {
  return (
    <>
    <div className="container">
      <div className={`${style.check_img}`}>
      <img src={checkk} className=" w-100 "/>
        </div>
    
      <h3 className={`${style.check} mt-5 text-center `}>Check patient`s symptoms</h3>

      <div className="row mt-5">
        <div className='col-lg-6 mb-4'>
          <div className={`${style.check_content} shadow-sm`}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptas inventore ducimus commodi</p>
            <di className='d-flex justify-content-center mt-5'>
            <button className={`${style.check_btny} me-4 px-5 fw-bold fs-5`}>Yes</button>
            <button className={`${style.check_btn} btn px-5  fw-bold fs-5 `}>No</button>
            </di>
          

          </div>

        </div>

        <div className="col-lg-6 mb-4 ">
          <div className={`${style.check_content} shadow-sm`}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptas inventore ducimus commodi</p>
            <di className='d-flex justify-content-center mt-5'>
            <button className={`${style.check_btny} me-4  px-5 fw-bold fs-5`}>Yes</button>
            <button className={`${style.check_btn} btn px-5  fw-bold fs-5 `}>No</button>
            </di>
          

          </div>

        </div>

        <div className="col-lg-6 mb-4 ">
          <div className={`${style.check_content} shadow-sm`}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptas inventore ducimus commodi</p>
            <di className='d-flex justify-content-center mt-5'>
            <button className={`${style.check_btny} me-4  px-5 fw-bold fs-5`}>Yes</button>
            <button className={`${style.check_btn} btn px-5  fw-bold fs-5 `}>No</button>
            </di>
          

          </div>

        </div>

        <div className="col-lg-6 mb-4 ">
          <div className={`${style.check_content} shadow-sm`}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptas inventore ducimus commodi</p>
            <di className='d-flex justify-content-center mt-5'>
            <button className={`${style.check_btny} me-4  px-5 fw-bold fs-5`}>Yes</button>
            <button className={`${style.check_btn} btn px-5  fw-bold fs-5 `}>No</button>
            </di>
          

          </div>

        </div>

        <div className="col-lg-6 mb-4 ">
          <div className={`${style.check_content} shadow-sm`}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptas inventore ducimus commodi</p>
            <di className='d-flex justify-content-center mt-5'>
            <button className={`${style.check_btny} me-4  px-5 fw-bold fs-5`}>Yes</button>
            <button className={`${style.check_btn} btn px-5  fw-bold fs-5 `}>No</button>
            </di>
          

          </div>

        </div>
      

        


    

    

      </div>


        {/* <!-- Button trigger modal --> */}
<div className='text-center'>
  <button type="button" className={`${style.check_sub} my-5 px-5 py-2 fw-bold fs-5fw-bold fs-5`} data-bs-toggle="modal" data-bs-target="#exampleModal">
    Submit
  </button>
  {/* /* Modal */ }
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
        
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          ...
        </div>
      
      </div>
    </div>
  </div>
</div>









      


    </div>
    </>
  )
}

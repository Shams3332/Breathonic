import React from 'react';
import style from './Contact.module.css';


export default function Contact() {
  return (
    <>

  <section className={`${style.contact}`}>
  <div>
  <br /><br />
  <div className="bg-light" id="services">
    <div className="container bg-light py-4">
      <div className="extra py-2 mt-4 p-3 p-4 d-flex flex-column text-center">
        <strong><h2 className="font-weight-bold fs-1 fw-bolder lh-lg">Contact US</h2></strong>
        <hr width="4%" size={3} color="black" noshade className="   mb-5 m-auto" />
        <p>Mauris at tempus mi, ut iaculis dui. Integer laoreet mattis justo nec pretium. Ut nibh elit,<br /> fermentum vel hendrerit vel, dictum nec velit. Morbi volutpat suscipit</p>
      </div>
    </div>
  </div>
  <section id="contact" className="bg-light pt-5">
  </section></div>

<div className="container ">
  <div className="row">
    
    <div className="col-lg-6 pb-5">
      <input type="text" className="form-control py-3 my-3 rounded-5 w-100" id="exampleFormControlInput1" placeholder="name" />
      <input type="email" className="form-control py-3 my-3 rounded-5 w-100" id="exampleFormControlInput1 " placeholder="Email" />
      <textarea className="form-control py-5 my-3 rounded-5 w-100" id="exampleFormControlTextarea1" rows={3} placeholder="massage" defaultValue={""} />
      <button type="button" className="btn btn-info my-4 rounded-5 fs-4 text-white"> <i className="fa-regular fa-paper-plane my-2 mx-2 text-light fs-4" /> send massage</button>
    </div>

    <div className="col-lg-6 pb-5">
      <h2>Get answers and advices from<br /> professional consultants.</h2>
      <div className=" mt-2 pt-5 bg-light">
        <div className="d-flex   ">
          <i className="fa-regular fa-map mx-3 text-info fs-1" /> 
          <h5 className="ahmed">Address</h5>
        </div>
        <p>1650 Lombard Street, San Francisco, CA 94123</p>
      </div>
      <hr color="white w-50" />
      <div className=" mt-2 pt-3 bg-light">
        <div className="d-flex   ">
          <i className="fa-solid fa-square-phone-flip mx-3 text-info fs-1" />  <h5 className="ahmed">RPhone</h5>
        </div>
        <p>+1 (415) 876-3250 / +1 (415) 876-3251</p>
      </div>
      <hr color="white w-50" />
      <div className=" mt-2 pt-3 bg-light">
        <div className="d-flex   ">
          <i className="fa-regular fa-envelope mx-3 text-info fs-1" />
          <h5 className="ahmed pb-5">Say Hello</h5>
        </div>
    
      </div>
    </div>
  </div></div>

  </section>
    </>
  )
}

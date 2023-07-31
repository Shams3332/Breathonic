/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import style from "./Home.module.css";
import logo from "../images/logo.png";
import homeeee from "../images/homeeee.png";
import home2 from "../images/home2.png";
import home3 from "../images/home3.png";
import home4 from "../images/home4.png";

export default function Home() {
  return (
    <>
      <section className="container">
        <div
          className={`${style.background_image} d-flex  align-items-center flex-column justify-content-center`}
        >
          <div className={`${style.home_contect}`}>
            <h1 className="text-wrap">
              {" "}
              Taking a good treatment for <br />
              respiratory diseases
            </h1>
            <img src={logo} className="w-50" />
          </div>
        </div>
        <div className={`${style.home2_contect}`}>
          <div className>
            <div className={`${style.small_img_content}`}>
              <img src={homeeee} className="w-100" />
            </div>
            <div className={`${style.content_img}`}>
              <div className={`${style.text} text-center `}>
                <h2 className="text-wrap">Short story about breathe</h2>
                <h4 className="text-wrap">
                  {" "}
                  Respiratory sounds are important indicators of respiratory 
                  health and respiratory disorders. The sound emitted when a
                  person breathes is directly 
                  related to air movement
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* firssssst */}
          <div className="col-md-6 col-lg-6 col-7 mb-4">
            <div className="col-text">
              <h2 className={`${`${style.how}`}`}>How To Use the Breathe ?!</h2>
              <p className={`${style.p_text} mt-2 mb-2 text-wrap `}>
              To use this website just upload record file from your device then
              click submit and you will see the predicted disease in the screen.
              </p>
              {/* <button className={`${style.home_btn} w-50 `}> Upload</button> */}
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-5 mb-4">
            <div className={`${style.img_col}`}>
              <img src={home2} className="w-100" />
            </div>
          </div>
          {/* second */}
          <div className="col-md-6 col-lg-6 col-7 mb-4">
            <div className={`${style.img_col}`}>
              <img src={home3} className="w-100" />
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-5 mb-4">
            <div className={`${style.col_text}`}>
              <h6 className="text-info ">Check disease’s details</h6>
              <h2 className={`${style.how}`}>
                Make it easy for to gain their{" "}
                <span className="text-info">trust</span> in you
              </h2>
              <p className={`${style.p_text} mt-2 mb-2 text-wrap `}>
              We have 7 diseases in additional to healthy class which
              mean that is no disease predicted , diseases names are urti , 
              asthma , lrti , pneumonia , copd , bronchiolitis.
              </p>
            
            </div>
          </div>

          {/* third */}
          <div className="col-md-6 col-lg-6 col-5 mb-4">
            <div className={`${style.col_text}`}>
              <h4 className="text-info mb-2">list of patiant</h4>
              <h2 className={`${style.how}`}>
                Get to know your patient and<br></br>
                <span className="text-info">monitor</span> their health
              </h2>
              <p className={`${style.p_text} mt-2 mb-2 text-wrap `}>
              In this tab you will see the list of patients which belong to 
              the logged user (doctor) and when you click 
              on any patient you will see his profile and 
              using his profile you can handle your data and treatment method .
              </p>
            
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-7 mb-4">
            <div className={`${style.img_col}`}>
              <img src={home4} className="w-100" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

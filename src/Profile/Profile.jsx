/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import style from "./profile.module.css";
import doctor from "../images/Doctor.png";
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {


  const [profileDoctor, setProfileDoctor] = useState([]);

  useEffect(() => {
    getProfileDoctor();
  }, []);

  async function getProfileDoctor() {
    try {
      const response = await axios.get(
        "http://ec2-13-41-193-30.eu-west-2.compute.amazonaws.com/logged_user/profiledata",
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('userToken')
          }
        }
      );
  
      if (response.data && response.data.profiledata) {
        const profileData = response.data.profiledata;
        setProfileDoctor({
          doctorname: profileData.doctorname,
          specialization: profileData.specialization,
          years_of_experience: profileData.years_of_experience,
          phone_number: profileData.phone_number,
          number_of_patients: profileData.number_of_patients,
          doctor_image: profileData.doctor_image
        });
        console.log(profileData);
      }
    } catch (error) {
      console.error(error);
    }
  }
  

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-12">
            <div className={`${style.profile} p-4`}>
              <div className="btn-button d-flex justify-content-end">
                <Link to={`/edit`}>
                <button className="btn d-block">edit</button>
                </Link>
                
              </div>
              <div className={`${style.profile_img} m-auto `}>
                <img src={doctor} alt />
              </div>
              <h5
                className={`${style.name} text-center text-wrap  m-auto mt-3 mb-2 fw-`}
              >
              {profileDoctor.doctorname}
                  
              </h5>

            

              <div className="contain">
                <div className="row">

                <div className="">
                    <div
                      className={`${style.pro_text}`}
                    >
                      <h5 className={`${style.patients} mb-2 mt-5`}> specialization&nbsp;:&nbsp; <span className="text-info">{profileDoctor.specialization}</span></h5>
                    
                    </div>
                  </div>
                  
                  <div className="">
                    <div
                      className={`${style.pro_text}`}
                    >
                      <h5 className={`${style.patients} mb-5 mt-5`}>number of patients &nbsp;: &nbsp;<span className="text-info">{profileDoctor.number_of_patients}</span></h5>
                    
                    </div>
                  </div>
                  <div className="">
                    <div
                      className={`${style.pro_text} `}
                    >
                      <h5 className={`${style.patients} mb-5 `}>years_of_experience&nbsp; :&nbsp;<span className="text-info">{profileDoctor.years_of_experience}</span> </h5>
                  
                    </div>
                  </div>
                  <div  className={`${style.pro_text} `}>
                    <h5 className={`${style.patients} mb-3`}>phone_number&nbsp;:&nbsp; <span className="text-info">{profileDoctor.phone_number}</span></h5>
                  </div>
                  <div className={`${style.none} col-12  mt-5`}>
                    <div className={`${style.info}`}>
                    
                      <div className={`${style.about} mb-5 mt-3 `}>
                      <h4 className="mt-3"> Note</h4>
                <p>
                You can check the record to determine if it's coming out 
                correctly or not from <Link to={`/chekhere`}>
                  <span>here</span>
                  </Link> </p>
                      </div>
                    </div>
                  </div>
                
              
                  <div
                    className={`${style.logout} col-md-6 col-lg-6 col-12  mt-5`}
                  >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${style.none_mobile} col-md-6 col-lg-6 col-12 `}>
            <div className={`${style.info}`}>
            
              <div className={`${style.about} mb-5 w-50`}>
              <h4 className="mt-5">Note</h4>
                <p>
                You can check the record to determine if it's coming out 
                correctly or not from <Link to={`/chekhere`}>
                  <span className="text-info">here</span>
                  </Link> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

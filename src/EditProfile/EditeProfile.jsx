// import React from 'react'
// import style from './EditProfile.module.css';
// import { Link} from "react-router-dom";
// import axios from "axios";
// import {useState} from "react";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react"

// export default function EditeProfile() {


//   // show Data in form

//   const [profileDoctor, setProfileDoctor] = useState([]);

//   useEffect(() => {
//     getProfileDoctor();
//   }, []);

//   async function getProfileDoctor() {
//     try {
//       const response = await axios.get(
//         "http://ec2-13-41-193-30.eu-west-2.compute.amazonaws.com/logged_user/profiledata",
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: 'Bearer ' + localStorage.getItem('userToken')
//           }
//         }
//       );
  
//       if (response.data && response.data.profiledata) {
//         const profileData = response.data.profiledata;
//         setProfileDoctor({
//           doctorname: profileData.doctorname,
//           specialization: profileData.specialization,
//           years_of_experience: profileData.years_of_experience,
//           phone_number: profileData.phone_number,
//           number_of_patients: profileData.number_of_patients,
//           doctor_image: profileData.doctor_image
//         });
//         console.log(profileData);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }

// // ///////////////////////////////////

//   const navigate = useNavigate(null)
//   const [phoneNumberValid, setPhoneNumberValid] = useState(true);
//   const [errorMsg, setErrorMsg] = useState("")

//   const [newDoctor, setNewDoctor] = useState({
//     doctorname: "",
//     specialization: "",
//     years_of_experience: 0,
//     phone_number: "",
//   });

//   function getDoctorData(e) {
//     let myNewDoctor = { ...newDoctor };
//     if (e.target.name === "years_of_experience") {
//       myNewDoctor[e.target.name] = parseInt(e.target.value);
//     } else {
//       myNewDoctor[e.target.name] = e.target.value;
//     }
//     setNewDoctor(myNewDoctor);
//     if (e.target.name === 'phone_number') {
//       const regex = /^(?:\+20|0)?1[0-9]{9}$/; // Regex pattern for 11-digit mobile numbers
//       const isValid = regex.test(e.target.value);
//       setPhoneNumberValid(isValid);
//     }
//   }

//   async function sendNewDoctorDataToApi() {
//     try {
//       const formData = new FormData();
//       formData.append("details", JSON.stringify({ ...newDoctor }));

//       let response = await axios.put(
//         "http://ec2-13-41-193-30.eu-west-2.compute.amazonaws.com/user/profiledata/",
    
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: "Bearer " + localStorage.getItem("userToken"),
//           },
//         }
//       );
//       console.log(response);
//       console.log(response.data);


//       if (response.data.message === "ProfileData updated successfully") {
//         // profile
//         navigate("/profile");
//       }
//     } catch (error) {
//       console.log(error.response.data.detail); 
//       setErrorMsg(error.response.data.detail)
//     }
//   }

//   function submitNewDoctorForm(e) {
//     e.preventDefault();

//     sendNewDoctorDataToApi();
//   }

  


//   return (
//     <>
//       <form onSubmit={submitNewDoctorForm}>
//         <div
//           className={`${style.new_patient} w-75 text-center m-auto shadow-lg mt-5 rounded-5`}
//         >
//           <div className="container">
//             <div className="row">
//               <div className="col">
//                 <div className="w-100">
//                   <h2 className={`${style.new} mt-3 fs-2 fw-2 mb-5`}>
//                     Edit Profile Doctor's Data
//                   </h2>
//                   {/* formmmmmmmmmmm */}
//                   <div
//                     className={`w-75 me-auto position-relative m-auto mb-4 ${style.user}`}
//                   >
//                     <input
//                       required
//                       onChange={getDoctorData}
//                       type="text"
//                       className={`form-control ${style.formControlCustom}`}
                    
//                       name="doctorname"
//                       value={profileDoctor.doctorname}
                    
//                     />
//                   </div>

//                   <div
//                     className={`w-75 me-auto position-relative m-auto mb-4 ${style.user}`}
//                   >
//                     <input
//                       required
//                       onChange={getDoctorData}
//                       type="text"
//                       className={`form-control ${style.formControlCustom}`}
                    
//                       name="specialization"
//                       value={profileDoctor.specialization}
                    
//                     />
//                   </div>

//                   <div
//                     className={`w-75 me-auto position-relative m-auto mb-4 ${style.user}`}
//                   >
//                     <input
//                       required
//                       onChange={getDoctorData}
//                       type="number"
//                       className={`form-control ${style.formControlCustom}`}
                    
//                       name="years_of_experience"
//                       value={profileDoctor.number_of_patients}
                    
//                     />
//                   </div>

//                   <div
//                     className={`w-75 me-auto position-relative m-auto mb-4 ${style.user}`}
//                   >
//                     <input
//                       required
//                       onChange={getDoctorData}
//                       type="text"
//                       className={`form-control ${style.formControlCustom}  ${phoneNumberValid ? '' : 'is-invalid'}`}
                    
//                       name="phone_number"
//                       value={profileDoctor.phone_number}
                    
//                     />
//                     {!phoneNumberValid && <div className="invalid-feedback mb-0">Please enter a valid 11-digit mobile number.</div>}
//                   </div>

//                   <div
//                     className={`w-75 me-auto position-relative m-auto mb-4 ${style.user}`}
//                   >
//                     <input
                    
//                       className={style.customInput}
//                       onChange={getDoctorData}
//                       type="file"
//                       name="image_file"
//                       placeholder="Send image"
//                     />
//                   </div>
//                   {errorMsg !== "" ? <div className='alert alert-danger mt-2'>{errorMsg}</div> : ""}
//                   <div>
//                     <button
//                       type="submit"
//                       className={`${style.btn_patient}  w-25 border-5 mb-5`}
//                     >
//                       Save
//                     </button>
//                   </div>
//                   {/* end form */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }






/////////////////////////////////////////////////////////////

import React from 'react';
import style from './EditProfile.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EditProfile() {
  const [profileDoctor, setProfileDoctor] = useState({
    doctorname: '',
    specialization: '',
    years_of_experience: 0,
    phone_number: '',
    number_of_patients: 0,
    doctor_image: '',
  });

  useEffect(() => {
    getProfileDoctor();
  }, []);

  async function getProfileDoctor() {
    try {
      const response = await axios.get(
        'http://ec2-13-41-193-30.eu-west-2.compute.amazonaws.com/logged_user/profiledata',
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('userToken'),
          },
        }
      );

      if (response.data && response.data.profiledata) {
        const profileData = response.data.profiledata;
        setProfileDoctor(profileData);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const navigate = useNavigate(null);
  const [phoneNumberValid, setPhoneNumberValid] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  function getDoctorData(e) {
    const { name, value } = e.target;
    setProfileDoctor((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === 'phone_number') {
      const regex = /^(?:\+20|0)?1[0-9]{9}$/; // Regex pattern for 11-digit mobile numbers
      const isValid = regex.test(value);
      setPhoneNumberValid(isValid);
    }
  }

  async function sendNewDoctorDataToApi() {
    try {
      const formData = new FormData();
      formData.append('details', JSON.stringify(profileDoctor));

      let response = await axios.put(
        'http://ec2-13-41-193-30.eu-west-2.compute.amazonaws.com/user/profiledata/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + localStorage.getItem('userToken'),
          },
        }
      );

      if (response.data.message === 'ProfileData updated successfully') {
        navigate('/profile');
      }
    } catch (error) {
      console.log(error.response.data.detail);
      setErrorMsg(error.response.data.detail);
    }
  }

  function submitNewDoctorForm(e) {
    e.preventDefault();
    sendNewDoctorDataToApi();
  }

  return (
    <>
      <form onSubmit={submitNewDoctorForm}>
        <div
          className={`${style.new_patient} w-50 text-center m-auto shadow-lg mt-5 rounded-5`}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="w-100">
                  <h2 className={`${style.new} mt-3 fs-2 fw-2 mb-5`}>
                    Edit Profile Doctor's Data
                  </h2>
                  <div
                    className={`w-75 me-auto position-relative m-auto mb-4 ${style.user}`}
                  >
                    <input
                      required
                      onChange={getDoctorData}
                      type="text"
                      className={`form-control ${style.formControlCustom}`}
                      name="doctorname"
                      value={profileDoctor.doctorname}
                    />
                  </div>
                  <div
                    className={`w-75 me-auto position-relative m-auto mb-4 ${style.user}`}
                  >
                    <input
                      required
                      onChange={getDoctorData}
                      type="text"
                      className={`form-control ${style.formControlCustom}`}
                      name="specialization"
                      value={profileDoctor.specialization}
                    />
                  </div>
                  <div
                    className={`w-75 me-auto position-relative m-auto mb-4 ${style.user}`}
                  >
                    <input
                      required
                      onChange={getDoctorData}
                      type="number"
                      className={`form-control ${style.formControlCustom}`}
                      name="years_of_experience"
                      value={profileDoctor.years_of_experience}
                    />
                  </div>
                  <div
                    className={`w-75 me-auto position-relative m-auto mb-4 ${style.user}`}
                  >
                    <input
                      required
                      onChange={getDoctorData}
                      type="text"
                      className={`form-control ${style.formControlCustom}  ${
                        phoneNumberValid ? '' : 'is-invalid'
                      }`}
                      name="phone_number"
                      value={profileDoctor.phone_number}
                    />
                    {!phoneNumberValid && (
                      <div className="invalid-feedback mb-0">
                        Please enter a valid 11-digit mobile number.
                      </div>
                    )}
                  </div>
                  {/* <div
                    className={`w-75 me-auto position-relative m-auto mb-4 ${style.user}`}
                  >
                    <input
                      className={style.customInput}
                      onChange={getDoctorData}
                      type="file"
                      name="image_file"
                      placeholder="Send image"
                    />
                  </div> */}
                  {errorMsg !== '' && (
                    <div className="alert alert-danger mt-2">{errorMsg}</div>
                  )}
                  <div>
                    <button
                      type="submit"
                      className={`${style.btn_patient}  w-25 border-5 mb-5`}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

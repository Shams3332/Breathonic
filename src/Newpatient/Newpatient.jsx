/* eslint-disable jsx-a11y/alt-text */
import React, { useState , useRef } from 'react';
import style from './Newpatient.module.css';
import newpatient from '../images/patient.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Newpatient() {
  const [errorMsg, setErrorMsg] = useState("")
  let navigate = useNavigate();

  const [mobileNumberValid, setMobileNumberValid] = useState(true);

  const [newPatient, setNewPatient] = useState({
    full_name: '',
    gender: '',
    address: '',
    mobile_number: '',
  });

  function getPatientData(e) {
    let myNewPatient = { ...newPatient };
    myNewPatient[e.target.name] = e.target.value;
    setNewPatient(myNewPatient);
    if (e.target.name === 'mobile_number') {
      const regex = /^(?:\+20|0)?1[0-9]{9}$/; // Regex pattern for 11-digit mobile numbers
      const isValid = regex.test(e.target.value);
      setMobileNumberValid(isValid);
    }
  }

  console.log(newPatient);

  async function sendNewPatientDataToApi() {
    try {
      const token = localStorage.getItem('userToken');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },

      };
      console.log(token);

      const {data} = await axios.post(
        'http://ec2-13-41-193-30.eu-west-2.compute.amazonaws.com/user/patient',
        
        newPatient,
        config
      );
      console.log(data);
      // console.log(response.data);
      // Handle success or navigate to another page
      // ...
      
      if (data.message === "Congratulation!! Successfully Submited") {
        // scroll to personal data of patient
        // navigate(`/info/${data.full_name}`);

        // Scroll to the newly added patient
        navigate('/listpatient')
      }
    } catch (error) {
      console.error(error.response.data);
      console.log(error.response.data.detail);

      setErrorMsg(error.response.data.detail)
      // Handle error
      // ...
    }
  }


  function submitNewPatientForm(e) {
    e.preventDefault();
    sendNewPatientDataToApi();
  }

  return (
    <>
      <form onSubmit={submitNewPatientForm}>
        <div  className={`${style.new_patient} w-75 text-center m-auto shadow-lg mt-5 rounded-5`}>
          <div className="container">

            <div className="row">

              <div className="col">
                <div className='w-100 h-100'>
                  <img src={newpatient} className=' w-100 rounded-5 h-100' />
                </div>
              </div>


              <div className="col">
                <div className=" w-100">
                  <h2 className={`${style.new} mt-3 fs-2 fw-2 mb-5`}>New Patient</h2>
                  {/* formmmmmmmmmmm */}
                  <div className={`w-75 me-auto position-relative m-auto mb-4 ${style.user}`}>
                    <input required onChange={getPatientData} type="text" className={` form-control ${style.formControlCustom}`} placeholder='full name' name='full_name' />
                    <i className={`fa-solid fa-user position-absolute  ${style.iconUser}`}></i>
                  </div>

                  <div className={`w-75 me-auto position-relative m-auto mb-4 ${style.user}`}>

                    <div>
                      <input required onChange={getPatientData} type="text" className={` form-control ${style.formControlCustom} ${mobileNumberValid ? '' : 'is-invalid'}`} placeholder='mobile number' name='mobile_number' />
                      {!mobileNumberValid && <div className="invalid-feedback mb-0">Please enter a valid 11-digit mobile number.</div>}

                      <i className={`fa-solid fa-phone position-absolute  ${style.iconUser} ${mobileNumberValid ? '' : ' top-0 mt-2 pt-1'}`}></i>
                    </div>
                  </div>

                  <div className={`w-75 me-auto position-relative m-auto mb-4 ${style.user}`}>
                    <input required onChange={getPatientData} type="text" className={` form-control ${style.formControlCustom}`} placeholder='Address' name='address' />
                    <i className={`fa-solid fa-hotel position-absolute ${style.iconUser}`}></i>
                  </div>


                  <div className="form-group w-75 m-auto mb-5 position-relative">
                    <select onChange={getPatientData} className="form-control" id="gender" name="gender" placeholder="Select your gender" >

                      <option>....gender</option>
                      <option value="male">....Male</option>
                      <option value="female">.....Female</option>
                    </select>
                    <i className={`fa-solid fa-person-half-dress position-absolute fs-5 ${style.iconUser}`}></i>
                  </div>
                  {errorMsg !== "" ? <div className='alert alert-danger mt-2'>{errorMsg}</div> : ""}
                  
                  <div>
                    <button type='submit' className={`${style.btn_patient}  w-25 border-5 mb-5`}> Submit</button>
                  </div>
                  
                  {/* end form */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

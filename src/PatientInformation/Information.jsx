// //////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect, useRef } from 'react';
import style from './Information.module.css';
import inffoo from '../images/homeeee.png';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export default function Information() {
  const params = useParams();
  const [patientData, setPatientData] = useState(null);
  const [formData, setFormData] = useState(new FormData());
  const [fileError, setFileError] = useState('');
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [disease, setDisease] = useState('');
  const [patient_id, setPatient_id] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [selectedFileName, setSelectedFileName] = useState('');

  useEffect(() => {
    getPatientData();
    window.scrollTo(0, 0);
  }, []);

  async function getPatientData() {
    try {
      const { data } = await axios.get(
        `http://ec2-13-41-193-30.eu-west-2.compute.amazonaws.com/user/patient/${params.full_name}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('userToken'),
          },
        }
      );
      setPatientData(data.patients[0]);

      const patientId = data.patients[0]?.id; // Access patient ID from the data
      setPatient_id(patientId);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevFormData) => {
        const updatedFormData = new FormData();
        updatedFormData.append('file', file);
        return updatedFormData;
      });
      setFileError('');
      setIsFileUploaded(true);
      setSelectedFileName(file.name);
    }
  };

  async function submitFileData() {
    try {
      if (formData.has('file')) {
        const response = await axios.post('https://dolphin-app-9u8lj.ondigitalocean.app/predict', formData);
        const disease = response.data.result;
        setDisease(disease);
  
        await sendMedicalRecordToApi(disease, patient_id); // Save medical record to API
  
        // Fetch patient data again to get the updated medical records
        await getPatientData();
  
        setShowContent(true);
        setShowSecondModal(true);
      } else {
        setFileError('File is required');
      }
    } catch (error) {
      console.error('An error occurred while submitting file data:', error.response);
    }
  }
  

  

  async function sendMedicalRecordToApi(disease, patientId) {
    try {
      const token = localStorage.getItem('userToken');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const requestData = {
        result: disease,
        patient_id: patientId,
      };

      const { data } = await axios.post(
        'http://ec2-13-41-193-30.eu-west-2.compute.amazonaws.com/user/patient/medical_record',
        requestData,
        config
      );
      setSuccessMessage('Congratulations! Data saved successfully!');
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const fileInputRef = useRef(null);
  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div className={`${style.info}`}>
        <div className="container">
          <div className={`${style.background_image}`}></div>
          <div className={`${style.home2_contect}`}>
            <div className>
              <div className={`${style.small_img_content}`}>
                <img src={inffoo} className="w-100" alt="Profile" />
              </div>
              <div className={`${style.content_img}`}>
                <div className={`${style.text} text-center `}>
                  <h2 className="pt-0">The profile of patient: {patientData?.full_name}</h2>
                </div>
              </div>
            </div>
          </div>

          <div className={`${style.patient_info}`}>
            <div className="w-50 mb-5">
              <h3 className="fs-2 fw-bold">ID:</h3>
              <p>{patient_id}</p>
            </div>

            <div className="w-50 mb-5">
              <h3 className="fs-2 fw-bold">Name:</h3>
              <p>{patientData?.full_name}</p>
            </div>

            <div className="w-50 mb-5">
              <h3 className="fs-2 fw-bold">Address :</h3>
              <p>{patientData?.address}</p>
            </div>

            <div className="w-50 mb-5">
              <h3 className="fs-2 fw-bold">Mobile number :</h3>
              <p>{patientData?.mobile_number}</p>
            </div>

            <div className="w-50 mb-5">
              <h3 className="fs-2 fw-bold">Medical Record :</h3>
              {patientData?.medical_records.map((record, index) => (
                <div key={index}>
                  <p className="text-info"> Result: {record.result}</p>
                  <p className="text-info">Date: {record.date}</p>
                </div>
              ))}
            </div>

            <button type="button" className={`${style.btnsub} rounded-1`} data-bs-toggle="modal" data-bs-target="#exampleModal">
              Upload File
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-3" id="exampleModalLabel">Now Upload Record</h1>
    
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">

                    </button>
                  </div>
                  <div className="modal-body">
                    {showContent ? (
                      <>
                        <p className="text-center">{successMessage}</p>
                        <h4 className="m-5 text-primary text-center">{disease}</h4>
                        <div className="m-auto text-center">
                          {/* <button
                            type="button"
                            className={`${style.btnsub} rounded-1 px-4`} 
                            onClick={() => sendMedicalRecordToApi(disease, patient_id)}
                          >
                            Save
                          </button> */}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-center" onClick={handleClick}>
                          <i className={`fa-solid fa-cloud-arrow-up ${style.iconLarge}`}></i>
                          <p className={`${style.up}`}>Choose File</p>
                        </div>
                        <input
                          type="file"
                          name="file"
                          accept="audio/*"
                          onChange={handleFile}
                          style={{ display: 'none' }}
                          ref={fileInputRef}
                        />
                        {isFileUploaded && (
                          <div className="text-center mt-3">
                            <p>Selected File: {selectedFileName}</p>
                          </div>
                        )}
                      
                        {fileError && <p style={{ color: 'red' }}>{fileError}</p>}
                      </>
                    )}
                  </div>
                  <div className="modal-footer">
                    {!showContent && (
                      <button type="button" className={`${style.btnsub} rounded-1`} onClick={submitFileData}>
                        Submit
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5 text-end me-5">
            <Link to="/listpatient" className={`${style.back}`}>
              Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );



}



// /////////////////////////////////


// import React, { useState, useEffect, useRef } from 'react';
// import style from './Information.module.css';
// import inffoo from '../images/homeeee.png';
// import axios from 'axios';
// import { useParams, Link } from 'react-router-dom';

// export default function Information() {
//   const params = useParams();
//   const [patientData, setPatientData] = useState(null);
//   const [formData, setFormData] = useState(new FormData());
//   const [fileError, setFileError] = useState('');
//   const [isFileUploaded, setIsFileUploaded] = useState(false);
//   const [showContent, setShowContent] = useState(false);
//   const [showSecondModal, setShowSecondModal] = useState(false);
//   const [disease, setDisease] = useState('');
//   const [patient_id, setPatient_id] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [selectedFileName, setSelectedFileName] = useState('');

//   useEffect(() => {
//     getPatientData();
//     window.scrollTo(0, 0);
//   }, []);

//   const [medicalRecords, setMedicalRecords] = useState([]);


//   async function getPatientData() {
//     try {
//       const { data } = await axios.get(
//         `http://ec2-13-41-193-30.eu-west-2.compute.amazonaws.com/user/patient/${params.full_name}`,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: 'Bearer ' + localStorage.getItem('userToken'),
//           },
//         }
//       );
//       setPatientData(data.patients[0]);
  
//       const patientId = data.patients[0]?.id; // Access patient ID from the data
//       setPatient_id(patientId);
  
//       // Set the medical records directly in the state
//       setMedicalRecords(data.patients[0]?.medical_records);
  
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
//   const handleFile = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData((prevFormData) => {
//         const updatedFormData = new FormData();
//         updatedFormData.append('file', file);
//         return updatedFormData;
//       });
//       setFileError('');
//       setIsFileUploaded(true);
//       setSelectedFileName(file.name);
//     }
//   };

//   async function submitFileData() {
//     try {
//       if (formData.has('file')) {
//         const response = await axios.post('https://dolphin-app-9u8lj.ondigitalocean.app/predict', formData);
//         const disease = response.data.result;
//         setDisease(disease);

//         setShowSecondModal(true);
//       } else {
//         setFileError('File is required');
//       }
//     } catch (error) {
//       console.error('An error occurred while submitting file data:', error.response);
//     }
//   }

//   async function sendMedicalRecordToApi() {
//     try {
//       const token = localStorage.getItem('userToken');
//       const config = {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       const requestData = {
//         result: disease,
//         patient_id: patient_id,
//       };

//       const { data } = await axios.post(
//         'http://ec2-13-41-193-30.eu-west-2.compute.amazonaws.com/user/patient/medical_record',
//         requestData,
//         config
//       );
//       setSuccessMessage('Congratulations! Data saved successfully!');
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const fileInputRef = useRef(null);
//   const handleClick = () => {
//     setSuccessMessage('');
//     setDisease('');
//     setShowContent(false);
//     fileInputRef.current.click();
//   };

//   return (
//     <>
//       <div className={`${style.info}`}>
//         <div className="container">
//           <div className={`${style.background_image}`}></div>
//           <div className={`${style.home2_contect}`}>
//             <div className>
//               <div className={`${style.small_img_content}`}>
//                 <img src={inffoo} className="w-100" alt="Profile" />
//               </div>
//               <div className={`${style.content_img}`}>
//                 <div className={`${style.text} text-center `}>
//                   <h2 className="pt-0">The profile of patient: {patientData?.full_name}</h2>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className={`${style.patient_info}`}>
//             <div className="w-50 mb-5">
//               <h3 className="fs-2 fw-bold">ID:</h3>
//               <p>{patient_id}</p>
//             </div>

//             <div className="w-50 mb-5">
//               <h3 className="fs-2 fw-bold">Name:</h3>
//               <p>{patientData?.full_name}</p>
//             </div>

//             <div className="w-50 mb-5">
//               <h3 className="fs-2 fw-bold">Address :</h3>
//               <p>{patientData?.address}</p>
//             </div>

//             <div className="w-50 mb-5">
//               <h3 className="fs-2 fw-bold">Mobile number :</h3>
//               <p>{patientData?.mobile_number}</p>
//             </div>

//             <div className="w-50 mb-5">
//   <h3 className="fs-2 fw-bold">Medical Record :</h3>
//   {medicalRecords.map((record, index) => (
//     <div key={index}>
//       <p className="text-info">Result: {record.result}</p>
//       <p className="text-info">Date: {record.date}</p>
//     </div>
//   ))}
// </div>

//             <button type="button" className={`${style.btnsub} rounded-1`} data-bs-toggle="modal" data-bs-target="#exampleModal">
//               Upload File
//             </button>

//             <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//               <div className="modal-dialog modal-dialog-centered">
//                 <div className="modal-content">
//                   <div className="modal-header">
//                     <h1 className="modal-title fs-3" id="exampleModalLabel">Now Upload Record</h1>

//                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">

//                     </button>
//                   </div>
//                   <div className="modal-body">
//                     {showSecondModal ? (
//                       <>
//                         <p className="text-center">{successMessage}</p>
//                         <h4 className="m-5 text-primary text-center">{disease}</h4>
//                         <div className="m-auto text-center">
//                           <button
//                             type="button"
//                             className={`${style.btnsub} rounded-1 px-4`}
//                             onClick={sendMedicalRecordToApi}
//                           >
//                             Save
//                           </button>
//                         </div>
//                       </>
//                     ) : (
//                       <>
//                         <div className="text-center" onClick={handleClick}>
//                           <i className={`fa-solid fa-cloud-arrow-up ${style.iconLarge}`}></i>
//                           <p className={`${style.up}`}>Choose File</p>
//                         </div>
//                         <input
//                           type="file"
//                           name="file"
//                           accept="audio/*"
//                           onChange={handleFile}
//                           style={{ display:'none' }}
//                           ref={fileInputRef}
//                         />
//                         {isFileUploaded && (
//                           <div className="text-center mt-3">
//                             <p>Selected File: {selectedFileName}</p>
//                           </div>
//                         )}

//                         {fileError && <p style={{ color: 'red' }}>{fileError}</p>}
//                       </>
//                     )}
//                   </div>
//                   <div className="modal-footer">
//                     {!showSecondModal && (
//                       <button type="button" className={`${style.btnsub} rounded-1`} onClick={submitFileData}>
//                         Submit
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="mb-5 text-end me-5">
//             <Link to="/listpatient" className={`${style.back}`}>
//               Back
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

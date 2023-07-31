/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useRef } from 'react';
import style from './List.module.css';
import listt from '../images/list.png';
import logoinfo from '../images/logoinfo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Information from '../PatientInformation/Information';

export default function List() {
  const lastPatientRef = useRef(null);
  const [patients, setPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [deletePatientId, setDeletePatientId] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  useEffect(() => {
    getPatients();
  }, []);

  async function getPatients() {
    try {
      const response = await axios.get('http://ec2-13-41-193-30.eu-west-2.compute.amazonaws.com/user/patients', {
      
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('userToken')
        }
      });

      if (response.data.patients && response.data.patients.length > 0) {
        setPatients(response.data.patients);
        console.log(response.data.patients);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function handleSearch(event) {
    setSearchQuery(event.target.value);
  }

  async function deletePatient() {
    try {
      const response = await axios.delete(
        'http://ec2-13-41-193-30.eu-west-2.compute.amazonaws.com/user/patient/delete',
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('userToken')
          },
          data: {
            full_name: deletePatientId
          }
        }
      );

      // Check the response and handle success/failure accordingly
      console.log(response);

      // Update the patient list after deletion
      getPatients();
      setDeleteSuccess(true); // Set delete success status
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className={`${style.list}`}>
        <div className="container">
          <div className={`${style.check_img}`}>
            <img src={listt} className="w-100" />
          </div>

          <h3 className="mt-5 text-center fs-1">List of Patients</h3>

          <form className="d-flex align-items-center justify-content-center" role="search">
            <input
              className="form-control me-3 py-1 w-25 mt-3"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearch}
            />
          </form>

          <div className="row mt-5 d-flex justify-content-around ">
            {patients
              .filter((patient) => patient.full_name.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((patient, index) => (
                <div
                  className="col-lg-5 mb-4 "
                  key={patient.id}
                  ref={index === patients.length - 3 ? lastPatientRef : null}
                >
                  <div className={`${style.check_content}  shadow-sm d-flex position-relative`}>
                    <Link to={`/info/${patient.full_name}`}>
                      <img src={logoinfo} alt="Logo Info" />
                    </Link>
                    <div className="mt-3 ms-4">
                      <h5>{patient.full_name}</h5>

                      {/* Delete patient */}
                      <i
                        className={`${style.Delete} fa-solid fa-trash-can fa-lg text-danger`}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => {
                          setDeletePatientId(patient.full_name);
                          setShowDeleteModal(true);
                        }}
                      ></i>

                      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Welcome
                              </h1>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              {deleteSuccess ? (
                                <p className="text-success">The patient has been deleted successfully..</p>
                              ) : (
                                <p>Are you sure you want to delete this patient?</p>
                              )}
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => {
                                  deletePatient();
                                  setShowDeleteModal(false);
                                }}
                              >
                                Yes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* end of Delete patient */}
                      <p>Click here to know more information about this patient</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}




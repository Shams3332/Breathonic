/* eslint-disable jsx-a11y/alt-text */
// /* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import record from '../images/check.png';
import voice from '../images/voice.png';
import style from '../CheckRecords/CheckRecord.module.css';
import rec1 from '../CheckRecords/audio/asthma.wav';
import rec2 from '../CheckRecords/audio/brnchiolitis.wav';
import rec3 from '../CheckRecords/audio/bronchiectasis.wav';
import rec4 from '../CheckRecords/audio/copd.wav';
import rec5 from '../CheckRecords/audio/healthy.wav';
import rec6 from '../CheckRecords/audio/lrti.wav';
import rec7 from '../CheckRecords/audio/pneumonia.wav';
import rec8 from '../CheckRecords/audio/urti.wav';

export default function CheckRecords() {

  // Rec1
  const [index1, setIndex1] = useState('');
  const [showAlert1, setShowAlert1] = useState(false);

  const handleInputChange1 = (e) => {
    setIndex1(e.target.value);
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    setShowAlert1(true);
  };

  const handleCloseAlert1 = () => {
    setShowAlert1(false);
  };


  // Rec2

  const [index2, setIndex2] = useState('');
  const [showAlert2, setShowAlert2] = useState(false);

  const handleInputChange2 = (e) => {
    setIndex2(e.target.value);
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    setShowAlert2(true);
  };

  const handleCloseAlert2 = () => {
    setShowAlert2(false);
  };

  // Rec3

  const [index3, setIndex3] = useState('');
  const [showAlert3, setShowAlert3] = useState(false);

  const handleInputChange3 = (e) => {
    setIndex3(e.target.value);
  };

  const handleSubmit3 = (e) => {
    e.preventDefault();
    setShowAlert3(true);
  };

  const handleCloseAlert3 = () => {
    setShowAlert3(false);
  };

  // Rec4

  const [index4, setIndex4] = useState('');
  const [showAlert4, setShowAlert4] = useState(false);

  const handleInputChange4 = (e) => {
    setIndex4(e.target.value);
  };

  const handleSubmit4 = (e) => {
    e.preventDefault();
    setShowAlert4(true);
  };

  const handleCloseAlert4 = () => {
    setShowAlert4(false);
  };

  // Rec5

  const [index5, setIndex5] = useState('');
  const [showAlert5, setShowAlert5] = useState(false);

  const handleInputChange5 = (e) => {
    setIndex5(e.target.value);
  };

  const handleSubmit5 = (e) => {
    e.preventDefault();
    setShowAlert5(true);
  };

  const handleCloseAlert5 = () => {
    setShowAlert5(false);
  };

  // Rec6
  const [index6, setIndex6] = useState('');
  const [showAlert6, setShowAlert6] = useState(false);

  const handleInputChange6 = (e) => {
    setIndex6(e.target.value);
  };

  const handleSubmit6 = (e) => {
    e.preventDefault();
    setShowAlert6(true);
  };

  const handleCloseAlert6 = () => {
    setShowAlert6(false);
  };

  // Rec7

  const [index7, setIndex7] = useState('');
  const [showAlert7, setShowAlert7] = useState(false);

  const handleInputChange7 = (e) => {
    setIndex7(e.target.value);
  };

  const handleSubmit7 = (e) => {
    e.preventDefault();
    setShowAlert7(true);
  };

  const handleCloseAlert7 = () => {
    setShowAlert7(false);
  };

  // Rec8

  const [index8, setIndex8] = useState('');
  const [showAlert8, setShowAlert8] = useState(false);

  const handleInputChange8 = (e) => {
    setIndex8(e.target.value);
  };

  const handleSubmit8 = (e) => {
    e.preventDefault();
    setShowAlert8(true);
  };

  const handleCloseAlert8 = () => {
    setShowAlert8(false);
  };

  return (
    <>
      <div className="container">
        <div className={`${style.check_img}`}>
          <img src={record} className="w-100" alt="Record" />
        </div>

        <div className='my-5'>
          <h1>Check Records</h1>
        </div>

        <div className="row mt-5 d-flex justify-content-around ">


              {/*   rec1 */}
          <div className={`${style.check_record} col-lg-6`}>
            <div className={`${style.check_content} shadow d-flex position-relative rounded-3 mb-5 `}>
              <img src={voice} alt="Logo Info" className="m-3" />

              {/* Record */}
              <div className={`${style.check_record} mt-3 ms-4 w-100 `}>
                <h4 className="text-info mt-4">Rec1</h4>
                <audio src={rec1} controls className="mt-1 w-75"></audio>

                <div className="index-wrapper">
                  <form onSubmit={handleSubmit1}>
                    <input
                      type="text"
                      className="index-input p-1 w-75 my-3 rounded-3"
                      placeholder="Enter index"
                      onChange={handleInputChange1}
                    />
                    <button
                      type="submit"
                      className="btn btn-info submit-button ms-3 text-white"
                    >
                      Submit
                    </button>
                  </form>
                </div>

                {showAlert1 && index1 !== 'asthma' && (
                  <div className="alert alert-danger mt-3 d-flex  justify-content-between" role="alert">
                    <p>Wrong answer!</p> 
                    <i className={`${style.cursor} fa-regular fa-circle-xmark fs-4`} onClick={handleCloseAlert1}></i>
                  </div>
                )}

                {showAlert1 && index1 === 'asthma' && (
                  <div className="alert alert-success mt-3 d-flex  justify-content-between" role="alert">
                    <p>Right answer!</p> 
                    <i className={`${style.cursor} fa-regular fa-circle-xmark fs-4`} onClick={handleCloseAlert1}></i>
                  </div>
                )}
              </div>
            </div>
          </div>

                  {/*    Rec2 */}
          <div className={`${style.check_record} col-lg-6`}>
            <div className={`${style.check_content} shadow d-flex position-relative rounded-3 mb-5 `}>
              <img src={voice} alt="Logo Info" className="m-3" />

              {/* Record */}
              <div className={`${style.check_record} mt-3 ms-4 w-100 `}>
                <h4 className="text-info mt-4">Rec2</h4>
                <audio src={rec2} controls className="mt-1 w-75"></audio>

                <div className="index-wrapper">
                  <form onSubmit={handleSubmit2}>
                    <input
                      type="text"
                      className="index-input p-1 w-75 my-3 rounded-3"
                      placeholder="Enter index"
                      onChange={handleInputChange2}
                    />
                    <button
                      type="submit"
                      className="btn btn-info submit-button ms-3 text-white"
                    >
                      Submit
                    </button>
                  </form>
                </div>

                {showAlert2 && index2 !== 'brnchiolitis' && (
                  <div className="alert alert-danger mt-3 d-flex  justify-content-between" role="alert">
                    Wrong answer!
                    <i className={`${style.cursor} fa-regular fa-circle-xmark fs-4`} onClick={handleCloseAlert2}></i>
                  </div>
                )}

                {showAlert2 && index2 === 'brnchiolitis' && (
                  <div className="alert alert-success mt-3 d-flex  justify-content-between" role="alert">
                    Right answer!
                    <i className={`${style.cursor} fa-regular fa-circle-xmark fs-4`} onClick={handleCloseAlert2}></i>
                  </div>
                )}
              </div>
            </div>
          </div>
                    {/* Rec3 */}
          <div className={`${style.check_record} col-lg-6`}>
            <div className={`${style.check_content} shadow d-flex position-relative rounded-3 mb-5 `}>
              <img src={voice} alt="Logo Info" className="m-3" />

              {/* Record */}
              <div className={`${style.check_record} mt-3 ms-4 w-100 `}>
                <h4 className="text-info mt-4">Rec3</h4>
                <audio src={rec3} controls className="mt-1 w-75"></audio>

                <div className="index-wrapper">
                  <form onSubmit={handleSubmit3}>
                    <input
                      type="text"
                      className="index-input p-1 w-75 my-3 rounded-3"
                      placeholder="Enter index"
                      onChange={handleInputChange3}
                    />
                    <button
                      type="submit"
                      className="btn btn-info submit-button ms-3 text-white"
                    >
                      Submit
                    </button>
                  </form>
                </div>

                {showAlert3 && index3 !== 'bronchiectasis' && (
                  <div className="alert alert-danger mt-3 d-flex  justify-content-between" role="alert">
                    Wrong answer!
                    <i className={`${style.cursor} fa-regular fa-circle-xmark fs-4`} onClick={handleCloseAlert3}></i>
                  </div>
                )}

                {showAlert3 && index3 === 'bronchiectasis' && (
                  <div className="alert alert-success mt-3 d-flex  justify-content-between" role="alert">
                    Right answer!
                    <i className={`${style.cursor} fa-regular fa-circle-xmark fs-4`} onClick={handleCloseAlert3}></i>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Rec4 */}

          <div className={`${style.check_record} col-lg-6`}>
            <div className={`${style.check_content} shadow d-flex position-relative rounded-3 mb-5 `}>
              <img src={voice} alt="Logo Info" className="m-3" />

              {/* Record */}
              <div className={`${style.check_record} mt-3 ms-4 w-100 `}>
                <h4 className="text-info mt-4">Rec4</h4>
                <audio src={rec4} controls className="mt-1 w-75"></audio>

                <div className="index-wrapper">
                  <form onSubmit={handleSubmit4}>
                    <input
                      type="text"
                      className="index-input p-1 w-75 my-3 rounded-3"
                      placeholder="Enter index"
                      onChange={handleInputChange4}
                    />
                    <button
                      type="submit"
                      className="btn btn-info submit-button ms-3 text-white"
                    >
                      Submit
                    </button>
                  </form>
                </div>

                {showAlert4 && index4 !== 'copd' && (
                  <div className="alert alert-danger mt-3 d-flex  justify-content-between" role="alert">
                    Wrong answer!
                    <i className={`${style.cursor} fa-regular fa-circle-xmark fs-4`} onClick={handleCloseAlert4}></i>
                  </div>
                )}

                {showAlert4 && index4 === 'copd' && (
                  <div className="alert alert-success mt-3 d-flex  justify-content-between" role="alert">
                    Right answer!
                    <i className={`${style.cursor} fa-regular fa-circle-xmark fs-4`} onClick={handleCloseAlert4}></i>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Rec5 */}

          <div className={`${style.check_record} col-lg-6`}>
            <div className={`${style.check_content} shadow d-flex position-relative rounded-3 mb-5 `}>
              <img src={voice} alt="Logo Info" className="m-3" />

              {/* Record */}
              <div className={`${style.check_record} mt-3 ms-4 w-100 `}>
                <h4 className="text-info mt-4">Rec5</h4>
                <audio src={rec5} controls className="mt-1 w-75"></audio>

                <div className="index-wrapper">
                  <form onSubmit={handleSubmit5}>
                    <input
                      type="text"
                      className="index-input p-1 w-75 my-3 rounded-3"
                      placeholder="Enter index"
                      onChange={handleInputChange5}
                    />
                    <button
                      type="submit"
                      className="btn btn-info submit-button ms-3 text-white"
                    >
                      Submit
                    </button>
                  </form>
                </div>

                {showAlert5 && index5 !== 'healthy' && (
                  <div className="alert alert-danger mt-3 d-flex  justify-content-between" role="alert">
                    Wrong answer!
                    <i className={`${style.cursor} fa-regular fa-circle-xmark fs-4`} onClick={handleCloseAlert5}></i>
                  </div>
                )}

                {showAlert5 && index5 === 'healthy' && (
                  <div className="alert alert-success mt-3 d-flex  justify-content-between" role="alert">
                    Right answer!
                    <i className={`${style.cursor} fa-regular fa-circle-xmark fs-4`} onClick={handleCloseAlert5}></i>
                  </div>
                )}
              </div>
            </div>
          </div>


          {/* Rec6 */}
          <div className={`${style.check_record} col-lg-6`}>
            <div className={`${style.check_content} shadow d-flex position-relative rounded-3 mb-5 `}>
              <img src={voice} alt="Logo Info" className="m-3" />

              {/* Record */}
              <div className={`${style.check_record} mt-3 ms-4 w-100 `}>
                <h4 className="text-info mt-4">Rec6</h4>
                <audio src={rec6} controls className="mt-1 w-75"></audio>

                <div className="index-wrapper">
                  <form onSubmit={handleSubmit6}>
                    <input
                      type="text"
                      className="index-input p-1 w-75 my-3 rounded-3"
                      placeholder="Enter index"
                      onChange={handleInputChange6}
                    />
                    <button
                      type="submit"
                      className="btn btn-info submit-button ms-3 text-white"
                    >
                      Submit
                    </button>
                  </form>
                </div>

                {showAlert6 && index6 !== 'lrti' && (
                  <div className="alert alert-danger mt-3 d-flex  justify-content-between" role="alert">
                    Wrong answer!
                    <i className={`${style.cursor} fa-regular fa-circle-xmark fs-4`} onClick={handleCloseAlert6}></i>
                  </div>
                )}

                {showAlert6 && index6 === 'lrti' && (
                  <div className="alert alert-success mt-3 d-flex  justify-content-between" role="alert">
                    Right answer!
                    <i className={`${style.cursor} fa-regular fa-circle-xmark fs-4`} onClick={handleCloseAlert6}></i>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Rec7 */}
          <div className={`${style.check_record} col-lg-6`}>
            <div className={`${style.check_content} shadow d-flex position-relative rounded-3 mb-5 `}>
              <img src={voice} alt="Logo Info" className="m-3" />

              {/* Record */}
              <div className={`${style.check_record} mt-3 ms-4 w-100 `}>
                <h4 className="text-info mt-4">Rec7</h4>
                <audio src={rec7} controls className="mt-1 w-75"></audio>

                <div className="index-wrapper">
                  <form onSubmit={handleSubmit7}>
                    <input
                      type="text"
                      className="index-input p-1 w-75 my-3 rounded-3"
                      placeholder="Enter index"
                      onChange={handleInputChange7}
                    />
                    <button
                      type="submit"
                      className="btn btn-info submit-button ms-3 text-white"
                    >
                      Submit
                    </button>
                  </form>
                </div>

                {showAlert7 && index7 !== 'pneumonia' && (
                  <div className="alert alert-danger mt-3 d-flex  justify-content-between" role="alert">
                    Wrong answer!
                    <i className={`${style.cursor} fa-regular fa-circle-xmark fs-4`} onClick={handleCloseAlert7}></i>
                  </div>
                )}

                {showAlert7 && index7 === 'pneumonia' && (
                  <div className="alert alert-success mt-3 d-flex  justify-content-between" role="alert">
                    Right answer!
                    <i className={`${style.cursor} fa-regular fa-circle-xmark fs-4`} onClick={handleCloseAlert7}></i>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Rec8 */}

          <div className={`${style.check_record} col-lg-6`}>
            <div className={`${style.check_content} shadow d-flex position-relative rounded-3 mb-5 `}>
              <img src={voice} alt="Logo Info" className="m-3" />

              {/* Record */}
              <div className={`${style.check_record} mt-3 ms-4 w-100 `}>
                <h4 className="text-info mt-4">Rec8</h4>
                <audio src={rec8} controls className="mt-1 w-75"></audio>

                <div className="index-wrapper">
                  <form onSubmit={handleSubmit8}>
                    <input
                      type="text"
                      className="index-input p-1 w-75 my-3 rounded-3"
                      placeholder="Enter index"
                      onChange={handleInputChange8}
                    />
                    <button
                      type="submit"
                      className="btn btn-info submit-button ms-3 text-white"
                    >
                      Submit
                    </button>
                  </form>
                </div>

                {showAlert8 && index8 !== 'pneumonia' && (
                  <div className="alert alert-danger mt-3 d-flex  justify-content-between" role="alert">
                    Wrong answer!
                    <i className={`${style.cursor} fa-regular fa-circle-xmark fs-4`} onClick={handleCloseAlert8}></i>
                  </div>
                )}

                {showAlert8 && index8 === 'pneumonia' && (
                  <div className="alert alert-success mt-3 d-flex  justify-content-between" role="alert">
                    Right answer!
                    <i className={`${style.cursor} fa-regular fa-circle-xmark fs-4`} onClick={handleCloseAlert8}></i>
                  </div>
                )}
              </div>
            </div>
          </div>





        </div>
      </div>
    </>
  );
}


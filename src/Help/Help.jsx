/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import style from './Help.module.css';
import blog1 from '../images/Blog1.jpg';
import blog2 from '../images/Blog2.jpg';
import blog3 from '../images/Blog3.jpg';
import blog4 from '../images/Blog4.jpg';
import blog6 from '../images/Blog6.jpg';


export default function Help() {
  return (
    <>
    <h2 className="m-auto text-center mt-5 mb-5 text-info">Some information about some Respiratory Diseases</h2>
    <section className="sec4 mb-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 ">
        <div className="card shadow mb-5">
          <div className="card-img overflow-hidden">
            <img src={blog1} className="card-img-top" />
          </div>
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 className="card-title text-info">Upper Respiratory Tract Infection (URTI):</h5>
              
              <p className="card-text">
              Definition: URTI refers to infections that affect the upper respiratory tract, 
              including the nose, throat, sinuses, and larynx. Common URTIs include the common cold and sinusitis.
              <a href="https://www.ncbi.nlm.nih.gov/books/NBK532961/" 
              target="_blank" rel="noopener noreferrer" className="text-primary">Learn more</a></p>
            </div>
            <div className="icon3 text-primary">
              <i className="bi bi-plus-circle" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 ">
        <div className="card shadow">
          <div className="card-img overflow-hidden">
            <img src={blog2} className="card-img-top" />
          </div>
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 className="card-title text-info">Asthma:</h5>
              <p className="card-text">Asthma is a chronic inflammatory respiratory condition characterized by 
              recurrent episodes of wheezing, breathlessness, chest tightness,
              and coughing. It causes the airways to narrow and become hypersensitive to various triggers.
              <a href="https://www.ncbi.nlm.nih.gov/books/NBK430901/" 
              target="_blank" rel="noopener noreferrer" className="text-primary">Learn more</a>
              </p>
            </div>
            <div className="icon3 text-primary">
              <i className="bi bi-plus-circle" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 ">
        <div className="card shadow">
          <div className="card-img overflow-hidden">
            <img src={blog4} className="card-img-top" />
          </div>
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 className="card-title text-info "> Chronic Obstructive Pulmonary Disease (COPD):</h5>
              <p className="card-text">
              COPD is a chronic progressive lung disease characterized by
              airflow limitation and persistent respiratory symptoms. It includes chronic bronchitis and emphysema.
              
              <a href="https://www.ncbi.nlm.nih.gov/books/NBK559281/" 
              target="_blank" rel="noopener noreferrer" className="text-primary">Learn more</a>
              </p>
            </div>
            <div className="icon3 text-primary">
              <i className="bi bi-plus-circle" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 ">
        <div className="card shadow">
          <div className="card-img overflow-hidden">
            <img src={blog3} className="card-img-top" />
          </div>
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 className="card-title text-info">Lower Respiratory Tract Infection (LRTI):</h5>
              <p className="card-text">
              LRTI refers to infections that affect the lower respiratory tract, 
              including the trachea, bronchi, and lungs. Common LRTIs include bronchitis and pneumonia.
              <a href="https://en.m.wikipedia.org/wiki/Lower_respiratory_tract_infection" 
              target="_blank" rel="noopener noreferrer" className="text-primary">Learn more</a></p>
            </div>
            <div className="icon3 text-primary">
              <i className="bi bi-plus-circle" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 ">
        <div className="card shadow">
          <div className="card-img overflow-hidden">
            <img src={blog1} className="card-img-top" />
          </div>
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 className="card-title text-info">Bronchiolitis:</h5>
              <p className="card-text">
              Bronchiolitis is a common respiratory condition that primarily affects infants and young children. 
              It causes inflammation and congestion in the small airways of the lungs (bronchioles).
              
              <a href="https://www.ncbi.nlm.nih.gov/books/NBK430810/" 
              target="_blank" rel="noopener noreferrer" className="text-primary">Learn more</a>
              </p>
            </div>
            <div className="icon3 text-primary">
              <i className="bi bi-plus-circle" />
            </div>
          </div>
        </div>
      </div>
    
      <div className="col-lg-4 ">
        <div className="card shadow">
          <div className="card-img overflow-hidden">
            <img src={blog6} className="card-img-top" />
          </div>
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 className="card-title text-info">Pneumonia:</h5>
              <p className="card-text">
              Pneumonia is an infection that inflames the air sacs in one or both lungs, leading to cough, 
              fever, difficulty breathing, and chest pain.
              It can be caused by various pathogens.
              <a href="https://www.ncbi.nlm.nih.gov/books/NBK526116/" 
              target="_blank" rel="noopener noreferrer" className="text-primary">Learn more</a></p>
            </div>
            <div className="icon3 text-primary">
              <i className="bi bi-plus-circle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    
    </>
  )
}

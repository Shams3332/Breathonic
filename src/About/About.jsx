/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import style from'./About.module.css';
import sayed from '../images/sayed2.jpg';
import shams from '../images/shams.jpg';
import shahd from '../images/shahd.jpg';
import ammar from '../images/ammar.jpg';
import abd from    '../images/Abd.jpg';
import ammar2 from '../images/ammar2.jpg';
// import shrouk from '../images/shrouk.jpg';
import esraa from '../images/esraa.jpg';

export default function About() {
  return (
    <>
  <div>
  <div className={`${style.Row_firstRow}`}>
    <h1 className='text-info mt-5'>Our Team</h1>
  </div>

  <section>
    <div className={`${style.Row}`}>
      <div className={`${style.column}`}>
        <div className={`${style.Card}`}>
          <div className={`${style.img_container}`}>
            <img src={sayed} alt="sayed" />
          </div>
          <h3>Sayed Hashem</h3>
          <p classname={`${style.role}`}>Flutter Developer</p>
          <div className={`${style.icons}`}>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin" />
            </a>
            <a href="#">
              <i className="fab fa-github" />
            </a>
            <a href="#">
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>
      </div>
      <div className={`${style.column}`}>
        <div className={`${style.Card}`}>
          <div className={`${style.img_container}`}>
            <img src={ammar} alt="Ammar" />
          </div>
          <h3>Ammar Mahmoud</h3>
          <p classname={`${style.role}`}>ML engineer</p>
          <div className={`${style.icons}`}>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin" />
            </a>
            <a href="#">
              <i className="fab fa-github" />
            </a>
            <a href="#">
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>
      </div>
      <div className={`${style.column}`}>
        <div className={`${style.Card}`}>
          <div className={`${style.img_container}`}>
            <img  alt="Essam" />
          </div>
          <h3>Abdelrahman Essam</h3>
          <p classname={`${style.role}`}>ML engineer</p>
          <div className={`${style.icons}`}>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin" />
            </a>
            <a href="#">
              <i className="fab fa-github" />
            </a>
            <a href="#">
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>
      </div>
      <div className={`${style.column}`}>
        <div className={`${style.Card}`}>
          <div className={`${style.img_container}`}>
            <img src={abd} alt="abdelrahman" />
          </div>
          <h3>Abdelrahman Mahmoud</h3>
          <p classname={`${style.role}`}>Backend developer</p>
          <div className={`${style.icons}`}>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin" />
            </a>
            <a href="#">
              <i className="fab fa-github" />
            </a>
            <a href="#">
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>
      </div>
      <div className={`${style.column}`}>
        <div className={`${style.Card}`}>
          <div className={`${style.img_container}`}>
            <img src={shahd} alt="shahd" />
          </div>
          <h3>Shahd Owies</h3>
          <p classname={`${style.role}`}>FrontEnd Developer</p>
          <div className={`${style.icons}`}>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin" />
            </a>
            <a href="#">
              <i className="fab fa-github" />
            </a>
            <a href="#">
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>
      </div>



      <div className={`${style.column}`}>
        <div className={`${style.Card}`}>
          <div className={`${style.img_container}`}>
            <img src={esraa} alt="esraa" />
          </div>
          <h3>Esraa Ibrahim</h3>
          <p classname={`${style.role}`}>Backend Developer</p>
          <div className={`${style.icons}`}>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin" />
            </a>
            <a href="#">
              <i className="fab fa-github" />
            </a>
            <a href="#">
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>
      </div>





      <div className={`${style.column}`}>
        <div className={`${style.Card}`}>
          <div className={`${style.img_container}`}>
            <img src={shams} alt="shams" />
          </div>
          <h3>Shams Abdeltwab</h3>
          <p classname={`${style.role}`}>FrontEnd Developer</p>
          <div className={`${style.icons}`}>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin" />
            </a>
            <a href="#">
              <i className="fab fa-github" />
            </a>
            <a href="#">
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>
      </div>
      <div className={`${style.column}`}>
        <div className={`${style.Card}`}>
          <div className={`${style.img_container}`}>
            <img  alt="shrouk" />
          </div>
          <h3>Shrouk Mohamed</h3>
          <p classname={`${style.role}`}>Flutter Developer</p>
          <div className={`${style.icons}`}>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin" />
            </a>
            <a href="#">
              <i className="fab fa-github" />
            </a>
            <a href="#">
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>
      </div>
      <div className={`${style.column}`}>
        <div className={`${style.Card}`}>
          <div className={`${style.img_container}`}>
            <img  alt="rana" />
          </div>
          <h3>Rana Abdallah</h3>
          <p classname={`${style.role}`}>Backend Developer</p>
          <div className={`${style.icons}`}>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin" />
            </a>
            <a href="#">
              <i className="fab fa-github" />
            </a>
            <a href="#">
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>
      </div>

    
      <div className={`${style.column}`}>
        <div className={`${style.Card}`}>
          <div className={`${style.img_container}`}>
            <img src={ammar2} alt="abdelrahman" />
          </div>
          <h3>Ammar Owies</h3>
          <p classname={`${style.role}`}>UI/UX developer</p>
          <div className={`${style.icons}`}>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin" />
            </a>
            <a href="#">
              <i className="fab fa-github" />
            </a>
            <a href="#">
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>
      </div>
      
      
    </div>
  </section>
</div>

    

    
    </>
  )
}

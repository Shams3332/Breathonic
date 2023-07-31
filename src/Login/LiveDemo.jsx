
import React, { useState, useEffect } from "react";
import style from "./LiveDemo.module.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import Joi from "joi";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import { useContext } from 'react';
import { AuthContext } from './../auth/AuthContext';


export default function LiveDemo() {
  const [errorMsgCode, seterrorMsgCode] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State variable for error message

  let { toggleOpenLogin, isOpenLogin } = useContext(AuthContext);

  const [isOpenForget, setIsOpenForget] = useState(true);


  function toggleOpenForget() {
    setIsOpenForget(!isOpenForget);
  }


  const { userData, saveUserData } = useContext(AuthContext);

  let navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [errorList, seterrorList] = useState([]);

  const [error, setError] = useState("");

  const [user, setUser] = useState({
    email: "",
    password: " ",
  });

  function getUserData(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }

  async function sendloginDataToApi() {
    try {
      let { data } = await axios.post(
        "http://ec2-13-41-193-30.eu-west-2.compute.amazonaws.com/user/login",
        user
      );

      if (data.message === "Successfull Login") {
        setIsLoading(false);
        localStorage.setItem("userToken", data.token);
        console.log(localStorage);
        saveUserData();
        navigate("/formDoctor");

        // Check if Doctor has a profile or not
        const profileDataUrl =
          "http://ec2-13-41-193-30.eu-west-2.compute.amazonaws.com/logged_user/profiledata";
        const profileDataResponse = await axios.get(profileDataUrl, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('userToken')
          },
        });

        if (profileDataResponse.data.detail === "Profiledata not found") {
          navigate("/formDoctor");
        } else {
          navigate("/profile");
        }
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.detail) {
        const errorMessage = error.response.data.detail;
        setErrorMessage(errorMessage); // Set the error message state
      } else {
        console.error(error);
      }
      setIsLoading(false); // Stop the loading of the button
    }
  }


  function submitloginForm(e) {
    setIsLoading(true);

    e.preventDefault();

    let validation = validateloginForm();

    if (validation.error) {
      setIsLoading(false);

      seterrorList(validation.error.details);
    } else {
      sendloginDataToApi();
    }
  }

  function validateloginForm() {
    let scheme = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string()
        .pattern(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z]{5,}[a-zA-Z\d]{3,}$/)
        .required(),
    });

    return scheme.validate(user, { abortEarly: false });
  }

  let showErrors = (inputName) => {
    let errors = errorList.filter((error) => {
      return error.message.includes(inputName);
    });

    if (errors[0] !== undefined && errors[0].message.includes("password")) {
      return (
        <div className="alert alert-danger py-1">
          Password must be 5 characters long and contain at least 3 letters
        </div>
      );
    } else if (errors[0] !== undefined) {
      return <div className="alert alert-danger py-1">{errors[0].message}</div>;
    }
  };

  // Define and bind handleBothClickslogForget
  const handleBothClickslogForget = () => {
    toggleOpenLogin(!isOpenLogin);
    toggleOpenForget();
  };

  return (
    <>
      <ForgetPassword isOpenForget={isOpenForget} toggleOpenForget={toggleOpenForget} isOpenLogin={isOpenLogin} toggleOpenLogin={toggleOpenLogin} />

      <form onSubmit={submitloginForm}>
        <div
          className={`live-demo ${isOpenLogin ? "open" : ""} mt-2  ${style.sin}`}
          id="first"
        >
          <div className={`${style.navLogin}`}>
            <div className="text-end mx-4 py-2">
              <i
                className="fa-solid fa-xmark text-white fa-lg"
                onClick={() => toggleOpenLogin()}
              ></i>
            </div>
          </div>

          <div className="user">
            <div className={`${style.content} px-3`}>
              <h2 className="text-center py-2">Log In</h2>

            
              <div
                className={`w-100 me-auto position-relative ${style.user} mt-2`}
              >
                <input
                  onChange={getUserData}
                  type="text"
                  className={`form-control w-100 ${style.formControlCustom}`}
                  placeholder="Email"
                  name="email"
                />
                <i
                  className={`fa-solid fa-envelope position-absolute ${style.iconUser}`}
                ></i>
              </div>
              {/* Validation for email */}
              {errorList.length > 0 && showErrors("email")}

              <div
                className={`w-100 me-auto position-relative ${style.user} mt-2`}
              >
                <input
                  onChange={getUserData}
                  type="password"
                  className={`form-control w-100 ${style.formControlCustom}`}
                  placeholder="Password"
                  name="password"
                />
                <i
                  className={`fa-solid fa-lock position-absolute ${style.iconUser}`}
                ></i>
                
          

              </div>
               {/* Error message */}
              {errorMessage && (
                <div className="text-danger my-1">{errorMessage}</div>
              )}
              {/* Validation for password */}
              {errorList.length > 0 && showErrors("password")}

              {/* Forget password */}
              <NavLink
                onClick={handleBothClickslogForget}
                className="text-end my-1 text-muted"
              >
                Forget your Password?
              </NavLink>

              <div className="w-75 m-auto">
                <button
                  className={`w-100 ${style.btn_log} my-4 rounded-5`}
                  type="submit"
                >
                  {isLoading === true ? (
                    <i className="fas fa-spinner fa-spin"></i>
                  ) : (
                    "Log In"
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className={`${style.otherLogin} w-100 text-center my-4`}>
            <h5>
              <span>or</span> sign in with
            </h5>
            <div className="my-2">
              <i className="fa-brands fa-facebook px-2 fa-lg"></i>
              <i className="fa-brands fa-google fa-lg"></i>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}




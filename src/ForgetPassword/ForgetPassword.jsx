import React, { useState } from 'react'
import style from './ForgetPassword.module.css'
import { Link, NavLink } from "react-router-dom";
import SendEmail from '../SendEmail/SendEmail';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';




export default function ForgetPassword({ isOpenForget, toggleOpenForget, toggleOpenLogin, isOpenLogin }) {
    const baseUrl = "http://ec2-13-41-193-30.eu-west-2.compute.amazonaws.com"
    const [errorMsgEmail, seterrorMsgEmail] = useState("")


    const [vals, setVals] = useState("")

    const backLogin = () => {
        toggleOpenLogin(!isOpenLogin);
        toggleOpenForget(!isOpenForget)
    }

    // send email
    const [isOpenSend, setIsOpenSend] = useState(true);

    function toggleOpenSend() {
        setIsOpenSend(!isOpenSend);
    }

    // fuction to handle forget and send
    const handleBothClickForgetSend = () => {
        toggleOpenForget(!isOpenForget);
        toggleOpenSend();
    };

    let validationSchema = Yup.object({
        email: Yup.string().required().email("Enter Valid Email")
    })

    let form1 = useFormik({
        initialValues: {
            email: ""
        },
        onSubmit: (vals) => {
            setVals(vals)
            console.log(vals);
            forgetPasswordApi(vals);
        },
        validationSchema
    })

    let forgetPasswordApi = async (valobj) => {


        try {

            let { data } = await axios.post(`${baseUrl}/user/forget-password`, valobj)
            console.log(data);

            if (data.message != 'Request failed with status code 400') {
                // setIsLoading(false);
                handleBothClickForgetSend();
            }
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                seterrorMsgEmail(error.response.data.detail)
                console.log(error.response.status);
                // console.log(error.response.headers);

            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        }
    }

    // console.log(vals);

    return (
        <>

            <SendEmail isOpenSend={isOpenSend} toggleOpenSend={toggleOpenSend} isOpenForget={isOpenForget} toggleOpenForget={toggleOpenForget} vals={vals} toggleOpenLogin={toggleOpenLogin} />


            <div className={`live-demo ${isOpenForget ? 'open' : ''} mt-2  ${style.sin}`} id='first' >

                <div className={style.navLogin}>
                    <div className=' mx-4 mb-0 pb-0 pt-3 d-flex justify-content-between align-items-center'>
                        <i className="fa-solid fa-circle-chevron-left text-white fa-lg text-end" onClick={backLogin}></i>
                        {/* <i className="fa-solid fa-xmark text-white fa-lg" onClick={toggleOpenForget}></i> */}
                    </div>

                </div>


                <div className="user">
                    <div className={`${style.content} px-3`}>

                        <h2 className='text-center py-4'>Forget Password</h2>


                        <form onSubmit={form1.handleSubmit}>
                            <div className={`w-100 me-auto position-relative ${style.user}`}>
                                <p>Please Enter Your Email Address To <br /> Recieve A Verification Code</p>
                                <input type="email" className={`mb-5 form-control  w-100 ${style.formControlCustom}`} placeholder='Email' name='email' onChange={form1.handleChange} />
                                <p className='text-danger'>{form1.errors.email}</p>
                                {errorMsgEmail != "" ? <div className='alert alert-danger'>{errorMsgEmail}</div> : ""}
                                <div className='w-75 m-auto'>
                                    <button className={`w-100 ${style.btn_log} my-4 rounded-5 mt-5`} >
                                        send
                                    </button>
                                </div>

                            </div>
                        </form>


                    </div>

                </div>
            </div>

        </>
    )
}

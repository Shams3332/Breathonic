import React, { useState, useEffect } from 'react'
import style from './SendEmail.module.css'
import { Link, NavLink } from "react-router-dom";
import CreateNewPass from '../CreateNewPass/CreateNewPass';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';

export default function SendEmail({ toggleOpenSend, isOpenSend, isOpenForget, toggleOpenForget, vals, toggleOpenLogin }) {
    const [errorMsgCode, seterrorMsgCode] = useState("")

    const baseUrl = "http://ec2-13-41-193-30.eu-west-2.compute.amazonaws.com"
    // console.log(vals);
    const backSend = () => {
        toggleOpenForget(!isOpenForget);
        toggleOpenSend(!isOpenSend)
    }


    // create new pass
    const [isOpenNew, setIsOpenNew] = useState(true);

    function toggleOpenNew() {
        setIsOpenNew(!isOpenNew);
    }

    // fuction to handle new and send
    const handleBothClickSendNew = () => {
        toggleOpenSend(!isOpenSend);
        toggleOpenNew();
    };

    let form1 = useFormik({
        initialValues: {
            verification_code: ""
        },
        onSubmit: (valscode) => {
            // verificationcode
            console.log(valscode);
            resetCodeApi(valscode);
        },

    })

    let resetCodeApi = async (valobj) => {
        // email
        console.log(vals.email);
        let config = {
            headers: {
                'email': vals.email
            }
        }

        try {

            let { data } = await axios.post(`${baseUrl}/user/verify-code`, valobj, config)
            console.log(data);
            console.log(data.response);


            if (data.message == 'Correct verification code') {
                // setIsLoading(false);
                handleBothClickSendNew();
            }
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.data.detail);
                seterrorMsgCode(error.response.data.detail)
                console.log(error.response.status);
                // console.log(error.response.headers);

            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        }

    }



    return (
        <>

            <CreateNewPass isOpenNew={isOpenNew} toggleOpenNew={toggleOpenNew} isOpenSend={isOpenSend} toggleOpenSend={toggleOpenSend} vals={vals} toggleOpenLogin={toggleOpenLogin} />
            <div className={`live-demo ${isOpenSend ? 'open' : ''} mt-2  ${style.sin}`} id='first' >

                <div className={style.navLogin}>
                    <div className=' mx-4 mb-0 pb-0 pt-3 d-flex justify-content-between align-items-center'>
                        <i className="fa-solid fa-circle-chevron-left text-white fa-lg text-end" onClick={backSend}></i>
                        {/* <i className="fa-solid fa-xmark text-white fa-lg" onClick={toggleOpenForget}></i> */}
                    </div>

                </div>


                <div className="user">
                    <div className={`${style.content} px-3`}>

                        <h2 className='text-center py-4'>Verify Your Email</h2>
                        <div className={`w-100 me-auto position-relative ${style.user}`}>
                            <p className=''>Please Enter The 4 digit code Sent To Your <br /> Email</p>
                            <form onSubmit={form1.handleSubmit}>
                                <div className='d-flex justify-content-evenly align-items-center'>
                                    <input type="text" name="verification_code" onChange={form1.handleChange} className={`mb-5 form-control w-25  ${style.formControlCustom}`} placeholder='&nbsp;' />
                                    {/* <input type="text" name="verification_code" onChange={form1.handleChange}  className={`mb-5 form-control  ${style.formControlCustom}`} placeholder='&nbsp;'/>
                                        <input type="text" name="verification_code" onChange={form1.handleChange} className={`mb-5 form-control  ${style.formControlCustom}`} placeholder='&nbsp;'/>
                                        <input type="text" name="verification_code" onChange={form1.handleChange} className={`mb-5 form-control  ${style.formControlCustom}`} placeholder='&nbsp;'/> */}

                                        
                                </div>
                                {errorMsgCode != "" ? <div className='alert alert-danger'>{errorMsgCode}</div> : ""}
                                <div className='w-75 m-auto'>
                                    <button className={`w-100 ${style.btn_log} my-4 rounded-5 mt-5`} >
                                        verify
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

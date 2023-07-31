import React from 'react'
import style from './CreateNewPass.module.css'
import { Link, NavLink } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';

export default function CreateNewPass({ isOpenNew, toggleOpenNew, isOpenSend, toggleOpenSend, vals, toggleOpenLogin }) {
    // console.log(vals);
    const baseUrl = "http://ec2-13-41-193-30.eu-west-2.compute.amazonaws.com"
    const backVerify = () => {
        toggleOpenSend(!isOpenSend)
        toggleOpenNew(!isOpenNew)
    }

    // with Yup
    let validationSchema = Yup.object({
        new_password: Yup.string().matches(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z]{5,}[a-zA-Z\d]{3,}$/, 'new_password must match pattern').required(),
        confirmed_password: Yup.string().oneOf([Yup.ref('new_password')], 'not match').required(),
    })

    let form1 = useFormik({
        initialValues: {
            new_password: "",
            confirmed_password: ""
        },
        onSubmit: (valscode) => {
            console.log(valscode);
            resetCodeApi(valscode);
        },
        validationSchema,

    })

    let resetCodeApi = async (valobj) => {
        console.log(vals.email);
        let config = {
            headers: {
                'email': vals.email
            }
        }

        let { data } = await axios.post(`${baseUrl}/user/reset-password`, valobj, config)
        console.log(data);

        if (data.message == 'Password reset successful.') {
            // setIsLoading(false);
            toggleOpenLogin()
            toggleOpenNew()
        }
    }


    return (
        <>

            <div className={`live-demo ${isOpenNew ? 'open' : ''} mt-2  ${style.sin}`} id='first' >

                <div className={style.navLogin}>
                    <div className=' mx-4 mb-0 pb-0 pt-3 d-flex justify-content-between align-items-center'>
                        <i className="fa-solid fa-circle-chevron-left text-white fa-lg text-end" onClick={backVerify}></i>
                        {/* <i className="fa-solid fa-xmark text-white fa-lg" onClick={toggleOpenForget}></i> */}
                    </div>

                </div>


                <div className="user">
                    <div className={`${style.content} px-3`}>

                        <h2 className='text-center py-4'>Forget Password</h2>

                        <form onSubmit={form1.handleSubmit}>

                            <div className={`w-100 me-auto position-relative ${style.user}`}>
                                <p>Your NewPassword Must Be Different <br /> From Previously Used Password</p>

                                {/* nwe password */}
                                <input type="password" onBlur={form1.handleBlur}  onChange={form1.handleChange} className={` form-control w-100 ${style.formControlCustom}`} placeholder="new_password" name="new_password" value={form1.values.new_password} />

                                {form1.errors.new_password && form1.touched.new_password ? <div className="alert alert-danger">{form1.errors.new_password}</div> : null}

                                {/* confirmed_password */}
                                <input type="password" onBlur={form1.handleBlur} onChange={form1.handleChange} className={` my-3 form-control w-100 ${style.formControlCustom}`} placeholder="confirmed_password" name="confirmed_password" value={form1.values.confirmed_password} />

                                {form1.errors.confirmed_password && form1.touched.confirmed_password ? <div className="alert alert-danger">{form1.errors.confirmed_password}</div> : null}

                            </div>
                            <div className='w-75 m-auto'>
                                <button className={`w-100 ${style.btn_log} my-4 rounded-5 mt-5`} >
                                    Save
                                </button>
                            </div>
                        </form>


                    </div>

                </div>
            </div>
        </>
    )
}

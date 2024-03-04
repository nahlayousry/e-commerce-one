import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
export default function Forgetpass() {

    let validationsc=Yup.object({
        email:Yup.string().email("Email not valid").required("Email is required"),
    })

    function sendcode(valus){

    }
    let formik= useFormik({
        initialValues:{
            email:''
        },
        validationSchema:validationsc,
        onSubmit:sendcode
    })

  return (
    <div className='container'>
        <h3 className='text-center'>Forget passs....</h3>
        <form onSubmit={formik.handleSubmit} className='w-75 mx-auto my-5'>
            
            <label htmlFor='email'>Enter Your Email</label>
            <input value={formik.values.email} onChange={formik.handleSubmit}   type='email' id='email' name='email' className='form-control'/>
            {/* {formik.errors.email && formik.touched.email ?(
            <div className='alert alert-danger'>
                {formik.errors.email}
                {" "}
            </div>
            ):null} */}
            <button className='btn bg-main text-light my-3'>Send Code</button>
        </form>
    </div>
  )
}

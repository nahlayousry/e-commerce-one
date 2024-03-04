import React, { useState } from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

    let navigate= useNavigate()

    const [getError,seterror]=useState("");
    const [isloading,setloading] =useState(false)

async function callregister(datac){
    seterror("");
    setloading(true)
    let {data}  =await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',datac)
    .catch(err=> {
        setloading(false)
        seterror(err.response.data.message)})
        
    console.log(data);
 
    if(data.message=='success'){
        navigate('/login')
    }
    
    }

const validationYup=Yup.object({
    name: Yup.string().min(3,"Name is to short").max(10,"name is to long").required("name is required"),
    email:Yup.string().email("Email not valid").required("Email is required"),
    password:Yup.string().matches(/^[A-Z][a-z0-9]{3,8}$/ ,"invlid password").required("pass is required"),
    rePassword:Yup.string().oneOf([Yup.ref('password')], "password noyt match").required("required repass"),
    phone:Yup.string().matches(/^01[0125][0-9]{8}$/ ,"inalid phone").required("phone is required")


})

const reg = useFormik({
    initialValues:{
        name: "",
        email:"",
        password:"",
        rePassword:"",
        phone:""
    },
    validationSchema :validationYup,
    onSubmit:callregister,

})

  return (
    <>
    <div className='w-50 mx-auto '>
        <h2 className='mb-5'>Register form</h2>
        {getError ?<div className='alert alert-danger'>{getError}</div> :null}
        
        <form onSubmit={reg.handleSubmit}>
        <div className='form-group mb-2'>
                <label htmlFor='fullname'>Fullname</label>
                <input type='text' id='fullname'className='form-control' name='name' value={reg.values.name} onChange={reg.handleChange} onBlur={reg.handleBlur}/>
            {reg.errors.name && reg.touched.name ?(
            <div className='alert alert-danger'>
                {reg.errors.name}
                {" "}
            </div>
            ):null}
            </div>

            <div className='form-group mb-2'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email'className='form-control' name='email'value={reg.values.email} onChange={reg.handleChange} onBlur={reg.handleBlur}/>
                {reg.errors.email && reg.touched.email ?(
            <div className='alert alert-danger'>
                {reg.errors.email}
                {" "}
            </div>
            ):null}
            </div>

            <div className='form-group mb-2'>
                <label htmlFor='password'>password</label>
                <input type='password' id='password'className='form-control' name='password' value={reg.values.password} onChange={reg.handleChange} onBlur={reg.handleBlur}/>
                {reg.errors.password && reg.touched.password ?(
            <div className='alert alert-danger'>
                {reg.errors.password}
                {" "}
            </div>
            ):null}
            </div>

            <div className='form-group mb-2'>
                <label htmlFor='repassword'>repassword</label>
                <input type='password' id='repassword'className='form-control' name='rePassword' value={reg.values.rePassword} onChange={reg.handleChange} onBlur={reg.handleBlur}/>
                {reg.errors.rePassword && reg.touched.rePassword ?(
            <div className='alert alert-danger'>
                {reg.errors.rePassword}
                {" "}
            </div>
            ):null}
            </div>

            <div className='form-group mb-2'>
                <label htmlFor='phone'>phone</label>
                <input type='tel' id='phone'className='form-control' name='phone' value={reg.values.phone} onChange={reg.handleChange} onBlur={reg.handleBlur}/>
                {reg.errors.phone && reg.touched.phone ?(
            <div className='alert alert-danger'>
                {reg.errors.phone}
                {" "}
            </div>
            ):null}
            </div>
            <button type='submit' className='btn bg-info text-white d-block ms-auto' disabled={!(reg.isValid && reg.dirty)}>
                {isloading ? <i className='fa fa-spinner fa-spin'></i>: 'Register'}
            </button>
        </form>
    </div>
    </>
  )
}

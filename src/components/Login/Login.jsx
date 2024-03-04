 import React, { useContext, useState } from 'react'

import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Tokencontext } from '../../Context/Token';





 export default function Login() {
   
    let navigate= useNavigate()
    const [getError,seterror]=useState("")
    const [isloading,setloading] =useState(false)
    let{setToken}=useContext(Tokencontext)

async function callLogin(datac){
    seterror("");
    setloading(true)
    let {data}  =await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',datac)
    .catch(err=> {
        setloading(false)
        seterror(err.response.data.message)})
        
    if(data.message=='success'){
        localStorage.setItem("userToken",data.token)
        setToken(data.token)
        navigate('/Home')
    }
    }

const validationYup=Yup.object({
    email:Yup.string().email("Email not valid").required("Email is required"),
    password:Yup.string().matches(/^[A-Z][a-z0-9]{3,8}$/ ,"invlid password").required("pass is required"),

})

const logForm = useFormik({
    initialValues:{
        email:"",
        password:"",
        
    },
    validationSchema :validationYup,
    onSubmit:callLogin,

})

  return (
    <>
    <div className='w-50 mx-auto '>
        <h2 className='mb-5'>Login now</h2>
        {getError ?<div className='alert alert-danger'>{getError}</div> :null}
        
        <form onSubmit={logForm.handleSubmit}>

            <div className='form-group mb-2'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email'className='form-control' name='email'value={logForm.values.email} onChange={logForm.handleChange} onBlur={logForm.handleBlur}/>
                {logForm.errors.email && logForm.touched.email ?(
            <div className='alert alert-danger'>
                {logForm.errors.email}
                {" "}
            </div>
            ):null}
            </div>

            <div className='form-group mb-2'>
                <label htmlFor='password'>password</label>
                <input type='password' id='password'className='form-control' name='password' value={logForm.values.password} onChange={logForm.handleChange} onBlur={logForm.handleBlur}/>
                {logForm.errors.password && logForm.touched.password ?(
            <div className='alert alert-danger'>
                {logForm.errors.password}
                {" "}
            </div>
            ):null}
            </div>

            <button type='submit' className='btn bg-info text-white d-block ms-auto'>
                {isloading ? <i className='fa fa-spinner fa-spin'></i>: 'Login'}
            </button>
            <Link to='/signup'> go to register now</Link>
            <br/>
            <Link to='/forgetpass'> forget passs</Link>
        </form>
    </div>
    </>
  )
 }
 
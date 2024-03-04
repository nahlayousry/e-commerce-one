import axios from 'axios';
import React, { useContext, useState } from 'react'
import { cartContext } from '../../Context/Cart';
import { useNavigate } from 'react-router-dom';

export default function Payment() {

    const [city,setCity]= useState("");
    const [phone,setphone]= useState("")
    const [details,setdetails]= useState("");
    const nav =useNavigate()
    const{cartid,setproducts,setitem,settotal} = useContext(cartContext)

    async function cashPayment(){
        
        let formdata={
            shippingAddress:{
                details: details,
                phone: phone,
                city: city
                }
        }
        
        try {
            let {data} =await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartid}`,formdata,
            {
                headers:{token:localStorage.getItem('userToken')}
            }
            );
            if(data.status=="success"){
                 setitem(0);
                 settotal(0);
                 setproducts([])
                 nav("/allorder")
            }
        } catch (error) {
            console.log(error)
        }
   


    }

    async function onlinePayment(){
        let formdata={
            shippingAddress:{
                details: details,
                phone: phone,
                city: city
                }
        }
        try {

            let {data} =await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartid}`,formdata,
            {
                headers:{token:localStorage.getItem('userToken')},
                params:{
                    url:"http://localhost:3000"
                }
            })
        if(data.status== "success"){
            window.open(data.session.url)

        }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='w-50 m-auto'>
        
            <label htmlFor='city'>City</label>
            <input onChange={(e)=>{setCity(e.target.value)}} type='text' id='city' className='form-control my-3'/>

            <label htmlFor='phone'>Phone</label>
            <input onChange={(e)=>{setphone(e.target.value)}} type='tel' id='phone' className='form-control my-3'/>

            <label htmlFor='details'>Details</label>
            <textarea  onChange={(e)=>{setdetails(e.target.value)}} id='details' className='form-control my-3'></textarea>

            <button onClick={cashPayment} className='btn btn-info w-100 my-3'>Cash</button>
            <button onClick={onlinePayment} className='btn btn-warning w-100'> online payment</button>
        

    </div>
  )
}

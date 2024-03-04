import axios from 'axios'
import React from 'react'
import { CirclesWithBar } from 'react-loader-spinner'
import { useQuery } from 'react-query'

export default function Brands() {

    async function getbrands(){
    return await  axios.get('https://ecommerce.routemisr.com/api/v1/brands')
    }

    let {data,isFetched,isLoading }=useQuery('brands',getbrands);
    console.log(data?.data.data)
  return (
    <div className='container pt-3  '>
        <h1 className='text-center text text-main'>All Brands</h1>
    <div className='row'>
        
        {
           !isLoading?
        <> 
        {
            data?.data.data.map((brand)=>{
                return <div className='col-md-3'>
                    <img className='w-100' src={brand.image} alt=''/>
                    <p className='text-center'> {brand.name}</p>
                </div>
            })
        }
        </>
        :
        <div className='vh-100 d-flex justify-content-center align-items-center'>
            <CirclesWithBar
          height="100"
          width="100"
          color="#4fa94d"
          outerCircleColor="#4fa94d"
          innerCircleColor="#4fa94d"
          barColor="#4fa94d"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          /> 
           </div>
        }
        
    </div>
    </div>
  )
}

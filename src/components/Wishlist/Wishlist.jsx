import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { favouContext } from '../../Context/Favourite'

export default function Wishlist() {
 
   const {products}=useContext(favouContext)

  
console.log(products)

  return  <> 
    <div style={{background:"#eee"}} className='container my-5'>
      <h2>My Wishlist</h2>
      <> 
      {products?.map(product=> {return <div className="row align-items-center border-bottom border-1 py-2 g-3 pb-2">
        <div className='col-md-3'>
          <img/>
        </div>
        <div className='col-md-6'>
          <h4></h4>
          <p></p>
          <button className='btn btn-danger'>Remove</button>
        </div>
        <div className='col-md-3'>
          <button className='btn btn-info'>Add to cart</button>
        </div>
      </div>
        
})}
           
      </>
      
    </div>
    </>
}

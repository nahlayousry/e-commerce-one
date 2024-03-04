import React, { useContext } from 'react'
import { cartContext } from '../../Context/Cart'
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function Cartp() {

   const {clearItem,numitem,totalprice,products,deletproduct,updateCount}= useContext(cartContext);

   async function removeItem(id){
    let res= await deletproduct(id)
    if(res.status=='success'){

        toast.success("Item remove",{
          duration:2000,
          position:"top-right",
          
        })
      }
   }

   async function update(id ,count){
    const res= await updateCount(id ,count)

    if(res.status=='success'){

        toast.success("count update success",{
          duration:2000,
          position:"top-right",
          
        })
      }
   }

   async function clears(){
    await clearItem()
    
   }

   if(products.length==0){
    return (
<>
<div className='vh-100 d-flex justify-content-center align-items-center'>

    <h1>No Data Cart Empty</h1>
</div>

</>
    )
   }
  return (
    <> 
    <div style={{backgroundColor:"#eee"}} className='container py-5 mt-4'>
       
       <div className='d-flex justify-content-between align-items-center py-3'>
       <h2>Cart Shop</h2>
       <Link to={'/payment'} className=' btnb border-1 my-3 btn btn-primary '>Check Out</Link>
       </div>
        <h3 className='text-success  '><span className='text-dark'>Total </span>{totalprice}</h3>
<> 
        {products?.map(product=>
        
        <div className='row align-items-center border-bottom border-1 g-3 pb-3'>
            <div className='col-sm-1'>
                <img src={product.product.imageCover} className='w-100'/>
            </div>
            <div className='col-sm-8'>
                <h3>{product.product.title}</h3>
                <p>{product.price}</p>
                <button onClick={()=>{removeItem(product.product.id)  }} className='btn btn-danger'>Remove</button>
            </div>
             <div className='col-sm-3'>
             <div className='d-flex align-items-center'>
                <button onClick={()=>{ update(product.product.id,product.count +1)}} className='btn btn-outline-success'>+</button>
                <span className='mx-2'>{product.count}</span>

                {product.count<=0 ?(<button 
                onClick={()=>{removeItem(product.product.id)}} 
                className='btn btn-outline-danger'>-</button>):(
                    <button 
                onClick={()=>{ update(product.product.id,product.count -1)}} 
                className='btn btn-outline-danger'>-</button>
                )
                }
                 
            </div>
             </div>
        </div>
        )}
        
        </>
            <button onClick={clears} className='d-block m-auto btnb border-1 my-3 '>Clear Cart</button>
    </div>
    </>
  )
}

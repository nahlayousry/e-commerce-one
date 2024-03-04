import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { countercontext } from '../../Context/Counter'
import { Tokencontext } from '../../Context/Token'
import { cartContext } from '../../Context/Cart'
// import logo from '../../Assets/images/freshchart-logo.svg'
import logoo from '../../Assets/images/logo.svg'

export default function NavBar() {
const {numitem}=useContext(cartContext)
let navcont=  useContext(countercontext)
let {Token,setToken}= useContext(Tokencontext)
let navg =useNavigate()
    // console.log(navcont);

    function logout(){
      localStorage.removeItem("userToken");
      setToken(null)
      navg("/login")
    }

  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand" to={'home'}><img src={logoo}/></Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {Token? <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li  className="nav-item">
         <Link className="nav-link" to={'home'}>Home</Link>
       </li>

       <li  className="nav-item">
         <Link className="nav-link" to={'cart'}>Cart
         
         </Link>
       </li>

       <li  className="nav-item">
         <Link className="nav-link" to={'wishlist'}>Wishlist
         
         </Link>
       </li>

       <li  className="nav-item">
         <Link className="nav-link" to={'category'} >Category</Link>
       </li> 

       <li  className="nav-item">
         <Link className="nav-link" to={'allorders'} >Allorder</Link>
       </li> 

       <li  className="nav-item">
         <Link className="nav-link"to={'brands'} >brands</Link>
       </li> 

       <li  className="nav-item">
         <Link className="nav-link"to={'products'} >products</Link>
       </li> 

       

       
     </ul>:null}
      

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
     

       {Token ?  <div className='d-flex align-items-center'><li  className="nav-item">
          <button className="nav-link" onClick={logout}  >Logout</button>
        </li>
        <li className='position-relative'>
          <i className="fa-solid fa-cart-shopping"> <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {numitem}
        <span className="visually-hidden">unread messages</span>
      </span></i></li>
        </div>
        :<>
        <li  className="nav-item">
          <Link className="nav-link" to={'signup'}>Signup</Link>
        </li> 

        <li  className="nav-item">
          <Link className="nav-link" to={'login'}>Login</Link>
        </li> 
        
        </>}
      </ul>
      
    </div>
  </div>
</nav> 


    </div>
  )
}

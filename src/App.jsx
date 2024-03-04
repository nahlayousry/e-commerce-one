
import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import News from './components/News/News';
import NavBar from './components/NavBar/NavBar';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Signup from './components/SignUp/Signup';
import Login from './components/Login/Login';
import Tokenprovider, { Tokencontext } from './Context/Token';
import NotFound from './components/Notfound/NotFound';
import { useContext, useEffect } from 'react';
import Protectrout from './components/protectRout/Protectrout';
import Products from './components/Products/Products';
import Productdetail from './components/ProductDetail/Productdetail';
import Brands from './components/Brands/Brands';
import CartProvider from './Context/Cart';
import Cartp from './components/cartp/Cartp';
import Category from './components/Category/Category';
import Payment from './components/Payment/Payment';

import Forgetpass from './components/Forgetpass/Forgetpass';
import Allorder from './components/Allorder/Allorder';
import Wishlist from './components/Wishlist/Wishlist';


function App() {
  let {setToken}= useContext(Tokencontext)

  let rout =createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      
      {path:'news',element:<Protectrout><News/></Protectrout>  },
      {path:'Navbar',element:<Protectrout><NavBar/></Protectrout>},
      {path:"home",element:<Protectrout><Home/></Protectrout>},
      {path:"brands",element:<Protectrout><Brands/></Protectrout>},
      {path:"cart",element:<Protectrout><Cartp/></Protectrout>},
      {path:"wishlist",element:<Protectrout><Wishlist/></Protectrout>},
      
      {path:"payment",element:<Protectrout><Payment/></Protectrout>},
      
      {path:"forgetpass",element:<Forgetpass/>},
      {path:"category",element:<Protectrout><Category/></Protectrout>},
      {path:"allorders",element:<Protectrout><Allorder/></Protectrout>},
      {path:"products",element:<Protectrout><Products/></Protectrout>},
      {path:'productDetail/:id',element:<Protectrout><Productdetail/></Protectrout>},


      {path:"signup",element:<Signup/>},
      {path:"login",element:<Login/>},
      

      {path:"*",element:<NotFound/>}
      
    ]}
  ])


useEffect(()=>{

  if(localStorage.getItem("userToken")!= null){
    setToken(localStorage.getItem("userToken"))
  }

},[])

  return <CartProvider>
     <RouterProvider router={rout}>
        
</RouterProvider>
  </CartProvider>
   

}

export default App;

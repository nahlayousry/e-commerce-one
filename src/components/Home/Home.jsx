import React from 'react'
import Mainslider from '../Mainslider/Mainslider'
import Categslider from '../Categslider/Categslider'
import {Helmet} from 'react-helmet';
import {CirclesWithBar} from 'react-loader-spinner'
import Products from '../Products/Products';
export default function Home() {
  return (
    <>

  <Helmet>
        <title>Home page</title>

    </Helmet>

    {/* <CirclesWithBar
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
  /> */}
    <Mainslider/>
    <Categslider/>
    <Products/>
    
    </>
  )
}

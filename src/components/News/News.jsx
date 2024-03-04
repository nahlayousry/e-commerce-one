import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function News() {

    const[newlist,setnews]=useState([])


async function getNews(){
    let {data}=await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6f01246e62b040998b84c03479630b72')
    setnews(data.articles)
    console.log(data.articles)
}

useEffect(()=>{
    getNews()

},[])

    return (
    <div className='container'>
        {newlist.map((artic)=>{
            return <div className='col-md-3'>
                <img src={artic.urlToImage} alt='logo' width="100"/>




            </div>

        }
        )}
    </div>
    )   
  }
  



import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './index.css';

import App from './App';
import CounterContextProvider from './Context/Counter';
import Tokenprovider from './Context/Token';
import {QueryClient, QueryClientProvider} from 'react-query'
import {Toaster} from 'react-hot-toast'
import FavouriteProvider from './Context/Favourite';



const root = ReactDOM.createRoot(document.getElementById('root'));
let que =new QueryClient()
root.render(


  <QueryClientProvider client={que}> 
  <FavouriteProvider> 
    <React.StrictMode>
      <Toaster/>
    <CounterContextProvider>
      <Tokenprovider> 
    <App />
    </Tokenprovider>
    </CounterContextProvider>
  </React.StrictMode>
   </FavouriteProvider>
  
  </QueryClientProvider>
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


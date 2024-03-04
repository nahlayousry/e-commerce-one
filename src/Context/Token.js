import { createContext, useState } from "react";



export let Tokencontext=  createContext()

export default function Tokenprovider(prop){

    let b = 50
    const [Token,setToken]=useState(null)
    return <Tokencontext.Provider value={{Token,setToken}}>
        {prop.children}
    </Tokencontext.Provider>
}
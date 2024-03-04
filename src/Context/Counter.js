import { createContext, useState } from "react";

export let countercontext = createContext()


export default function CounterContextProvider(prop){

    const [Counter ,setcounter] =useState(10)

    return <countercontext.Provider value={Counter}>
        {prop.children}
    </countercontext.Provider>

}
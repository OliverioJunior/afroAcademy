import React,{createContext, useState} from "react";

type PropsUserContext = {
    scrool: number;
    OffSetContact: number;
    setScrool: React.Dispatch<React.SetStateAction<number>>;
    OffSetTech: number;
    setOffSetTech:  React.Dispatch<React.SetStateAction<number>>;
    setOffSetContact:  React.Dispatch<React.SetStateAction<number>>;
}
type children = {
    children: React.ReactNode
}

const DEFAULT_VALUE = {
    scrool: 0,
    setScrool: ()=>{},
    OffSetTech: 0,
    setOffSetTech: ()=>{},
    OffSetContact: 0,
    setOffSetContact: ()=>{}
}


export const AuthContext = createContext<PropsUserContext>(DEFAULT_VALUE);

export const AuthProvider = ({children}:any) =>{

    const [scrool, setScrool] = useState(DEFAULT_VALUE.scrool)
    const [OffSetTech, setOffSetTech] = useState(0)
    const [OffSetContact, setOffSetContact] = useState(0)
    return(
        <AuthContext.Provider value={{scrool, setScrool, OffSetTech, setOffSetTech, OffSetContact, setOffSetContact}}>
            {children}
        </AuthContext.Provider>
    )
}
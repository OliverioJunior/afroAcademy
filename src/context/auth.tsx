import React,{createContext, useState} from "react";

type PropsUserContext = {
    scrool: number;
    setScrool: React.Dispatch<React.SetStateAction<number>>
}

const DEFAULT_VALUE = {
    scrool: 0,
    setScrool: () => {}
}

export const AuthContext = createContext<PropsUserContext>(DEFAULT_VALUE);

export const AuthProvider = (children: any) =>{

    const [scrool, setScrool] = useState(DEFAULT_VALUE.scrool)

    return(
        <AuthContext.Provider value={{scrool, setScrool}}>
            {children}
        </AuthContext.Provider>
    )
}
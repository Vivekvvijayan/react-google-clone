import { useState,createContext } from "react";

export const AuthContext = createContext({})


const Context = ({ children }) => {
    
    const [auth,setAuth] = useState(false)
    const [user,setUser] = useState({})
   

    return(
    <AuthContext.Provider value={{auth,setAuth,user,setUser}}>
        
        {children}

    </AuthContext.Provider>
    )
}

export  default Context
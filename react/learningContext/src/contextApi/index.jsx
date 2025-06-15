import { createContext, useState } from "react";

export const UserContext = createContext()

export function UserProvider({children}){
    const [user, setUser] = useState({
        name: "",
        age: 20,
        email: "john@gmail.com"
    })
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
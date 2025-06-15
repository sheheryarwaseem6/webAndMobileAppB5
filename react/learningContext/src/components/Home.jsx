import { useContext, useState } from "react"
import { UserContext } from "../contextApi"

export default function Home(){
    const {user, setUser} = useContext(UserContext)
    const [value, setValue] = useState(user.name)
    return(
        <>
            <input type="text" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})}/>
            <button onClick={() => setUser({...user, name: value})}>Save Name</button>
            <h1>my homepage</h1>
            {user.name}
            {user.age}
            {user.email}
        </>
    )
}
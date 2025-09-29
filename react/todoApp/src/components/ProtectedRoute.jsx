import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export function ProtectedRoute({children}){
    const [loading, setLoading] = useState(true)
    const [isAuth, setIsAuth] = useState(false)
    const navigate = useNavigate()

    const checkUser = async ()=>{
        console.log("here")
        const response = await fetch('http://localhost:3002/auth/me', {
            method: "GET",
            credentials : 'include'
        })
        console.log(response, " response1")
        if(response.ok){
            console.log(response, "response2")
            setIsAuth(true)
            setLoading(false)
            return response
        }else{
            setLoading(false)
            return null
        }
    }


    useEffect( ()=>{
        checkUser()
    },[])

    if(loading) return <div> loading...</div>
    if(!isAuth){
        return navigate('/login')
    }
    return children;
}
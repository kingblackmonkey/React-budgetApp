import React from "react"
import {authenticate} from '../firebase/authenticate'
const Login = ()=>{
    return (
        <div>
            <h1>Login Page</h1>
            <button 
                onClick = {()=>{
                    authenticate();
                }}
                
                
                >Login</button>
        </div>
    )
}

export default Login 
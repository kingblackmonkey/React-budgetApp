import React from "react"
import Menu from './Menu'
import {Route} from 'react-router-dom'
const PrivateRoute = ({component: Component, ...rest})=>{
   
   
    return (
        <div>
             <Menu />
             <Route {...rest} component = {Component} />
        </div>
       


    )
}

export default PrivateRoute
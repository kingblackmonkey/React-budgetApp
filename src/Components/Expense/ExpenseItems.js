import React from 'react';
import { NavLink } from 'react-router-dom'
import format from '../../manipulateData/formatDate'
const ExpenseItem = ({id, des,amount, timeCreatedAt})=>{
  

    return (

        <li >
            <div >${amount/100}</div>
            <div >{des} on {format( timeCreatedAt)}</div> 

            <div >
            <NavLink to = {`/editExpense/${id}`} >
                <button 
                >
                    Edit Or Remove
                </button>
            </NavLink>
                
            </div>                     
        </li>
        
    )
} 
  export default ExpenseItem
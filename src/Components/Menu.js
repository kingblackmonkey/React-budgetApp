import React from 'react';
import { NavLink } from 'react-router-dom';
import {signOut} from '.././firebase/authenticate'
const Menu = ()=>{
    return (
        <header>
            <div>
            <ul>
                <li>
                    <NavLink  exact to="/dashBoard" >DashBoard</NavLink>
                </li>
                <li>
                    <NavLink to="/addIncome" >Add Income</NavLink>
                </li>
                <li>
                    <NavLink to="/addExpense" >Add Expense</NavLink>
                </li>
               <li>
                   <button onClick={()=>{
                       signOut();
                   }}
                   >Log Out</button>
               </li>
            </ul>
            </div>
        </header>
    )
}

export default Menu
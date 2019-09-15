import React from 'react';
import WrapperIncome from '../Components/Income/Income'
import WrapperExpense from '../Components/Expense/Expense'
import Budget from '../Components/Budget'

const DashBoard = ()=>{
   
    return(
        <div>
            <div>
       
                <h1>
                    DashBoard
                </h1>
            </div>
            <div>
                <Budget/>
                             
            </div>
            <div>
                <WrapperIncome/>
                <WrapperExpense/>
            </div>            

        </div>
    )
}

export default DashBoard
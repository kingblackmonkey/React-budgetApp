import React from 'react';
import { connect } from 'react-redux';
import totalize from '../manipulateData/totalize'
import  totalizeBudget from '../manipulateData/totalizeBudget'
const Budget= (props)=>{
   
    return (
        <div>
            <h2>
            Budget
            
            </h2>
            <h5>
               $ {props.budget} {props.budget < 0 && <span>NEGATIVE</span>}            
            </h5>
            <h5>
                Income $ <span>{props.totalIncome/100}</span>                    
            </h5>
            <h5>
                Expense $ <span>{props.totalExpense/100}</span>                    
            </h5> 
        </div>
    )
}


const mapStateToProps = (state)=>{
    return  {
       budget: totalizeBudget(state.income, state.expenses),
       totalIncome: totalize(state.income),
       totalExpense: totalize(state.expenses),

    }

}
    
 

export default  connect(mapStateToProps)(Budget) 
import React from 'react';
import Form from '../Form'
import {connect} from 'react-redux'
import {  editIncomeActionThunk,  removeIncomeActionThunk} from '../../reduxStore/actions/income'
const EditIncome = (props)=>{
  

    return (

        <div>
            <h1>Edit Or Remove Your Income </h1>
            <Form 
            income = {props.income}
           
            handleSubmit = {(income)=>{
                props. editIncomeActionThunk({...props.match.params, ...income});
                props.history.push('/dashBoard');   
             }} 
             />
             <button 
             onClick = {()=>{
                props.removeIncomeActionThunk(props.income.id); 
                props.history.push('/dashBoard');  
             }}             
             >
                Remove Income
            </button>
        </div>
        
        
    )
} 

const mapStateToProps = (state, ownProps)=>{
    return {
        income : state.income.find((item)=>{
            return item.id === ownProps.match.params.id
        })
    }
}

const mapDispatchToProps = {
    editIncomeActionThunk,
    removeIncomeActionThunk
}
  export default connect(mapStateToProps, mapDispatchToProps)(EditIncome)
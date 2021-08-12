import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './Expense.Date';
function ExpenseItem(props) {
   
  
    const [title,setTitle]=useState(props.title);

    const clickhandler=()=>{

        setTitle("updated");
        console.log(title);

    }
    

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item_description">
                <h2>{title}</h2>
                <div className="expense-item_price">${props.amount}</div>
            <button onClick={clickhandler}>change title</button>
            </div> 
        </div>
    )
}
export default ExpenseItem;
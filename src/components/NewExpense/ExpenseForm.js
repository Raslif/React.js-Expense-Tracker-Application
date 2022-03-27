import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [userInputs, setInputs] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    let titleChangeHandler = (event) => {
        /* Use this approach when our state values update will happen based on previous state values */
        setInputs((prevState) => {
            return { ...prevState, enteredTitle: event.target.value };
        });
    }

    let amountChangeHandler = (event) => {
        setInputs({
            ...userInputs,
            enteredAmount: event.target.value
        });
    }

    let dateChangeHandler = (event) => {
        setInputs({
            ...userInputs,
            enteredDate: event.target.value
        });
    }

    let expenseSubmitHandler = (event) => {
        /* disable the default form submission */
        event.preventDefault();

        let expenseData = {
            title: userInputs.enteredTitle,
            amount: userInputs.enteredAmount,
            date: new Date(userInputs.enteredDate)
        };

        setInputs({ enteredTitle: '', enteredAmount: '', enteredDate: '' });
        props.onSaveExpenseData(expenseData);
    }

    return (
        <form onSubmit={expenseSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={userInputs.enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={userInputs.enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={userInputs.enteredDate} min='2022-03-01' max='2022-03-27' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
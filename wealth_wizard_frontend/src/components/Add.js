import React, { useState } from "react";

const Add = (props) => {
    // Define the initial empty state for the expense object
    const emptyExpense = { transaction: '', amount: '' }
    // Define the expense state and set its initial value to the empty state
    const [expense, setExpense] = useState(emptyExpense)

    // Define a function to handle changes to the form inputs
    let handleChange = (event) => {
        // Update the expense state by spreading the previous expense object and setting the new value for the input field being changed
        setExpense({ ...expense, [event.target.name]: event.target.value })
    }

    // Define a function to handle form submission
    const handleSubmit = (event) => {
        // Prevent the default form submission behavior
        event.preventDefault()
        // Call the handleCreate function passed down through props with the current expense state as an argument
        props.handleCreate(expense)
        // Set the expense state back to the empty state after the form is submitted
        setExpense(emptyExpense)  
    }
    
    return (
        <>
          <div className=''>
            <h2 className='app-header'>Add Transaction</h2>
            <form onSubmit={handleSubmit}>
              <div className="row d-flex">
                <div className="">
                  <label className="form-label" htmlFor="transaction">Transaction </label>
                  <input 
                    className="form-control" type="text" 
                    name="transaction" 
                    required 
                    value={expense.transaction} 
                    onChange={handleChange} />
                </div>
                <div className="col-md-1 mt-1">
                  <label className="form-label" htmlFor="amount">Amount $</label>
                  <input 
                    className="form-control" 
                    name="amount" 
                    required 
                    type="number" 
                    min="0"
                    value={expense.amount} 
                    onChange={handleChange} />
                </div>
                <div className="mt-2">
                  <input
                    className="btn btn-light"
                    type="submit"
                    value="Submit" />
                </div>
              </div>
            </form>
          </div> 
        </>
  )
}

export default Add
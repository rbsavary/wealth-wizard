import React, { useState } from "react";

const Add = (props) => {
    const emptyExpense = { transaction: '', amount: '' }
    const [expense, setExpense] = useState(emptyExpense)

    let handleChange = (event) => {
        setExpense({ ...expense, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(expense)  
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
                <div className="col-md-1">
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
                <div className="mt-3">
                  <input
                    className="btn btn-primary"
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
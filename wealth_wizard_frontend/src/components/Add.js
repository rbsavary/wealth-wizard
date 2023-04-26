import React, { useState } from "react";

const Add = (props) => {
    const emptyExpense = { transaction: '', date: '', amount: '' }
    const [expense, setExpense] = useState(emptyExpense)

    const handleChange = (event) => {
        setExpense({ ...expense, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(expense)
       
    }

    return (
        <>
          <div className='pb-3'>
            <h2 className='app-header'>Add Expenditure</h2>
            <form onSubmit={handleSubmit}>
                <div className="row d-flex">
                    <div className="">
                        <label className="form-label" htmlFor="name">Transaction</label>
                        <input 
                        className="form-control" type="text" 
                        name="name" 
                        required 
                        value={expense.name} 
                        onChange={handleChange}/>
                    </div>
                    <div className="col-md-1">
                        <label className="form-label" htmlFor="time_to_complete">Amount</label>
                        <input 
                        className="form-control" name="time_to_complete" 
                        required 
                        type="number" 
                        id="timeInput" 
                        step="1" 
                        min="0" 
                        value={expense.time_to_complete} 
                        onChange={handleChange}/>
                    </div>
                    <div className="ml-3">
                    <input
                        className="btn btn-primary"
                        type="submit"
                        value="Submit"/>
                    </div>
                </div>
            </form>
        </div> 
        </>
)
}

export default Add
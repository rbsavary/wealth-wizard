import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// Defines component named Edit and taking props as an argument
const Edit = (props) => {
  
  // Define a state hook with the expense object passed from props
  const [expense, setExpense] = useState({ ...props.expense })

  // Define a state hook for showing/hiding the modal
  const [show, setShow] = useState(false)

  // Define a function to close the modal
  const handleClose = () => setShow(false)

  // Define a function to show the modal
  const handleShow = () => setShow(true)

  // Define a function to handle changes to form inputs
  const handleChange = (event) => {
    setExpense({ ...expense, [event.target.name]: event.target.value })
  }
  
  // Define a function to handle form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior 
    event.preventDefault()
    // Call the handleUpdate function from props with the updated expense data
    props.handleUpdate(expense)
  }

  return (
    <>
      <div className='p-3'>
      <Button onClick={handleShow} variant="light" size="sm">Edit</Button>
      </div>
      <Modal className='modal' show={show}  onHide={handleClose}> 
        <div className='modal-header' closeButton>
          <h3 className='align-center text modal-title'>Edit Expenditure</h3>
        </div>
        <div className='modal-body'>
          <form className='mb-3' onSubmit={handleSubmit}>
            <div className="col-md-12 mb-3">
              <label 
                className="form-label" 
                htmlFor="date">Date</label>
              <input 
                id="dateInput"
                className="form-control" 
                type="text" 
                name="date" 
                required 
                value={expense.date} 
                onChange={handleChange}/>
            </div>
            <div className="col-md-12 mb-3">
              <label 
                className="form-label" 
                htmlFor="transaction">Transaction</label>
              <input 
                className="form-control" 
                type="text" 
                name="transaction" 
                required 
                value={expense.transaction} 
                onChange={handleChange}/>
            <div className="col-md-12 mb-3">
              <label 
                className="form-label" 
                htmlFor="amount">Amount</label>
              <input 
                className="form-control" 
                type="text" 
                name="amount" 
                required 
                value={expense.amount} 
                onChange={handleChange}/>
            </div>
            <div className='modal-footer'>
              <button className='btn btn-secondary' onClick={handleClose}>Close</button>
              <input
                className="btn btn-primary"
                type="submit"
                value="Update"
                onClick={handleClose}/>
            </div>
           </div> 
          </form>  
        </div>  
      </Modal>
    </>
  )
}

export default Edit
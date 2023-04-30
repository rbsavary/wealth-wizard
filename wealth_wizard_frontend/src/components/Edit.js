import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Edit = (props) => {
  
  const [expense, setExpense] = useState({ ...props.expense })

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleChange = (event) => {
    setExpense({ ...expense, [event.target.name]: event.target.value })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
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
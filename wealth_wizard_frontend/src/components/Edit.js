import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

const Edit = (props) => {
  
  const [task, setTask] = useState({ ...props.expense })

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(task)
  }

  return (
    <>
      <div className='p-3'>
      <button className='btn btn-secondary' onClick={handleShow}>Edit</button>
      </div>
      <Modal className='modal' show={show} onHide={handleClose}> 
        <div className='modal-header' closeButton>
          <h3 className='align-center text modal-title'>Edit Expenditure</h3>
        </div>
        <div className='modal-body'>
          <form className='mb-3' onSubmit={handleSubmit}>
            <div className="col-md-12 mb-3">
              <label className="form-label" htmlFor="name">Transaction</label>
              <input className="form-control" type="text" name="name" required value={expense.transaction} onChange={handleChange}/>
            </div>
            <div className='modal-footer'>
                <button className='btn btn-secondary' onClick={handleClose}>Close</button>
                <input
                className="btn btn-primary"
                type="submit"
                value="Update"
                onClick={handleClose}/>
            </div>
          </form>    
        </div>
      </Modal>
    </>
  )
}

export default Edit
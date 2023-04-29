import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './components/Add'
import Edit from './components/Edit'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const App = () => {

let [expenses, setExpenses] = useState([])

// GET route
const getExpenses = () => {
  axios.get('http://127.0.0.1:8000/api/expenses')
    .then((response) => setExpenses(response.data),

      (err) => console.error(err)
    )
    .catch((error) => console.error(error))
}

// POST route
const handleCreate = (addExpense) => {
  console.log("Adding new expense:", addExpense)
  try {

 
  axios.post('http://127.0.0.1:8000/api/expenses', addExpense)
    .then((response) => {
      console.log(response)
      getExpenses()  
    }).catch((error) => { console.log(error)})
  }
  catch(error) {
    console.log(error)
  }
}

// DELETE route
const handleDelete = (event) => {
  axios.delete('http://127.0.0.1:8000/api/expenses/' + event.target.value)
    .then((response) => {
      console.log(response)
      getExpenses()
    })
}

// UPDATE route
const handleUpdate = (editExpense) => {
  console.log(editExpense)
  axios.put('http://127.0.0.1:8000/api/expenses/' + editExpense.id, editExpense)
    .then((response) => {
      console.log(response)
      getExpenses()
    })
}

// Calculates the total value of all the expenses in the expenses array by summing up the amount property of each expense object using the reduce method. the reduce method starts with an initial value of 0 for the accumulator parameter. It iterates over each expense object in the expenses array and adds the amount property of each expense object to the accumulator and returns the total. 
const calculateTotalExpense = (expenses) => {
  const total = expenses.reduce((accumulator, expense) => accumulator + expense.amount, 0)
  return total
}

useEffect(() => {
  getExpenses()
}, [])

  return (
    <>
      <div className='container p-3'>
        <div>
          <h1 className='text-center mt-3'>Wealth Wizard</h1>
        </div>
        
        <div>
          <h2 className='text-center mt-3'>Expense Tracker</h2> 
        </div>
        <div>
          <Image id="eyes" src='https://i.imgur.com/Pg6RleT.jpeg' rounded></Image>
        </div>
        <div>
          <h3 className="text-center">If you're not watching you money who is?</h3>
        </div>
        <div>
          <Add handleCreate={handleCreate} />
        </div>
        <div>
          <h3 className='text-center m-3'>Total Expenses: <span id='totalExpenses'>$$$ {calculateTotalExpense(expenses)}</span></h3>
        </div>
        <div>  
          <Table striped bordered hover variant="dark" size="sm">
            <thead>
              <tr>
                <th>Date</th>
                <th>Transaction</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {expenses.map((expense) => {
              return (
                <tr key={expense.id}>
                  <td>{expense.date}</td>
                  <td>{expense.transaction}</td>
                  <td>${expense.amount}</td>
                  <td style={{ display: 'flex', alignItems: 'center' }}>
                    <Edit handleUpdate={handleUpdate} expense={expense} />
                    <Button variant="danger" size="sm" onClick={handleDelete} value={expense.id}>Delete</Button></td>
                </tr>
                )
              })} 
              
            </tbody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default App

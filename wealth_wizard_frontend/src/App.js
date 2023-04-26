import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './components/Add'
import Edit from './components/Edit'
import Table from 'react-bootstrap/Table'


const App = () => {

let [expenses, setExpenses] = useState([])

const getExpenses = () => {
  axios.get('http://127.0.0.1:8000/api/expenses')
    .then((response) => setExpenses(response.data),
      (err) => console.error(err)
    )
    .catch((error) => console.error(error))
}

const handleCreate = (addExpense) => {
  axios.post('http://127.0.0.1:8000/api/expenses', addExpense)
    .then((response) => {
      console.log(response)
      getExpenses()
    })
}

const handleDelete = (event) => {
  axios.delete('http://127.0.0.1:8000/api/expenses/' + event.target.value)
    .then((response) => {
      console.log(response)
      getExpenses()
    })
}

const handleUpdate = (editExpense) => {
  console.log(editExpense)
  axios.put('http://127.0.0.1:8000/api/expenses/' + editExpense.id, editExpense)
    .then((response) => {
      console.log(response)
      getExpenses()
    })
}

useEffect(() => {
  getExpenses()
}, [])

  return (
    <>
      <div>
        <div>
          <h1>Wealth Wizard</h1>
        </div>
        <div>
          <Add handleCreate={handleCreate} />
        </div>
        <div>  
          <Table striped bordered hover variant="dark">
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
                <tr>
                  <td>{expenses.date}</td>
                  <td>{expenses.transaction}</td>
                  <td>{expenses.amount}</td>
                  <td><Edit handleUpdate={handleUpdate} expense={expense}/><button className="btn btn-danger" onClick={handleDelete} value={expense.id}>Delete</button></td>
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

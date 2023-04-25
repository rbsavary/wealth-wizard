import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'


let [expenses, setExpenses] = useState([])

const getExpenses = () => {
  axios
    .get('http://localhost:/api/expenses')
    .then(
      (response) => setExpenses(response.data),
      (err) => console.error(err)
    )
    .catch((error) => console.error(error))
}

useEffect(() => {
  getExpenses()
}, [])

const App = () => {
  return (
    <>
    <div>
      {expenses.map((expense) => {
        return (
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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
        )
      })}
      
    </div>
    </>
  )
}

export default App

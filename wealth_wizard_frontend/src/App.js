import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
    <div className="App">
      
    </div>
    </>
  )
}

export default App

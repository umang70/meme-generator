import React from 'react'
import { Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './Pages/Home'
import Edit from './Pages/Edit'

const App = () => {
  return (
    <div className='App'>
      <h1>Umang Meme Generator</h1>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/edit' element={<Edit/>} />
      </Routes>

    </div>
  )
}

export default App
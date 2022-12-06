import React, { useState } from 'react'

// React router dome
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// default exports
import { Login, Register, Home } from './pages/DefaultExports'

// scss file
import './App.css'

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

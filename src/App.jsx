import React from 'react'
import { Routes, Route } from "react-router-dom"
import InputNote from './pages/InputNote'
import ListNote from './pages/ListNote'

export default function App() {
    
  
  return (
    <Routes>
      <Route path='' element={<InputNote />} />
      <Route path='/listnote' element={<ListNote />} />
      <Route path='*' element={<h1>Page Not found</h1>} />
    </Routes>
  )
}

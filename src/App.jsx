import React, { useState } from 'react'
import './App.css'
import Board from './Board'

function App() {
  const [char, setChar] = useState('a')

  return (
    <Board/>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import './App.css'
import Board from './Board'
import Label from './Label'

function App() {
  const [char, setChar] = useState('a')
  const [label, setLabel] = useState('🎮')

  const sequence = `
  Hi !
  Welcome to Todo Game 🎮
  Developed by Abolfazl Rajaee nasab
  #react
  #bootstrap
  #html
  #css
  #js
  `;

  const log = (text, interval=200,clear=false, isEnded) => {
    let i = 0
    const interId = setInterval(() => {
      if(i>text.length){
        clearInterval(interId)
        if(clear)
          setLabel('')
        isEnded()
        return
      }
      setLabel(text.substring(0,i))
      i++
    }, interval);
    return interId
  }

  useEffect(()=>{
    
    // log('I am fine !',100,1)
  },[])


  return (
    <>
      <Label>
        {label}
      </Label>
      <Board/>
    </>
  )
}

export default App

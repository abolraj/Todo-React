import React, { useEffect, useState } from 'react'
import './App.css'
import Board from './Board'
import Label from './Label'
import Modal from './Modal'
import Cell from './Cell'
import Alert from './Alert'

function App() {
  const [char, setChar] = useState('a')
  const [label, setLabel] = useState('🎮')
  const [mode, setMode] = useState(1)
  const [players, setPlayers] = useState([])
  const [isOnPlay, setIsOnPlay] = useState(false)
  const [order, setOrder] = useState(-1)
  const [isXOrder, setIsXOrder] = useState(false)

  const sequence = `
  Hi 👋!
  Welcome to Tic-Tac-Toe Game 🎮
  Developed by Abolfazl Rajaee nasab
  #react
  #bootstrap
  #html
  #css
  #js
  😎
  😉`;


  const play = (data)=>{
    setIsOnPlay(true)
    setPlayers(data.players)
    setMode(data.mode)
  }

  const log = (orgText, interval=200,clear=false, isEnded=null, cleanInterval=100) => {
    let i = 0
    let selector = ''
  
    let text = orgText instanceof Array ? orgText.shift() : orgText
    
    if(text === undefined)return

    const nIsEnded = ()=>{
      clearInterval(selectorInterId)
      clearInterval(interId)

      setLabel('')
      log(orgText, interval,clear, isEnded, cleanInterval)
      isEnded && isEnded()
    }
    const selectorInterId = setInterval(() => {
      selector = selector ? '' : '|'
    }, 300);
    const interId = setInterval(() => {
      if(i>text.length){
        clearInterval(interId)
        if(clear){
          const cleanInterId = setInterval(()=>{
            if(i<0){
              clearInterval(cleanInterId)
              nIsEnded()
              return
            }
            setLabel(text.substring(0,i)+selector)
            i--     
          }, cleanInterval)
          
        } else nIsEnded()

        return
      }
      setLabel(text.substring(0,i)+selector)
      i++
    }, interval);
    return interId
  }

  const lines = sequence.split("\n")

  const welcome = ()=>{
    log([...lines],100,1,null,40)
    
  }
  useEffect(()=>{
    // welcome()
    // log(['I am fine !','Oh','juhu'],100,1,null,30)
  },[])

  const guessCell = ()=>{

  }
  

  return (
    <>
   
      <Alert>
        <Cell state={[0,v=>0]}/>
        <strong class="h1 m-0 me-2">Ali,</strong>you can play now !
      </Alert>

      <Label>
        {label}
      </Label>

      <Board isOnPlay={isOnPlay}/>

      <Modal onPlay={data => play(data)} isOnPlay={isOnPlay}/>
    </>
  )
}

export default App

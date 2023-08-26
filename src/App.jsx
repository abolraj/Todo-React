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
  const [isXOrder, setIsXOrder] = useState(2)

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

  const winPositions = [
    [0,1,2], // row 1
    [3,4,5], // row 2
    [6,7,8], // row 3

    [0,3,6], // column 1
    [1,4,7], // column 2
    [2,5,8], // column 3

    [0,4,8], // diagonal 1
    [6,4,2], // diagonal 2
  ]

  const onCellClick = () => {
    setIsXOrder(isXOrder =>{
      if( mode == 1 ){
        if( isXOrder == 0 ){

        }
      }else if( mode == 2 ){

      }
      
      
      return +!isXOrder
    })

  }

  const play = (data)=>{
    setIsOnPlay(true)
    setPlayers(data.players)
    setMode(data.mode)
    setIsXOrder(0)
    console.log('play!')
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
    document.addEventListener('onCellClick', onCellClick.bind(this))
  },[])

  const guessCell = ()=>{

  }
  

  return (
    <>
   
      <Alert className={+!!isXOrder?"alert-primary":"alert-danger"}>
        <Cell state={[+!!isXOrder,v=>0]}/>
        <strong class="h1 m-0 ms-2 me-2 text-capitalize">
          {players[+!!isXOrder]},
        </strong>
        <p className="h5 m-0">
          {mode*isXOrder==1 ? 'system is playing . . .':'you can play now !'}
        </p>
      </Alert>

      <Label>
        {label}
      </Label>

      <Board isOnPlay={isOnPlay} playerOrder={+isXOrder}/>

      <Modal onPlay={data => play(data)} isOnPlay={isOnPlay}/>
    </>
  )
}

export default App

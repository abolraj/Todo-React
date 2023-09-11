import { useEffect, useState } from "react";
import Cell from "./Cell";

function Board({isOnPlay, playerOrder, onWin, hasSystem}) {
    const [loadId, setLoadId] = useState(0)

    const style = {}
    let cellsIsX = [
        2, 2, 2,
        2, 2, 2,
        2, 2, 2,
    ]

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
    
    cellsIsX = cellsIsX.map(isX => useState(isX).concat([playerOrder]))

    const answerAsSystem = () => {
        // always system choice is X !
        console.log('guessing...')
        const fills = []
        for(let line of winPositions){
            const xes = line.filter(i=>cellsIsX[i][0]===1)
            const xNo = xes.length
            const yNo = line.filter(i=>cellsIsX[i][0]===0).length
            if(Math.random()<.9 && yNo === 2 && xNo === 0) return line.find(v=>cellsIsX[v][0]===2)
            if(yNo + xNo === 3) continue
            if(xNo === 2 && yNo === 0) return line.find(v=>cellsIsX[v][0]===2)
            fills.push({line, xNo, yNo})
        }

        fills.sort((a,b) => b.xNo > a.xNo || a.yNo > b.yNo  ? -1 : 1)

        const choice = fills[0]

        console.log('fills:')
        console.log(fills)
        return choice?.line && choice.line?.find(v=>cellsIsX[v][0]===2)
    }

    const checkWinner = (playerOrder) => {
        
        if(isOnPlay){
            let isDraw = true
            for(const winPosition of winPositions) {
                isDraw &&= !winPosition.some(v=>cellsIsX[v][0]===2)
                if( cellsIsX[winPosition[0]][0] !==2 && cellsIsX[winPosition[0]][0] === cellsIsX[winPosition[1]][0] && cellsIsX[winPosition[0]][0] == cellsIsX[winPosition[2]][0] ){
                        return playerOrder
                }
            }
            if(isDraw)
                return 2
        }

        return -1
    }

    const load = ()=>{
        const queue = [0,1,2,5,4,3,6,7,8,5,4,3]
        const loadId = setInterval(()=>{
            if(isOnPlay || queue.length===0){
                clearInterval(loadId)
                return
            }
            let i = queue.shift()
            cellsIsX[i][1](1)
            cellsIsX[queue.at(-3)][1](0)
            queue.push(i)
            
        },100)

        return loadId
    }

    const clearBoard = () => {
        cellsIsX.map(v=>{
            v[1](2)
            v[0]=2

            return v
        })
        
    }

    useEffect(()=>{
        document.addEventListener('onPlayAgain', ()=>{
            console.log('onPLayAgain from Board comp...')
            clearBoard()
        })
    },[])

    useEffect(()=>{
        if(!isOnPlay){
            setLoadId(load())
        }else if(loadId){
            clearBoard()
            clearInterval(loadId)
        }
    },[isOnPlay])

    useEffect(()=>{        
        if(!isOnPlay)return
        if(loadId){
            clearInterval(loadId)
            setLoadId(0)
            clearBoard()
        }
        let winner
        onWin(winner = checkWinner(+!playerOrder))
        if(winner === -1 && hasSystem && playerOrder === 1){
            let systemChoice = answerAsSystem()
            if(systemChoice !== undefined){
                setTimeout(()=>{
                    document.querySelectorAll('.board .cell')[systemChoice].click()
                },Math.max(Math.random()*1000, 200))
            }
        }
        
    },[playerOrder])


    return (
        <div className={"board container justify-content-center align-items-center align-content-center text-center " + (isOnPlay && !(hasSystem && playerOrder===1) ?'':'pe-none')} style={style}>
            <div className="row row-cols-3 justify-content-center">
                <Cell state={cellsIsX[0]}>
                    X
                </Cell>
                <Cell state={cellsIsX[1]}>
                    X
                </Cell>
                <Cell state={cellsIsX[2]}>
                    X
                </Cell>
            </div>
            <div className="row row-cols-3 justify-content-center">
                <Cell state={cellsIsX[3]}>
                    X
                </Cell>
                <Cell state={cellsIsX[4]}>
                    X
                </Cell>
                <Cell state={cellsIsX[5]}>
                    X
                </Cell>
            </div>
            <div className="row row-cols-3 justify-content-center">
                <Cell state={cellsIsX[6]}>
                    X
                </Cell>
                <Cell state={cellsIsX[7]}>
                    X
                </Cell>
                <Cell state={cellsIsX[8]}>
                    X
                </Cell>
            </div>
        </div>
    );
}

export default Board;
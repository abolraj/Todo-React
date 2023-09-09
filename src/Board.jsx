import { useEffect, useState } from "react";
import Cell from "./Cell";

function Board({isOnPlay, playerOrder, onWin}) {
    const style = {

    }

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

    const checkWinner = (playerOrder) => {
        if(isOnPlay){
            for(const winPosition of winPositions) {
                if( cellsIsX[winPosition[0]][0] !==2 && cellsIsX[winPosition[0]][0] === cellsIsX[winPosition[1]][0] && cellsIsX[winPosition[0]][0] == cellsIsX[winPosition[2]][0] ){
                        return playerOrder
                }
            }
        }
        return -1
    }

    const load = ()=>{
        const queue = [0,1,2,5,4,3,6,7,8,5,4,3]
        const loadId = setInterval(()=>{
            if(queue.length===0){
                clearInterval(loadId)
                return
            }
            let i = queue.shift()
            cellsIsX[i][1](1)
            cellsIsX[queue.at(-3)][1](0)
            queue.push(i)
            
        },100)

    }

    useEffect(()=>{
        onWin(checkWinner(+!playerOrder))

    },[playerOrder])

    return (
        <div className={"container justify-content-center align-items-center align-content-center text-center " + (isOnPlay?'':'pe-none')} style={style}>
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
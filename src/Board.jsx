import { useEffect, useState } from "react";
import Cell from "./Cell";

function Board() {
    const style = {

    }

    let cellsIsX = [
        1, 1, 1,
        1, 1, 1,
        1, 1, 1,
    ]

    cellsIsX = cellsIsX.map(isX => useState(isX))

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

    return (
        <div onClick={load} className="container justify-content-center align-items-center align-content-center text-center" style={style}>
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
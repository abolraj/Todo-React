import { useState } from "react";

function Cell({state}){
    const [isX, setIsX, isXOrder] = state
    // const setIsX = (v) => {
    //     isX = v
    // }

    const style = {
    }
    const childStyle = {
        cursor: 'pointer',
        width: '40px',
        height: '40px',
    }

    const toggle = (e) => {
        setIsX(isXOrder)
        // dispatch on cell click event
        let event = new CustomEvent('onCellClick', e)
        document.dispatchEvent(event)
        // alert("cell state : "+isXOrder)
    }
    
    return (
        <div className="text-center p-1 h1 user-select-none m-0 w-auto" style={style}>
            <div onClick={toggle} className={"cell border border-3 rounded-4 p-4 p-sm-4 mx-auto d-flex align-items-center align-content-center justify-content-center "+( isX ? "border-primary text-primary":"border-danger text-danger")} style={childStyle}>
                {['O','X',''][isX]}
            </div>
        </div>
    );
}

export default Cell;
import { useState } from "react";

function Cell({children, state}){
    let [isX, setIsX] = state

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

    const toggle = () => {
        setIsX(+!isX)
    }
    
    return (
        <div className="text-center p-1 h1 user-select-none m-0 w-auto" style={style}>
            <div onClick={toggle} className={"border border-3 rounded-4 p-4 p-sm-4 mx-auto d-flex align-items-center align-content-center justify-content-center "+( isX ? "border-primary text-primary":"border-danger text-danger")} style={childStyle}>
                {['O','X',''][isX]}
            </div>
        </div>
    );
}

export default Cell;
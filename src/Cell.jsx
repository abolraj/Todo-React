import { useState } from "react";

function Cell({children}){
    let [isX, setIsX] = useState(false)

    const style = {
    }
    const childStyle = {
        cursor: 'pointer',
        width: '40px',
        height: '40px',
    }

    const toggle = () => {
        children = isX ? 'X' : 'O';
        setIsX(!isX)
    }
    
    return (
        <div className="text-center p-1 h1 user-select-none m-0" style={style}>
            <div onClick={toggle} className={"border border-3 rounded-4 p-4 p-sm-5 d-flex align-items-center align-content-center justify-content-center "+( isX ? "border-primary text-primary":"border-danger text-danger")} style={childStyle}>
                {isX ? 'X' : 'O'}
            </div>
        </div>
    );
}

export default Cell;
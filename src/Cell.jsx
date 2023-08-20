
function Cell({children}){
    const style = {
        
    }
    const childStyle = {
        width: '40px',
        height: '40px',

    }

    return (
        <div className="text-center p-2" style={style}>
            <div className="border border-primary border-3 p-2 rounded-2 p-3 d-flex align-items-center justify-content-center" style={childStyle}>
                {children}
            </div>
        </div>
    );
}

export default Cell;
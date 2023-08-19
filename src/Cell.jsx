
function Cell({children}){
    return (
        <div className="ratio-1x1 text-center w-25 h-25 rounded-2">
            {children}
        </div>
    );
}

export default Cell;
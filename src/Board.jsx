import Cell from "./Cell";

function Board(){
    const style = {
        
    }

    return (
        <div className="container justify-content-center align-items-center align-content-center text-center" style={style}>
            <div className="row row-cols-3 justify-content-center">
                <Cell>
                    X
                </Cell>
                <Cell>
                    X
                </Cell>
                <Cell>
                    X
                </Cell>
            </div>
            <div className="row row-cols-3 justify-content-center">
                <Cell>
                    X
                </Cell>
                <Cell>
                    X
                </Cell>
                <Cell>
                    X
                </Cell>
            </div>
            <div className="row row-cols-3 justify-content-center">
                <Cell>
                    X
                </Cell>
                <Cell>
                    X
                </Cell>
                <Cell>
                    X
                </Cell>
            </div>
        </div>
    );
}

export default Board;
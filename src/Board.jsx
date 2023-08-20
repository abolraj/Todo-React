import Cell from "./Cell";

function Board(){
    const style = {
        
    }

    return (
        <div className="container align-items-center align-content-center" style={style}>
            <div className="row row-cols-3">
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
            <div className="row row-cols-3">
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
            <div className="row row-cols-3">
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
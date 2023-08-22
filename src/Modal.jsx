import { useState } from "react"

function Modal({onPlay, isOnPlay}) {
    const [mode, setMode] = useState(1)
    const [players, setPlayers] = useState([])

    const getPlayers = () => {
        return [
            document.querySelector('#bp1n')?.value, // Player 1
            document.querySelector('#bp2n')?.value, // Player 2
        ]
    }

    const play = () => {
        let players = getPlayers()
        setPlayers(players)
        onPlay({mode, players})
    }


    return (
        <div className="container">

            <button type="button" className="btn btn-primary fixed-bottom col-lg-6 offset-lg-3 rounded-4 fw-bolder fs-1 rounded-bottom-0 btn-lg col-12 mt-5" data-bs-toggle="modal" data-bs-target="#modalId" disabled={isOnPlay}>
                Let's Play !
            </button>

            <div className="modal fade" id="modalId" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="modalTitleId" data-bs-theme="dark" >
                <div className="modal-dialog  modal-dialog-centered " role="document">
                    <div className="modal-content text-bg-dark">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalTitleId">Play Tic⭕Tac❌Toe Game ! 🕹️</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <label className="form-label col-auto">Choose Your Challenger !</label>
                                <div className="btn-group">
                                    <button onClick={()=>setMode(1)} className={"btn col " + (mode === 1 ? 'btn-primary' : 'btn-outline-primary')}>System 🧠</button>
                                    <button onClick={()=>setMode(2)} className={"btn col " + (mode === 2 ? 'btn-primary' : 'btn-outline-primary')}>Person 😉</button>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <label className="form-label col-auto">Give Your Name{mode == 2 && 's'} !</label>
                                {mode >= 1 &&
                                <div className="input-group">
                                    <label className="btn btn-primary col-4" htmlFor="bp1n">Player 1's Name</label>
                                    <input className="form-control" id="bp1n" placeholder="Give me short name / 😉" value={players[0]}/>
                                </div> }

                                {mode >= 2 &&
                                <div className="input-group mt-2">
                                    <label className="btn btn-primary col-4" htmlFor="bp2n">Player 2's Name</label>
                                    <input className="form-control" id="bp2n" placeholder="Give me short name / 😎" value={players[1]}/>
                                </div> }
                            </div>
                        </div>


                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={play.bind(this)}>Play 🕹️</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Modal
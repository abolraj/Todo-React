function WinAlert({ children, isWin, onClose, onPlayAgain }) {

    const _onClose = () => {
        console.log('_onClose')
        document.querySelector('#win_alert_bg').style.display = 'none'
        onClose()
    }

    const _onPlayAgain = (e) => {
        console.log('_onPlayAgain')

        document.querySelector('#win_alert_bg').style.display = 'none'

        let event = new CustomEvent('onPlayAgain', e)
        document.dispatchEvent(event)
        onPlayAgain && onPlayAgain(e)
    }

    if(isWin)
        return (
            <>
                <script>alert('win alert !')</script>
                <div id="win_alert_bg" className={"win-alert-bg d-block modal-backdrop bg-info fade " + (isWin ? ' show opacity-100 bg-opacity-25 ' : '')} data-bs-theme="dark">
                </div>
                <div className={"h3 p-4 pe-5 rounded-5 d-flex align-items-start win-alert alert alert-success alert-dismissible position-fixed col-10 col-sm-6 fade " + (isWin ? 'show' : '')} role="alert" data-bs-theme="dark">
                    <button onClick={_onClose.bind(this)} className="btn btn-close m-1" data-bs-dismiss="alert" aria-label="Close">
                        
                    </button>
                    <button onClick={_onPlayAgain.bind(this)} className="btn-try btn btn-outline-primary position-absolute col-12 top-100 mt-2 start-0 p-2 rounded-5 shadow-none" data-bs-dismiss="alert">
                        <p class="m-1 d-flex justify-content-between  align-items-center ps-3 pe-1 h2 ">
                            Try Again
                            <i class="bi bi-arrow-clockwise"></i>
                        </p>
                    </button>
                    <div class="d-flex align-items-end">
                        {children}
                    </div>
                </div>

            </>
        )
}

export default WinAlert
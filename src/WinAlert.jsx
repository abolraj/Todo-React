function WinAlert({ children, isWin, onClose }) {

    const _onClose = () => {
        document.querySelector('#win_alert_bg').remove()
        onClose()
    }

    if(isWin)
        return (
            <>
                <div id="win_alert_bg" className={"win-alert-bg modal-backdrop bg-info fade " + (isWin ? ' show opacity-100 bg-opacity-25 ' : '')} data-bs-theme="dark">
                </div>
                <div className={"h3 d-flex align-items-end win-alert alert alert-success alert-dismissible position-fixed col-9 col-sm-6 fade " + (isWin ? 'show' : '')} role="alert" data-bs-theme="dark">
                    <button onClick={_onClose.bind(this)} className="btn btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    {children}
                </div>

            </>
        )
}

export default WinAlert
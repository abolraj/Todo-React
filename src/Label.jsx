function Label({children, isOnPlay}){

    if(!isOnPlay)
        return (
            <h2 className="label border-bottom border-secondary border-2 text-secondary overflow-visible p-2">
                {children}
            </h2>
        )
}

export default Label
function Alert({children}){

    return (
        <div class="fixed-top col-lg-6 offset-lg-3 rounded-4 rounded-top-0 alert alert-primary show d-flex align-items-end " role="alert" data-bs-theme="dark">
            {children}
        </div>
    )
}

export default Alert
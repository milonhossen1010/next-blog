export  default  function Container({children, className}) {
    return <div className={`px-4 max-w-screen-xl mx-auto ${className}`}>{children}</div>

}
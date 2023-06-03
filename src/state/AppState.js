function AppState(){
    const [thingarray, setthingarray]=React.useState(0)
    function handleClick(){
        setthingarray(no)
    }
   
    return(
        <div className="state">
        <h1 className="state-value">state is important</h1>
        <div className="state-title" onClick={handleClick}>
        <h1 className="state"></h1>
        </div>
        </div>
    )
}
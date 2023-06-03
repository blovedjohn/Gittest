function (){
const [count, setcount]=React.useState(0)

function Add(){
setcount=(prevcount=>prevcount +1)
}

function subtract(){
    setcount=(prevcount=>prevcount -1) 
}
    return(
<div className="count">
 <button className="plus" onClick={Add}>+</button>
 <button className="minus" onClick={subtract}>-</button>
</div>
    )
}
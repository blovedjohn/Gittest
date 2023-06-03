function Memimage(){
    const[Memimage, setMemiage] =React.useState("")
    const[isgoingout, setisgoingout] =React.useState(false)
    
    function Getmemimage(){
setMemiage(memarray[randomnumber].url)
const isgoingout=false
let answer= isgoingout? "Yes" : "No"

function changemind(){
    setisgoingout(prevstate=>prevstate? "true" : "false")
    setisgoingout(prevstate=> !prevstate)
    
}
    }
    return(
<div className="memimage">
<img src={Memimage}/>
<h1>{isgoingout? "Yes" : "No"}</h1>
<h1>{isgoingout? "Yes" : "No"}</h1>
<h1>onClick={changemind}</h1>
</div>
    )
}
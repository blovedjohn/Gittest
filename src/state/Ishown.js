function ishown(){
    const [ishown, setishown]=React.useState(false)

   function toggleshown(){
    setishown(prevstate=> !prevstate)
   }
     return(
  <div>
   {props.setup && <h3>{props.setup}</h3>}
   {ishown && <p>{props.punchline}</p>}
   <button onClick={toggleshown}>show punchline</button>
   </div>
  )
}
const cond1 =true
const cond2 =true
if(cond1 && cond2){

}
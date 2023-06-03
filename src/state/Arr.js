function Things(){
    const [thingsarray, setthingsarray]= React.useState('things1', 'things2')
    
    function Items(){
setthingsarray(prevstate=> {
    return([...prevstate, 'things ${thingsarray.length +1}'])
    }
)}
    const thingsElement=thingsarray.map(things=><p key={things}>{things}</p>)
   
   
    return(
<div>
<h1></h1>
</div>
    )
}
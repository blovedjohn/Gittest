function Toggle(){
const[contact, setcontact]=React.useState({
firstname: "joinPaths",
lastname: "jasmine",
phone: "+o7o32",
isfavorite: false
})

let startIcon= contact.isfavorite? "star-fild.png" : "star-empty.png"

    function togglefavorite(){
setcontact=(prevstate=>{
    return{
        ...prevstate,
        isfavorite: !prevstate.isfavorite}
    
})

}
    return(
    <main>
    <article className="cards">
    <img src="./images/users.png" className="card"/>
    <img src={'../images/${starticon}'}/>
    <div className="info">
    <img src="star.png" className="favorite" onClick={favoritetoggle}/>
<h1 className="contact">{contact.firstname} {contact.lastname}</h1>
    </div>
    </article> 
    </main>
   ) 
    }

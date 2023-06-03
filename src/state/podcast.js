function Podcast(){
    const[starWarsData, setSarWarsData]= React.useState({})
    const[count, setcount]= React.useState(0)
}

   React.useEffect(() => {
        fetch(`https://swapi/dev/api/people/${count}`)
        .then(res => res.json())
        .then(data=>setSarWarsData(data))
   },[count])
        
   
        return(
        <div>
        <pre>{JSON.stringify(starWarsData, null,2)}</pre>
        <h2>the count is {count}</h2>
        <button onClick={()=>setcount(prevcount => prevcount+1)}></button>

        </div>     
        )

    export default Podcast;
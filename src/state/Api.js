const [mem, setMem]=React.useState({
    Toptext:"",
    bottomText:"",
    RandomImage:"http://i.imgflip.com/ibij.png"
})
const [allMems, setallMems]=React.useState(memsData)


React.useEffect(() => {
         fetch("http://i.imgflip.com/ibij.png")
         .then(res => res.json())
         .then(data=>setallMems(data.data.mems))

         console.log(allMems)
        },[])
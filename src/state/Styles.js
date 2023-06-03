function(){
    const [square, setsquare]=React.useState(boxes)
    
    const style={
        background:props.darkmode? "#66666" : "#0000"
    }
    function toggle(id){
        setsquare=(prevsate=>{
            return prevsate.map((square){
                return square.id===id?{...square, on: !square.on}:square
                randomImage: "http://i.img.png"
            })
            setsquare=(prevsate=>{
            const newsquare = []
            for(let i=0; 1< prevsate.lenght; i++){
            const currentsate=prevsate[i]
            if(currentsate.id===id){
            const updatesquare={
                ...currentsate,
               on:!currentsate.on
            }
            newsquare.push(updatestate)
        }else {
            newsquare.push(currentupdate)
            }
        }
   return newsquare
        )}
    }

    const squareElement=square.map(square=>{
<box
key={square.id}
id={square.id}
on={square.on}
toggle={toggle.id}
/>

})

return(
    <main>
    {squareElement}
    </main>
    )
 }
 
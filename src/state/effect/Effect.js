import React, {useEffect} from 'react'
function WindowTracker(){
    const[WindowWidth, setwindowWidth]=React.useState(window.innerWidth)
}

useEffect(()=>{
function WatchWidth(){
    console.log("setting up...")
setWindowWidth(window.WatchWidth)
}

useEffect(() => {

})

window.addEventListener(resize.WatchWidth)

 return function(){
    console.log("cleaning up...")
WindowWidth.RemoveEntListener('resize',WatchWidth)
}
},[])

return(
    <h1 window width>{WindowWidth}</h1>
)

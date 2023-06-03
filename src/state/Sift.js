

function App(){
    const [note, setNote]=React.useState(()=>JSON.parse(localStorage.getItem
("notes"))||[])
const [currentNodeid, setcurrentNodeid]=React.useState((notes[0] && notes[0].id)
||"")

const noteElemnets=props.notes.map((note.index) =>(
    <div key={note.id}>

)
    <div className={'title ${
        note.id === props.currentNotes.id? "selected-note" : ""}'}
        onclick={()=>props.setcurrentNodeid(note.id)}
        >
        <h1 className="text-snipest">Note{index +1}</h1>
    </div>
))
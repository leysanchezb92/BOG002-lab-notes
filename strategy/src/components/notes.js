import './notes.css'

function NotesCards(props){
    return (
        <div className="cards">
            <div className="cardNotes">
                <input type={props.type} className="menuCard"></input>
            </div>
        </div>
    ) 
}

export default NotesCards

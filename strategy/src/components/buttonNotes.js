function ButtonNotes(props){
    return(
        <button className="buttonCard">
            <img className="imgCard" src={props.src} alt={props.alt}></img>
        </button>
    )
}
export default ButtonNotes
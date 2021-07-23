// import {Link} from "react-router-dom";
import "./inputForm.css"

function InputForm(props){
    if(props.type === 'email' || props.type === 'password'){
        return(
            <div className="form_styles change">
                <label htmlFor={props.for}>{props.name}</label>
                <input type={props.type} id={props.id} onChange={(event)=> props.setStatus(event.target.value)} required/>
            </div>
        )
    }
    return (
        <div className="form_styles">
            <label htmlFor={props.for}>{props.name}</label>
            <input type={props.type} id={props.id} required/>
        </div> 
    )
}

export default InputForm
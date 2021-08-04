import {Link} from "react-router-dom";
import './button.css'

function BtnGeneral(props){
  if(props.onClick){
    return (
      <button id={props.id} className="btn-general" onClick={props.onClick}>
        <Link to={props.url}>{props.name}</Link> 
      </button>
    )
  }
  return (
    <button id={props.id} className="btn-general">
            <Link to={props.url}>{props.name}</Link> 
    </button>
  ) 
}

export default BtnGeneral

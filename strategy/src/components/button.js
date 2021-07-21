import {Link} from "react-router-dom";
import './button.css'

function BtnGeneral(props){
  return (
    <button id={props.id} className="btn-general">
            <Link to={props.url}>{props.name}</Link> 
    </button>
  ) 
}

export default BtnGeneral

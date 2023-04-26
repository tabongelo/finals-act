import Trip from "./Trip";
import "./TripStyle.css";

function TripData(props){
    return(
        <div className="t-card">
            <div className="t-image">
                <img alt="image" src={props.image}/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default TripData;
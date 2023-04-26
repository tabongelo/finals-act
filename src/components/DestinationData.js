import { Component } from "react";
import "./DestinationStyle.css";
import beach1 from "../assets/boracay.jpg"
import beach2 from "../assets/boracay1.jpg"


class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="des-text">
                  <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>  
                </div>
                <div className="image">
                    <img alt="img" src={this.props.img2}/>
                    <img alt="img" src={this.props.img1}/>
                </div>
            </div>
        )
    }
}

export default DestinationData
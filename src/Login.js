import React, { Component } from 'react'
import fire from './config/fire';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
        }
    }
    login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u);            
        }).catch((err)=>{
            console.log(err);
        })
    }
    signup = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u);            
        }).catch((err)=>{
            console.log(err);
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state);
    }
    render() {
        return (
            <div class="container">
                    <form action="" id="loginForm" class="text-center">
                        <h1>Login</h1>
                        <div className="inputBox">
                        <input type="email" id="email" name="email" placeholder="Enter your Email"
                        onChange={this.handleChange}
                        value={this.state.email}>
                        </input>
                        </div>
                      
                        <div className="inputBox">
                        <input type="password" id="password" name="password" placeholder="Enter your Password"
                        onChange={this.handleChange}
                        value={this.state.password}>
                        </input>
                        </div>
                        &nbsp;
                        <div className="inputBox">
                        <button class="form-btn" type="submit" onClick={this.login}>Login</button>
                        </div>
                        &nbsp;
                        <div className="inputBox">
                        <button class="form-btn" type="submit" onClick={this.signup}>Sign Up</button>
                        </div>
                    </form>
                </div>

            

        )
    }
}
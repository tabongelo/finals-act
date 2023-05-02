import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Menu } from './Menu';
import "./NavbarStyle.css";

class Navbar extends Component{
    state = { clicked: false };
    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked})

    };
    logout = () => {
        window.location.href='/'
    };

    render(){
        return(
            <div>
            <nav className="NavbarItems">
                <h1 className="navbar-logo">TravelS</h1>

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-circle-xmark" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu "}>
                    {Menu.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                <i className={item.icon}></i>{item.title}</Link>
                            </li>
                        )
                    })}
                    <button onClick={this.logout}>Logout</button>
                </ul>
            </nav>
            </div>
        )
    };
};

export default Navbar;
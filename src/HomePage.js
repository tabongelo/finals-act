import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Main from './routes/Main';
import About from './routes/About';
import Contact from './routes/Contact';
import CRUD from './routes/CRUD';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="Home">
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/crud" element={<CRUD/>}/>
                </Routes>
            </div>
        )
    };
}
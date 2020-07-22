import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import './LoginComponent.css';
import { Link, Redirect } from "react-router-dom";

export const LoginComponent: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (

        <div> 
            <div className="Login">
                <div className="LoginHeader">
                    LOGIN PAGE
                </div>
                <div className="Form">
                <div><input onChange={e=> setEmail(e.target.value)} type="email" id="email" placeholder="Email"/></div>
                <div><input onChange={e=> setPassword(e.target.value)} type="password" id="password" placeholder="Password"/></div>
                <button className="Button">
                    <Link to="/table" style={{textDecoration: 'none'}}>Login</Link></button>
                    </div>
                </div>                 
        </div>
    )
}


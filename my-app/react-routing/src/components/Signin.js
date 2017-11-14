import React from 'react';

import {Link} from "react-router-dom";

import Constants from "./Constants";

export default class SignInView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : ""
        }
        
    }
    
    handleSubmit(evt){
        evt.preventDefault();
        console.log("creating user account with credentials: %s, %s", 
                        this.state.email,
                        this.state.password);
        this.setState({
            email : "",
            password : ""
            }); 
    }

    render(){
        return (
            <div>
                <h1>Sign In</h1>
                <div className = "form-group">
                    <label htmlFor = "email">Email</label>
                    <input type = "email" id ="email" className = "form-control" placeholder = "Your email account" value = {this.state.email} onInput = {evt=>this.setState({email:evt.target.value})}/>
                </div>
                <div className = "form-group">
                    <label htmlFor = "password">Password</label>
                    <input type = "passWord" id ="password" className = "form-control" placeholder = "password"
                    value = {this.state.password} onInput = {evt=>this.setState({password:evt.target.value})}/>
                </div>
                <div className = "form-group">
                    <button type = "submit" className = "btn btn-primary">Sign In!</button>
                </div>
            </div>
        );
    }
}
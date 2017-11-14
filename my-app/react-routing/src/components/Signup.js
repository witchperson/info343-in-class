import React from 'react';

import {Link} from "react-router-dom";

import Constants from './Constants';
export default class SignUpView extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            firstName : "",
            lastName : "",
            email : "",
            password : ""
        }
        
    }
    
    handleSubmit(evt){
        evt.preventDefault();
        console.log("creating user account with credentials: %s, %s, %s, %s", 
                        this.state.firstName,
                        this.state.lastName,
                        this.state.email,
                        this.state.password);
        this.setState({
            firstName : "",
            lastName : "",
            email : "",
            password : ""
            }); 
    }
    
    render(){
        return (
            <div className = "container">
                <h1>Sign Up</h1>

                <form onSubmit = {evt =>this.handleSubmit(evt)}>
                    <div className = "form-group">
                        <label htmlFor = "firstName">First Name</label>
                        <input id ="firstName"type = "text" className = "form-control" placeholder = "Your First Name" value = {this.state.firstName} onInput = {evt=>this.setState({firstName:evt.target.value})}/>
                    </div> 
                    <div className = "form-group">
                        <label htmlFor = "lastName">Last Name</label>
                        <input type = "text" id ="lastName" className = "form-control" placeholder = "Your last Name" value = {this.state.lastName} onInput = {evt=>this.setState({lastName:evt.target.value})}/>
                    </div>
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
                        <button type = "submit" className = "btn btn-primary">Sign Up!</button>
                    </div>   
                </form>

                <p>Already have an account? <Link to ={Constants.routes.signin}>Sign In!</Link></p>
            </div>
        );
    }
}
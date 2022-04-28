import React, {Component} from "react";
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/users.json'; // Later: change this to the "deployed" URL

class Signin extends Component{
    constructor(){
        super();
        this.state={
            email:"",
            password:"",
            password_confirmation:"",
            name: "",
            admin: "0",
        }
        this._handleInputEmail=this._handleInputEmail.bind(this);
        this._handleInputName=this._handleInputName.bind(this);
        this._handleInputPassword=this._handleInputPassword.bind(this);
        this._handleInputPasswordConfir=this._handleInputPasswordConfir.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
       
    }
    
    _handleInputEmail(event){
        this.setState({email: event.target.value});
        console.log(event.target.value);
    };

    _handleInputName(event){
        this.setState({name: event.target.value});
        console.log(event.target.value);
    };

    _handleInputPassword(event){
        this.setState({password: event.target.value});
        console.log(event.target.value);
    };

    _handleInputPasswordConfir(event){
        this.setState({password_confirmation: event.target.value});
        console.log(event.target.value);
    };

    _handleSubmit(event){
        event.preventDefault();
        const {
            email,
            password,
            password_confirmation,
            name
          } = this.state;
          axios
            .post(
                SERVER_URL,
              {
                user: {
                  email: email,
                  password: password,
                  password_confirmation: password_confirmation,
                  name: name,
                }
              }
            )
            .then(response => {
                if (response.data.status === "created") {
                  console.log("Registration data", response.data)
                }
              })
              .catch(error => {
                console.log("registration error", error);
              });
    }


    render(){
        return(
            <div className="main-content">
              <h1>Sign in</h1>
              <form onSubmit={this._handleSubmit}>
                <div className="mb-3">
                   <label className="form-label">Email address</label>
                   <input type="email" className="form-control" id="exampleFormControlInput1" required onChange={this._handleInputEmail}/>
                </div>
                <div className="mb-3">
                   <label className="form-label">User name:</label>
                   <input className="form-control" id="exampleFormControlInput1" required onChange={this._handleInputName}/>
                </div>
                <div className="mb-3">
                   <label className="form-label">Password:</label>
                   <input className="form-control"  required onChange={this._handleInputPassword}/>
                </div>
                <div className="mb-3">
                   <label className="form-label">Password comfirmation:</label>
                   <input className="form-control"  required onChange={this._handleInputPasswordConfir}/>
                </div>
                <div className="mb-3">
                    <input type="submit" />
                </div>
                
              </form>
            </div>
        )
    }
}

export default Signin;
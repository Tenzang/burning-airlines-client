import React, {Component} from "react";

class Login extends Component{
    constructor(){
        super();
        this.state={
            email:"",
            password:"",
        }
        this._handleEmailInput=this._handleEmailInput.bind(this);
        this._handlePasswordInput=this._handlePasswordInput.bind(this);
    }

    _handleEmailInput(event){
        this.setState({email: event.target.value});
        console.log(event.target.value);
    };

    _handlePasswordInput(event){
        this.setState({password: event.target.value});
        console.log(event.target.value);
    };

    render(){
        return(
            // create the login form
            <div className="main-content">
                <h1>Log in</h1>
                <form onSubmit={this._handleSubmit}>
                    <div className="mb-3">
                       <label className="form-label">Email address</label>
                       <input type="email" className="form-control" id="exampleFormControlInput1" onChange={this._handleEmaiInput}/>
                    </div>
                    <div className="mb-3">
                       <label className="form-label">Password:</label>
                       <input  className="form-control" id="exampleFormControlInput1" onChange={this._handlePasswordInput}/>
                    </div>
                    <div className="mb-3">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
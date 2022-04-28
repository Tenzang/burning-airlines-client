import React, {Component} from "react";

class SigninForm extends Component {
    constructor(){
        super();
        this.state={
            email:"",
            password:"",
            password_confirmation:"",
            name: "",
        }
        this._handleInputEmail=this._handleInputEmail.bind(this);
        this._handleInputName=this._handleInputName.bind(this);
        this._handleInputPassword=this._handleInputPassword.bind(this);
        this._handleInputPasswordConfir=this._handleInputPasswordConfir.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
       
    }
    
    _handleInputEmail(event){
        this.setState({email: event.target.value});

    };

    _handleInputName(event){
        this.setState({name: event.target.value});
        console.log(event.target.value);
    };

    _handleInputPassword(event){
        this.setState({password: event.target.value});
   
    };

    _handleInputPasswordConfir(event){
        this.setState({password_confirmation: event.target.value});
 
    };

    _handleSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            email:"",
            password:"",
            password_confirmation:"",
            name: "",
        });
    }


    render(){
        return(
            <div className="main-content">
              <h1>Sign in</h1>
              <form onSubmit={this._handleSubmit}>
                <div className="mb-3">
                   <label className="form-label">Email address</label>
                   <input type="email" className="form-control" id="exampleFormControlInput1" required onChange={this._handleInputEmail} value={this.state.email}/>
                </div>
                <div className="mb-3">
                   <label className="form-label">User name:</label>
                   <input className="form-control" id="exampleFormControlInput1" required onChange={this._handleInputName} value={this.state.name}/>
                </div>
                <div className="mb-3">
                   <label className="form-label">Password:</label>
                   <input className="form-control"  required onChange={this._handleInputPassword} value={this.state.password}/>
                </div>
                <div className="mb-3">
                   <label className="form-label">Password comfirmation:</label>
                   <input className="form-control"  required onChange={this._handleInputPasswordConfir} value={this.state.password_confirmation}/>
                </div>
                <div className="mb-3">
                    <input type="submit" />
                </div>
                
              </form>
            </div>
        )
    }
}

export default SigninForm;
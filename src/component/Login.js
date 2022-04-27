import React, {Component} from "react";

class Login extends Component{

    render(){
        return(
            // create the login form
            <div className="main-content">
                <h1>Log in</h1>
                <div className="mb-3">
                   <label className="form-label">Email address</label>
                   <input type="email" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                   <label className="form-label">Password:</label>
                   <input type="email" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <input type="submit" />
                </div>
            </div>
        )
    }
}

export default Login
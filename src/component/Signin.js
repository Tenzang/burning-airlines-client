import React, {Component} from "react";
import axios from 'axios';
import SigninForm from "./SigninForm"
import SigninList from "./SigninList"

const SERVER_URL = 'https://burning-airlines-server.herokuapp.com/users.json'; // Later: change this to the "deployed" URL

class Signin extends Component{
    constructor(){
        super();
        this.state={
            users:[],
        }
        this.saveUser = this.saveUser.bind(this)
    }

    componentDidMount() {
        const fetchUsers = () => {
            axios(SERVER_URL).then(response => {
                const mappedResponse = ("response data mapped: ", response.data.map(user => {
                        return(
                            {name: user.name,
                            email: user.email, }
                            )
                        }));
                this.setState({users: mappedResponse});
                setTimeout(fetchUsers, 5000); // a form of recursion // POLLING
            });
        };
        fetchUsers()
        
    };

    saveUser(state) {
        const {
            email,
            name,
            password,
            password_confirmation
          } = state;
        axios.post(SERVER_URL, {
            user: {
              email: email,
              name: name,
              password: password,
              password_confirmation: password_confirmation
            }
          }).then(response => {
            
            this.setState({users: [response.data, ...this.state.users]})
        });
    }
    
   


    render(){
        return(
            <div className="main-content">
              <SigninForm onSubmit={ this.saveUser }/>
              <SigninList users={this.state} />
            </div>
        )
    }
}

export default Signin;
import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/airplanes.json'; // Later: change this to the "deployed" URL

class Airplanes extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            row: '',
            col: ''
        }

        this._handleNameChange = this._handleNameChange.bind(this);
        this._handleRowChange = this._handleRowChange.bind(this);
        this._handleColChange = this._handleColChange.bind(this);

        this._handleSubmit = this._handleSubmit.bind(this);

    }

    _handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    _handleRowChange(event) {
        this.setState({row: event.target.value});
    }

    _handleColChange(event) {
        this.setState({col: event.target.value});
    }

    _handleSubmit(event) {
        event.preventDefault();
        axios.post(SERVER_URL, this.state).then(response => console.log(response));
    }

    render() {
        return(
            <div>
                <h2>Burning Airlines</h2>
                <form onSubmit={ this._handleSubmit }>
                    <label>
                        Name:
                        <input onChange={ this._handleNameChange } />
                    </label>
                    <label>
                        Rows:
                        <input onChange={ this._handleRowChange } />
                    </label>
                    <label>
                        Cols:
                        <input onChange={ this._handleColChange } />
                    </label>
                    <input type="submit" value="save" />
                </form>
            </div>
        );
    }
}

export default Airplanes;
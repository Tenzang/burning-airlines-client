import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/.json'; // Later: change this to the "deployed" URL

class FlightInterface extends Component {
    constructor() {
        super();
        this.state = {
            flightInformation: []
        };

    
    }
    render() {
        return (
            <div>
                <h1>Flight Interface</h1>
                <FlightForm /> 
                {/* //onSubmit={ this.saveFlight} /> */}
                
            </div>
        );
    }
}

class FlightForm extends Component {
    constructor() {
        super();
        this.state = {number: '', date: '', destination: '', origin: '', airplane_id: ''   };
        this._handleFlightNum = this._handleFlightNum.bind(this);
        this._handleFlightDate = this._handleFlightDate.bind(this);
        this._handleFlightTo = this._handleFlightTo.bind(this);
        this._handleFlightFrom = this._handleFlightFrom.bind(this);
        this._handleFlightPlane = this._handleFlightPlane.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleFlightNum(event) {
        this.setState({number: event.target.value});

    }

    _handleFlightDate(event) {
        this.setState({date: event.target.value});
    }

    _handleFlightTo(event) {
        this.setState({destination: event.target.value});
    }

    _handleFlightFrom(event) {
        this.setState({origin: event.target.value});
    }

    _handleFlightPlane(event) {
        this.setState({airplane_id: event.target.value})
    }

    _handleSubmit(event) {
        event.preventDefault();
        axios.post(SERVER_URL, this.state).then(response => console.log(response));
    }
    render() {
        return (
            <div>
                <form onSubmit={ this._handleSubmit }>
                    <label>
                        Flight#:
                        <input onChange={ this._handleFlightNum } />
                    </label>
                    <label>
                        Date:
                        <input type="date" onChange={ this._handleFlightDate } />
                    </label>
                    <label>
                        To:
                        <input onChange={ this._handleFlightTo } />
                    </label>
                    <label>
                        From:
                        <input onChange={ this._handleFlightFrom }  />
                    </label>
                    <label>
                        Plane:
                        <input onChange={ this._handleFlightPlane} /> 
                        {/* turn into a select input later on  */}
                    </label>
                </form>
                <input type="submit" value="Create Flight" />
            </div>
        );
    }
}




export default FlightInterface;
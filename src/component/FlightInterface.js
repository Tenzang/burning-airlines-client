import React, { Component } from 'react';
import axios from 'axios';

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
        this.state = {number: '',  };
        this._handleFlightNum = this._handleFlightNum.bind(this);
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

    _handleFlightPlane(evnet) {
        this.setState({airplane_id: event.target,value})
    }

    _handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.content)
        this.setState({ content: '' })
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
                        <input onChange={ this_handleFlightPlane} /> 
                        {/* turn into a select input later on  */}
                    </label>
                </form>
                <input type="submit" value="Create Flight" />
            </div>
        );
    }
}




export default FlightInterface;
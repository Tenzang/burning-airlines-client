import React, { Component } from 'react';
import axios from 'axios';

import AirplaneForm from './AirplaneForm';
import AirplaneList from './AirplaneList';

const SERVER_URL = 'http://localhost:3000/airplanes.json'; // Later: change this to the "deployed" URL

class Airplanes extends Component {
    constructor() {
        super();
        this.state = {airplanes: []}

        this.saveAirplane = this.saveAirplane.bind(this);

    }

    componentDidMount() {
        const fetchAirplanes = () => {
            axios(SERVER_URL).then(response => {
                const mappedResponse = ("response data mapped: ", response.data.map(airplane => {
                        return(
                            {name: airplane.name,
                                row: airplane.row, 
                                col: airplane.col}
                                )
                            }));
                this.setState({airplanes: mappedResponse});

                setTimeout(fetchAirplanes, 5000); // a form of recursion // POLLING
            });
        };

        fetchAirplanes();
    };

    saveAirplane(state) {
        axios.post(SERVER_URL, state).then(response => {
            this.setState({airplanes: [response.data, ...this.state.airplanes]})
        });
    }

    render() {
        return(
            <div>
                <AirplaneForm onSubmit={ this.saveAirplane } />
                <AirplaneList airplanes = { this.state } />
            </div>
        );

    }
}

export default Airplanes;
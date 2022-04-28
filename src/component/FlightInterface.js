import React, { Component } from 'react';
import axios from 'axios';

import FlightForm from './FlightForm';
import FlightList from './FlightList';

const SERVER_URL = 'http://localhost:3000/flights.json'; // Later: change this to the "deployed" URL

class FlightInterface extends Component {
    constructor() {
        super();
        this.state = {flights: [] }

        this.saveFlight = this.saveFlight.bind(this);
        
        }
    
        componentDidMount() {
            const fetchFlights = () => {
                axios(SERVER_URL).then(response => {
                    const mappedResponse = ("response data mapped: ", response.data.map(flight => {
                            return(
                                {number: flight.number,
                                    date: flight.date, 
                                    from: flight.origin ,
                                    to:   flight.destination,
                                    plane: flight.airplane_id } 
                                    )
                                }));
                    this.setState({flights: mappedResponse});
    
                    setTimeout(fetchFlights, 5000); // a form of recursion // POLLING
                });
            };
            fetchFlights();
        };

        saveFlight(state) {
            axios.post(SERVER_URL, state).then(response => {
                this.setState({flights: [response.data, ...this.state.flights]})
            });
        }   

    render() {
        return (
            <div>
                <h1>Flight Interface</h1>
                <FlightForm onSubmit={ this.saveFlight }/>
                <FlightList flights={ this.state } />
                            
            </div>
        );
    }
};


export default FlightInterface;




import React, { Component } from 'react';

import FlightDisplay from './FlightDisplay';
import SeatSelector from './SeatSelector';
import SeatForm from './SeatForm';

class Reservations extends Component {
    constructor() {
        super();

        this.state = {
            flight: '',
            reservations: []
        }
    }

    render() {
        return(
            <div>
                <FlightDisplay />
                <SeatSelector />
                <SeatForm />
            </div>
        );
    }
}

export default Reservations;
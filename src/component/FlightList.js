import React, { Component } from 'react';

const FlightList = (props) => {
    console.log("list rendering...");
    console.log(props.flights.flights);
    return(
        <div>
            <ul>
                { props.flights.flights.length } flights
                { props.flights.flights.map(flight => {
                    return (
                    <div class="flight-card">
                        <p>Number: {flight.number}</p>
                        <p>Date: {flight.date}</p>
                        <p>From: {flight.from} </p>      
                        <p>To: {flight.to} </p>
                        <p>Plane:{flight.plane}</p>             
                    </div>)
                })}
            </ul>
        </div>
    );
}

export default FlightList;
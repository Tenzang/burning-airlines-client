import React, { Component } from 'react';

const AirplaneList = (props) => {
    console.log("list rendering...");
    console.log(props.airplanes.airplanes);
    return(
        <div>
            <ul>
                { props.airplanes.airplanes.length } airplanes
                { props.airplanes.airplanes.map(airplane => {
                    return (
                    <div class="airplane-card">
                        <p>name: {airplane.name}</p>
                        <p>rows: {airplane.row}</p>
                        <p>cols: {airplane.col} </p>                   
                    </div>)
                })}
            </ul>
        </div>
    );
}

export default AirplaneList;
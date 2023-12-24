import React from "react";
import LastFiveDays from './LastFiveDays.js';

export default function Chosen() {
    return (
        <div className="col-12 col-md-5 Chosen">
            <h2 className="yourCity big">Your City</h2>
            <span><i className="fa-solid fa-rainbow big" /></span>
            <h2>
                <span className="Temp">Temp </span>
                <span className="Centigrade">33°C</span>
                <span className="Bar"> | </span>
                <span className="Fahrenheit">88°F</span>
            </h2>
            <p className="DayTime">Mon 2:33PM</p>
            <p className="Description">Description</p>
            <p><span className="Humidity">Humidity</span> • <span className="Wind">Wind</span></p>
            <LastFiveDays />
        </div>
    );
  }
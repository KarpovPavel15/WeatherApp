import './weather-on-next-days.scss';
import React from 'react';
import { convertDate, convertToCels } from '../weather';

export const WeatherOnNextDays = props => {
    return props.weather.map(element =>
        <div className="day-info">
            <p>{`Weather on ${convertDate(element.dt_txt)}`}</p>
            <p>{`Max temperature : ${convertToCels(element.main.temp_max)}°C`}</p>
            <p>{`Min temperature : ${convertToCels(element.main.temp_min)}°C`}</p>
        </div>
    );
};

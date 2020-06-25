import React from 'react';
import { convertDate, convertToCels } from '../weather';

export const DayInfo = props => {
    return (
        <div>
            <p>{`Weather on ${convertDate(props.weather.dt_txt)}`}</p>
            <p>{`Max temperature : ${convertToCels(props.weather.main.temp_max)}°C`}</p>
            <p>{`Min temperature : ${convertToCels(props.weather.main.temp_min)}°C`}</p>
        </div>
    )
};

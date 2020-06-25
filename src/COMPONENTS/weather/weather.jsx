import React, { useEffect, useState } from "react";
import { DayInfo } from '../dayInfo/dayInfo';

export const convertToCels = temp => Math.ceil(temp - 273);
export const convertDate = date => date.replace(/^(\d{4})-(\d{2})-(\d{2})/, '$3.$2.$1');

const Weather = props => {

    let [dataTime, setDataTime] = useState(new Date().toLocaleString());
    useEffect(() => {
        setInterval(() => {
            setDataTime(new Date().toLocaleString())
        }, 1000);

    }, [dataTime]);

    return (
        <div>
            <p>{`DataTime : ${dataTime}`}</p>
            {props.city &&
            <div>
                {props.listWeather.map(element => {
                    let dateFromList = convertDate(element.dt_txt.slice(0, 10));
                    return (
                        <div>
                            {dateFromList === dataTime.slice(0, 10) ?
                                <div>
                                    <p>{`Today : ${convertDate(`${element.dt_txt}`)}`}</p>
                                    <p>{`Temperature in ${props.city} = ${convertToCels(`${element.main.temp}`)}°C`}</p>
                                    <p>{`Temperature Max: ${convertToCels(element.main.temp_max)}°C`}</p>
                                    <p>{`Temperature Min: ${convertToCels(element.main.temp_min)}°C`}</p>
                                </div>
                                : <div>{<DayInfo weather={element}/>}</div>
                            }
                        </div>
                    )
                })}

            </div>

            }
            <p>{props.error}</p>
        </div>
    )
};
export default Weather;

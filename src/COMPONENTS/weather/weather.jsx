import './weather.scss'
import React, { useEffect, useState } from 'react';
import { DayInfo } from '../dayInfo';
import { SliderComponent } from '../slider';

export const convertToCels = temp => Math.ceil(temp - 273);
export const convertDate = date => date.replace(/^(\d{4})-(\d{2})-(\d{2})/, '$3.$2.$1');

function groupByDate(arr) {
    if (arr !== undefined) {
        const temp = arr.reduce((acc, elem) => {
            const date = elem.dt_txt.split(' ')[0];
            if (!acc[date]) {
                acc[date] = [];
            }
            acc[date].push(elem);
            return acc;
        }, {});
        return Object.getOwnPropertyNames(temp).map(k => temp[k]);
    } else return null

}

const Weather = props => {

    let [dataTime, setDataTime] = useState(new Date().toLocaleString());
    let weatherGroup = groupByDate(props.listWeather);
    useEffect(() => {
        setInterval(() => {
            setDataTime(new Date().toLocaleString())
        }, 1000);

    }, [dataTime]);

    return (
        <div className="weather">
            <p className="data-time">{`DataTime : ${dataTime}`}</p>
            <div className="weather__area">
                {props.city && weatherGroup.map(element => weatherGroup[0] === element
                    ? <div className="weather__today">
                        <SliderComponent>
                            {element.map(element => <div className="weather__info">
                                <p>{`Today : ${convertDate(`${element.dt_txt}`)}`}</p>
                                <p>{`Current temperature in ${props.city} = ${convertToCels(`${element.main.temp}`)}°C`}</p>
                                <p>{`Temperature Max: ${convertToCels(element.main.temp_max)}°C`}</p>
                                <p>{`Temperature Min: ${convertToCels(element.main.temp_min)}°C`}</p>
                            </div>)}
                        </SliderComponent>
                    </div>
                    : <div className="weather__othersDays">
                        <DayInfo weather={element}/>
                    </div>
                )
                }
            </div>
        </div>
    )
};
export default Weather;

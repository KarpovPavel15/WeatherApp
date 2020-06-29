import React, { useState } from "react";
import Info from "../info/info"
import Form from "../form/form"
import Weather from "../weather/weather"

const API_KEY = "cddb343fd831e892b69e61815949c72d";

export const RootPage = () => {

    const [state, setState] = useState({
        city: undefined,
        listWeather: undefined,
        error: undefined
    });

    const gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        if (city) {
            const api_url = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`);
            const data = await api_url.json();

            let cityName = data.city.name;
            let listWeather = data.list;
            setState({
                city: cityName,
                listWeather: listWeather,
                error: ""
            })
        } else {
            setState({
                city: undefined,
                sunrise: undefined,
                sunset: undefined,
                error: "Input correct data"
            });
        }
    };

    return (
        <div className="root-page">
            <div className="root-page__container">
                <div>
                    <Info/>
                    <Form weatherGet={gettingWeather}/>
                    <Weather
                        city={state.city}
                        listWeather={state.listWeather}
                        error={state.error}
                    />
                </div>
            </div>
        </div>
    )
};

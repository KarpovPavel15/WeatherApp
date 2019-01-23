import React ,{Component} from "react";

const Weather=props=>{
    return(
        <form onSubmit={props.weatherGet}>
            <input type="text" name="city" placeholder="Город"/>
            <button >Get weather</button>
        </form>
    )
};
export default Weather;
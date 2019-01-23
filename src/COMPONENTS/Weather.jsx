import React ,{Component} from "react";

const App=props=>{
        return(
            <div >
                {props.city &&
                <div>
                    <p>Component with weather</p>
                    <p>Temperature in {props.city} = {props.temp}</p>
                    <p>Sunrise := {props.sunrise}</p>
                    <p>Sunset := {props.sunset}</p>
                </div>
                }
                <p>{props.error}</p>
            </div>
        )
    };
export default App;
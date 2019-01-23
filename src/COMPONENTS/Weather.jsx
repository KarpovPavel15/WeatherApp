import React ,{Component} from "react";

export default class App extends Component{
    render() {
        return(
            <div >
                {this.props.city &&
                    <div>
                    <p>Component with weather</p>
                    <p>Temperature in {this.props.city} = {this.props.temp}</p>
                    <p>Sunrise := {this.props.sunrise}</p>
                    <p>Sunset := {this.props.sunset}</p>
                    </div>
                }
            </div>
        )
    }
}
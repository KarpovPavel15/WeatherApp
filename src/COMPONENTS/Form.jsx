import React ,{Component} from "react";

export default class Form extends Component{
    render() {
        return(
            <form onSubmit={this.props.weatherGet}>
                <input type="text" name="city" placeholder="Город"/>
                <button >Get weather</button>
            </form>
        )
    }
}
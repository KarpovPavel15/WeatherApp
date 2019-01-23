import React ,{Component} from "react";
import Info from "./COMPONENTS/Info"
import Form from "./COMPONENTS/Form"
import Weather from "./COMPONENTS/Weather"

const API_KEY ="cddb343fd831e892b69e61815949c72d";

export default class App extends Component{
  state={
    temp:undefined,
    city:undefined,
    sunrise:undefined,
    sunset:undefined,
    error:undefined
  };
  gettingWeather= async (e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    if (city) {
      const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();

      let sunset=data.sys.sunset;
      let sunrise=data.sys.sunrise;
      let dataSS=new Date();
      let dataSR=new Date();
      dataSS.setTime(sunset);
      dataSR.setTime(sunrise);
      let data_ss=dataSS.getHours()+":"+dataSS.getMinutes()+":"+dataSS.getSeconds();
      let data_sr=dataSR.getHours()+":"+dataSR.getMinutes()+":"+dataSR.getSeconds();
      this.setState({
        temp: data.main.temp,
        city: data.name,
        sunrise: data_sr,
        sunset: data_ss,
        error: ""
      })
    }
  };
  render() {
    return(
        <div>
          <Info/>
          <Form weatherGet={this.gettingWeather}/>
          <Weather
              temp={this.state.temp}
              city={this.state.city}
              sunrise={this.state.sunrise}
              sunset={this.state.sunset}
              error={this.state.error}
          />
        </div>
    )
  }
}
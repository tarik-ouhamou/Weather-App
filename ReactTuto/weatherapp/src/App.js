import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title.js';
import Form from './components/Form.js';
import Weather from './components/Weather.js';
import hat from './img/hat.jpg';
import heavyCoat from './img/heavyCoat.jpg';
import hoodie from './img/hoodie.jpg';
import jacket from './img/jacket.jpg';
import pants from './img/pants.jpg';
import short from './img/short.jpg';
import sneakers from './img/sneakers.jpg';
import tShirt from './img/tShirt.jpg';
import umbrella from './img/umbrella.jpg'

const API_KEY="8f693c6e5f4d72def57b5bc141825c1a";

class App extends React.Component {
  state={
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined,
    head:"",
    torso:"",
    leg:"",
    foot:"",
    show:"none",
    rain:""
  }
  getWeather=async (e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data=await api_call.json();
    if(city && country){
      console.log(data);
      let head="";
      let torso="";
      let leg="";
      let foot="";
      let rain="";
      let test=/rain/.test(data.weather[0].description);
      console.log(test);
      if(data.main.temp>=24){
        if(!test){
          head="";
          torso=tShirt;
          leg=short;
          foot=sneakers;
          rain="";
        }
        else{
          head="";
          torso=tShirt;
          leg=short;
          foot=sneakers;
          rain=umbrella;
        }
      }
      else if(data.main.temp>=10 && data.main.temp<24){
        if(!test){
          head="";
          torso=tShirt;
          leg=short;
          foot=sneakers;
          rain="";
        }
        else{
          head="";
          torso=tShirt;
          leg=short;
          foot=sneakers;
          rain=umbrella;
        }
      }
      else{
        if(!test){
          head="";
          torso=tShirt;
          leg=short;
          foot=sneakers;
          rain="";
        }
        else{
          head="";
          torso=tShirt;
          leg=short;
          foot=sneakers;
          rain=umbrella;
        }
      }
      this.setState({
        temperature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:"",
        head:head,
        torso:torso,
        leg:leg,
        foot:foot,
        show:"",
        rain:rain
      });
    }
    else{
      this.setState({
        temperature:undefined,
        city:undefined,
        country:undefined,
        humidity:undefined,
        description:undefined,
        error:"Enter a city and a contry",
        img:""
      });
    }
  }
  render(){
    return (
      <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Title />
              </div>
              <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather} />
                <Weather temperature={this.state.temperature}
                 city={this.state.city}
                 country={this.state.country}
                 humidity={this.state.humidity}
                 description={this.state.description}
                 error={this.state.error}
                 />
                 <div className="images" style={{display:this.state.show}}>
                  <h3 style={{color:"white"}}>Suggestions for clothing</h3>
                  {this.state.rain ? <img src={this.state.rain} style={{width:"100px", height:"100px"}} />:<span></span> }
                   {this.state.head ? <img src={this.state.head} style={{width:"100px", height:"100px"}} />:<span></span> }
                   <img src={this.state.torso} style={{width:"100px", height:"100px"}} />
                   <img src={this.state.leg} style={{width:"100px", height:"100px"}} />
                   <img src={this.state.foot} style={{width:"100px", height:"100px"}} />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
      </div>
    );
  }
}
export default App;

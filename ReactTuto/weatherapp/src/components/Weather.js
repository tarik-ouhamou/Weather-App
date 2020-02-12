import React from "react";

class Weather extends React.Component{
  render(){
    return (
      <div>
        {this.props.city && <p style={{color:"white"}}>City : {this.props.city}</p>}
        {this.props.country && <p style={{color:"white"}}>Country: {this.props.country}</p>}
        {this.props.temperature && <p style={{color:"white"}}>Temperature : {this.props.temperature}</p>}
        {this.props.humidity && <p style={{color:"white"}}>Humidity : {this.props.humidity}</p>}
        {this.props.description && <p style={{color:"white"}}>Description : {this.props.description}</p>}
        {this.props.error && <p style={{color:"white"}}>Errors : {this.props.error}</p>}
      </div>
    )
  }
}

export default Weather;

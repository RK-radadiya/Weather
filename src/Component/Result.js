import React, { Component } from "react";
import Loader from "./Loader";

export class Result extends Component {
  render() {
    let { weatherData: wdata } = this.props;
    // console.log("wdata", wdata);

    const ktoc = (k) => {
      return (k - 275.15).toFixed(2) + " °c";
    }

    const getTime = (time) => {
      const date = new Date(time * 1000);
      // console.log(date);
      return date.toLocaleTimeString()
    }

    let showData;

    if (this.props.weatherData === null) {
      if (this.props.loader === true) {
        showData = <Loader></Loader>;
      } else {
        showData = "";
      }
    } else {
      showData = (
        <div className="mt-5 w-75 mx-auto d-block">
          <h3 className="text-center">{wdata.name}</h3>
          <img src={`https://openweathermap.org/img/wn/${wdata.weather[0].icon}@2x.png`} alt=""></img>
          <span>{wdata.weather[0].description}</span>
          <table className="table">
            {/* <thead>
              <tr>
              <th scope="col"></th>
              </tr> 
            </thead> */}
            {/* <div> */}

            {/* </div> */}
            <tbody>
              {/* <tr>
                <th>
                  <h3 className="text-center">{wdata.name}</h3>
                </th>
              </tr> */}
              <tr>
                <th scope="row">Feels Like</th>
                <td>{ktoc(wdata.main.feels_like)}</td>
              </tr>
              <tr>
                <th scope="row">Min Temp</th>
                <td>{ktoc(wdata.main.temp_min)}</td>
              </tr>
              <tr>
                <th scope="row">Max Temp</th>
                <td colSpan="2">{ktoc(wdata.main.temp_max)}</td>
              </tr>
              <tr>
                <th scope="row">Sun Rise</th>
                <td colSpan="2">{getTime(wdata.sys.sunrise)}</td>
              </tr>
              <tr>
                <th scope="row">Sun set</th>
                <td colSpan="2">{getTime(wdata.sys.sunset)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
    return <>{showData}</>
  }
}

export default Result;

import React, { Component } from "react";
import Search from "./Search";
import axios from "axios";
import Result from "./Result";
// import SearchShowData from "./SearchShowData";
import Recent from "./Recent";

class Weather extends Component {
  constructor() {
    super();

    this.state = {
      lat: "",
      lon: "",
      city: "",
      weatherData: null,
      loader: false,
      recent: [],
    };
  }

  inputChangeHandler = (e) => {
    console.log(e.target.name);
    const name = e.target.name;
    if (name === "city") {
      this.setState({
        city: e.target.value,
      });
    } else if (name === "lat") {
      this.setState({
        lat: e.target.value,
      });
    } else if (name === "lon") {
      this.setState({
        lon: e.target.value,
      });
    } else {
      console.log("Name not valid");
    }
  };

  locationHandler = (e) => {
    e.preventDefault();

    // alert("uhgu");
    this.setState({
      loader: true,
    });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (res) => {
          console.log(res);
          setTimeout(() => {
            this.setState({
              lat: res.coords.latitude,
              lon: res.coords.longitude,
            });
            const { latitude, longitude } = res.coords;
            axios
              .get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=918143b0eefc0f657a9fd7cfb83be26c`
              )
              .then((res) => {
                console.log(res);
                this.setState(
                  {
                    city: res.data.name,
                    weatherData: res.data,
                    loader: false,
                  },
                  () => {
                    this.recentDataHandler();
                  }
                );
              })
              .catch((err) => {
                console.log(err);
              });
          }, 1000);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      console.log("geolocation is not supported");
    }
  };

  searchHandler = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=918143b0eefc0f657a9fd7cfb83be26c`
      )
      .then((res) => {
        console.log(res);
        this.setState(
          {
            city: res.data.name,
            weatherData: res.data,
          },
          () => {
            this.recentDataHandler();
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  recentDataHandler = () => {
    // console.log(this.state.recent)
    const Recent = this.state.recent;
    console.log(Recent);
    Recent.push({
      city: this.state.city,
      lat: this.state.lat,
      lon: this.state.lon,
    });
    this.setState({
      Recent,
    });
  };

  researchHandler = (lat, lon) => {
    // alert("ghudfh");

    // this.setState({
    //   lat:lat,
    //   lon:lon,
    // })
  axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=918143b0eefc0f657a9fd7cfb83be26c`
      )
      .then((res) => {
        console.log(res);
        this.setState({
          city: res.data.name,
          weatherData: res.data,
          loader: false,
          lat: lat,
          lon: lon,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    // console.log(this.state);
    return (
      <>
        <Search
          lat={this.state.lat}
          lon={this.state.lon}
          city={this.state.city}
          change={this.inputChangeHandler}
          location={this.locationHandler}
          search={this.searchHandler}
        ></Search>
        <Result
          loader={this.state.loader}
          weatherData={this.state.weatherData}
        ></Result>
        {/* <SearchShowData
          // search={this.searchHandler}
          lat={this.state.lat}
          lon={this.state.lon}
          city={this.state.city}
          change={this.inputChangeHandler}
        ></SearchShowData> */}
        <Recent
          research={this.researchHandler}
          recent={this.state.recent}
        ></Recent>
      </>
    );
  }
}
export default Weather;

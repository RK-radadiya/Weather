import React, { Component } from "react";

class SearchShowData extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }
  render() {
    return (
      <>
        <div className="mt-5 w-75 mx-auto d-block">
          <p>city name :{this.props.city}</p>
          <p>Latitude :{this.props.lat}</p>
          <p>Longitude :{this.props.lon}</p>

          {/* <h3 className="text-center">{wdata.name}</h3> */}
          {/* <table className="">
            <tbody>
              <tr>
                <th scope="row">City Name</th>
                <td>{wdata.main.feels_like}</td>
              </tr>
              <tr>
                <th scope="row">Latitude</th>
                <td>{wdata.main.temp_min}</td>
              </tr>
              <tr>
                <th scope="row">Longitude</th>
                <td colSpan="2">{wdata.main.temp_max}</td>
              </tr>
            </tbody>
          </table> */}
        </div>
      </>
    );
  }
}
export default SearchShowData;

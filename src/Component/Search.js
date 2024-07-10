import React, { Component } from "react";


export class Search extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }
  render() {
    return (
      <>
        <section className="container mt-5">
          <div className="row">
            <div className="col-5">
              <form className="">
                <div className="mb-3">
                  <label className="form-label">Enter City Name</label>
                  <input
                    type="text"
                    name="city"
                    onChange={this.props.change}
                    value={this.props.city}
                    className="form-control"
                    placeholder="Enter City Name"
                  />
                </div>
              </form>
            </div>
            <div className="col-1 justify-content-center d-flex align-items-center ">
              <span>OR</span>
            </div>
            <div className="col-6">
              <form className="">
                <div className="mb-3">
                  <button className="btn d-flex align-items-center ">
                    <span className="me-2"> Get Co-ordinate</span>
                    <span
                      className="material-symbols-outlined"
                      onClick={this.props.location}
                    >
                      my_location
                    </span>
                  </button>
                </div>
                <div className="mb-3">
                  <label className="form-label">Lat:</label>
                  <input
                    onChange={this.props.change}
                    type="number"
                    name="lat"
                    value={this.props.lat}
                    className="form-control"
                    placeholder="Enter Latitude"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Lon:</label>
                  <input
                    onChange={this.props.change}
                    type="number"
                    name="lon"
                    value={this.props.lon}
                    className="form-control"
                    placeholder="Enter Longitude"
                  />
                </div>
                <button className="btn d-flex align-items-center ">
                  <span className="me-2">Search</span>
                  <span
                    onClick={this.props.search}
                    className="material-symbols-outlined"
                  >
                    search
                  </span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Search;

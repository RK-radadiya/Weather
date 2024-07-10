import React, { Component } from "react";

export class Recent extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }
  render() {
    return (
      <>
        <div className="container mt-5">
          <div className="ms">
            <ul className="text-left list-unstyled">
              <h3 className="text-center">Recent Data</h3>
              {this.props.recent.map((data, index) => {
                return (
                  <ul key={index}>
                    <li
                      className="text-Success"
                      onClick={() => this.props.research(data.lat, data.lon)}
                      
                    >
                      {data.city}
                      <span className="ps-4 ">
                        <span className="fw-bold">latitude :</span> {data.lat}
                      </span>
                      <span className="ps-4 ">
                        <span className="fw-bold">longitude :</span> {data.lon}
                      </span>
                    </li>
                  </ul>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Recent;

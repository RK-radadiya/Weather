import React, { Component } from "react";
import BarLoader from "react-spinners/BarLoader";

class Loader extends Component {
  render() {
    return (
      <>
        <section className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center mt-5">
              {/* <div > */}
              <BarLoader color="#36d7b7" width={300} height={6} />

              {/* </div> */}
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Loader;

import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <>
        <section className="container-fluid">
          <div className="row">
            <div className="col-12">
              <img
                width={100}
                // height={100}
                src="assets/image/logo.png"
                className="mx-auto d-block mt-5 pt-5"
                alt="logo"
              />
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Home;

import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Weather from "./Component/Weather";
// import SearchShowData from "./Component/SearchShowData";
// import Loader from "./Component/Loader";

class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        {/* <SearchShowData></SearchShowData> */}
        {/* <Loader></Loader> */}
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/weather" element={<Weather></Weather>}></Route>
        </Routes>
      </>
    );
  }
}
export default App;

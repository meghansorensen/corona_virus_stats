import React, { Component } from "react";
import axios from "axios";
import { render } from "@testing-library/react";

class Covid extends Component {
  state = {
    cases: []
  };

  componentDidMount() {
    axios.get("https://thevirustracker.com/free-api?global=stats").then(res => {
      this.setState({ cases: res.data.results });
    });
  }

  render() {
    return (
      <div>
        {this.state.cases.map(item => (
          <React.Fragment>
            <h1>Total Cases: {item.total_cases}</h1>
            <h1>Total Recovered: {item.total_recovered}</h1>
            <h1>Total Unresolved: {item.total_unresolved}</h1>
            <h1>Total Deaths: {item.total_deaths}</h1>
            <h1>Total New Cases Today: {item.total_new_cases_today}</h1>
            <h1>Total New Deaths Today: {item.total_new_deaths_today}</h1>
            <h1>Total Active Cases: {item.total_active_cases}</h1>
            <h1>Total Serious Cases: {item.total_serious_cases}</h1>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default Covid;

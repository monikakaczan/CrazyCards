import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employmentType: "partTime",
      annualIncome: "lowerIncome"
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.callback(this.state);
  };

  handleEmploymentType = event => {
    this.setState({
      employmentType: event.target.value
    });
  };

  handleAnnualIncome = event => {
    this.setState({
      annualIncome: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Emoployment type</label>
          <select
            value={this.state.employmentType}
            onChange={this.handleEmploymentType}
          >
            <option value="partTime">Part-time</option>
            <option value="fullTime">Full-time</option>
            <option value="student">Student</option>
          </select>
        </div>
        <div>
          <label>Annual income</label>
          <select
            value={this.state.annualIncome}
            onChange={this.handleAnnualIncome}
          >
            <option value="lowerIncome">less than £16,000</option>
            <option value="higherIncome">more than £16,000</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

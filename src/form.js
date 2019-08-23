import React, { Component } from "react";

class Form extends Component {
   constructor(props) {
     super(props)
     this.state = {
       employmentType: '',
       annualIncome: ''
     }

     this.callback = props.callback
   }

    handleSubmit = event => {
     event.preventDefault()
     this.callback(this.state)
  }

  handleEmploymentType = (event) => {
    this.setState({
      employmentType: event.target.value
    });
  };

  handleAnnualIncome = (event) => {
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
            <option value="part-time">Part-time</option>
            <option value="full-time">Full-time</option>
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

const cardList = [
  {
    id: 0,
    name: "Student Life",
    employmentType: ["student"],
    annualIncome: ["less than £16,000"],
    avaliableCredit: 1200
  },
  {
    id: 1,
    name: "Anywhere Card",
    employmentType: ["student", "part-time", "full-time"],
    annualIncome: ["more than £16,000"],
    avaliableCredit: 300
  },
  {
    id: 2,
    name: "Liquid Card",
    employmentType: ["student", "part-time", "full-time"],
    annualIncome: ["more than £16,000"],
    avaliableCredit: 3000
  }
];

function validateProperty(person, cardList, property) {
  return cardList.filter(card => card[property].includes(person[property]));
}

const Cards = (props) => {
  const employmentTypeQualified = validateProperty(
    props.person,
    cardList,
    "employmentType"
  );

  return employmentTypeQualified.map(card => <p>{card.name}</p>);
};

export default Form;

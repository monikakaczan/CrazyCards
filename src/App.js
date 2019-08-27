import React, { Component } from "react";
import { Form } from "./form";
import { Cards } from "./Cards";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { person: {} };
  }

  setPerson = formState => {
    this.setState({ person: formState });
  };

  render() {
    return (
      <div className="App">
        <Form callback={this.setPerson} />
        <Cards person={this.state.person} />
      </div>
    );
  }
}

export default App;

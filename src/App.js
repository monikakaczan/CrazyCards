import React, { Component } from "react";
import Form from "../src/form";
import Cards from "../src/form";

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

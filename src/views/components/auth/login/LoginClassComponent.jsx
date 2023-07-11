import React, { Component } from "react";
import "../../../../styles/login/LoginClassComponent.css"
// import "../../../../styles/form/FormComponent.css"

class LoginClassComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ""
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      this.setState({ name: e.target.value });
    }

    handleEliteGuyOne() {
      return (
        <div>
          <p style={{ color: "black" }}>What's up Daruz</p>
        </div>
      );
    }

    handleEliteGuyTwo() {
      return (
        <div>
          <p style={{ color: "black" }}>What's up Luiz</p>
        </div>
      );
    }

    handleEliteGuyThree() {
      return (
        <div>
          <p style={{ color: "black" }}>What's up Diogo</p>
        </div>
      );
    }

    handleEliteGuyFour() {
      return (
        <div>
          <p style={{ color: "black" }}>What's up Salah</p>
        </div>
      );
    }

    handleEliteGuyFive() {
      return (
        <div>
          <p style={{ color: "black" }}>What's up Arnold</p>
        </div>
      );
    }

    handleEliteGuySix() {
      return (
        <div>
          <p style={{ color: "black" }}>What's up Firmino</p>
        </div>
      );
    }

    renderGreeting() {
      const { name } = this.state;

      if (
        name === "Dacruz" ||
        name === "Luiz" ||
        name === "Diogo" ||
        name === "Salah" ||
        name === "Arnold" ||
        name === "Firmino"
      ) {
        return <p className="greeting">What's up {name}</p>;
      } else {
        return <p className="not-found">Name not found</p>;
      }
    }

    render() {
      return (
        <div>
          {this.renderGreeting()}
          <label>Name</label>
          <input type="text" value={this.state.name} onChange={this.handleChange} />
        </div>
      );
    }
  }

  export default LoginClassComponent;
  

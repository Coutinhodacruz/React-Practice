import React, { Component } from "react";
import "./Elite.css";

class Elite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
      temperature: 16,
      acName: "",
    };
  }

  handlePower = () => {
    this.setState((prevState) => ({
      isOn: !prevState.isOn,
    }));
  };

  handleIncrement = () => {
    this.setState((prevState) => {
      if (prevState.isOn && prevState.temperature < 30) {
        return {
          temperature: prevState.temperature + 1,
        };
      }
      return null;
    });
  };

  handleDecrement = () => {
    this.setState((prevState) => {
      if (prevState.isOn && prevState.temperature > 16) {
        return {
          temperature: prevState.temperature - 1,
        };
      }
      return null;
    });
  };

  render() {
    const { isOn, temperature } = this.state;

    return (
        <section>
        <div className="elite-container">
          <p className="temperature">{temperature}</p>
          <div className="buttons-container">
            <button className="power-btn" onClick={this.handlePower}>
              {isOn ? "Turn Off" : "Turn On"}
            </button>
            <div className="increment-decrement">
              <button
                  className="increment-btn"
                  onClick={this.handleIncrement}
                  disabled={!isOn || temperature >= 30}
              >
                temp+
              </button>
              <button
                  className="decrement-btn"
                  onClick={this.handleDecrement}
                  disabled={!isOn || temperature <= 16}
              >
                temp-
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Elite;

import React, { Component } from "react";
import "./CreateSample.css";
import OscillatorSettings from "../OscillatorSettings/OscillatorSettings";

export default class CreateSample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sampleSum: [
        {
          length: 1,
          source: "",
          detune: 0,
          frequency: 440,
          volume: 1,
          waveType: "sine",
        }
      ],
      sampleAssignment: 1,
      samplerRows: 1
    };
  }

  createSample = () => {
    this.props.onSampleChange(this.state);
    this.setState({
      sampleSum: [
        {
          length: 1,
          source: "",
          detune: 0,
          frequency: 440,
          volume: 1,
          waveType: "sine",
          sampleAssignment: 1
        }
      ],
      samplerRows: 1
    });
  };

  addAdditionalSample = () => {
    this.setState({
      samplerRows: this.state.samplerRows + 1
    });
  };

  render() {
    const samplerRows = [];
    for (let i = 0; i < this.state.samplerRows; i++) {
      samplerRows.push(
        <OscillatorSettings onSampleChange={this.props.onSampleChange} id={i} />
      );
    }

    return (
      <div className="sampler-background">
        <section className="sampler-section">
          {samplerRows}
          <button onClick={this.createSample}>Create Sample</button>
          <button onClick={this.addAdditionalSample}>
            Add Additional Sample
          </button>
        </section>
      </div>
    );
  }
}

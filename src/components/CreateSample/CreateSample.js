import React, { Component } from "react";
import "./CreateSample.css";

export default class CreateSample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      length: 1,
      source: "",
      frequency: 440,
      detune: 0,
      volume: 1,
      waveType: "sine"
    };
  }

  createSample = () => {
    this.props.onSampleChange(this.state);
    this.setState({
      length: 1,
      source: "",
      detune: 0,
      frequency: 440,
      volume: 1,
      waveType: "sine",
      samplePad: ""
    });
  };

  handleSampleChange = e => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  };

  render() {
    const padAssignment = [];
    (function samplePads(numberOfPads) {
      for (let i = 0; i < numberOfPads; i++) {
        padAssignment.push(<option value={i}>{i}</option>)
      }
    })(16)

    return (
      <div className="sampler-background">
        <section className="sampler-section">
          <form>
            <label>
              Frequency:
              <input
                name="frequency"
                type="text"
                value={this.state.frequency}
                onChange={this.handleSampleChange}
              />
            </label>
            <label>
              Wave type:
              <select
                name="waveType"
                value={this.state.waveType}
                onChange={this.handleSampleChange}
              >
                <option value="sine">Sine</option>
                <option value="square">Square</option>
                <option value="sawtooth">Sawtooth</option>
                <option value="triangle">Triangle</option>
              </select>
            </label>
            <label>
              Detune:
              <input
                name="detune"
                type="text"
                value={this.state.detune}
                onChange={this.handleSampleChange}
              />
            </label>
            <label>
              Length
              <input
                name="length"
                type="text"
                value={this.state.length}
                onChange={this.handleSampleChange}
              />
            </label>
          </form>
        </section>
        <label>
          Assign to sample pad:
          <select
            name="assignToSampler"
            value={this.state.waveType}
            onChange={this.handleSampleChange}
          >
            {padAssignment}
          </select>
        </label>
        <button onClick={this.createSample}>Create Sample</button>
      </div>
    );
  }
}

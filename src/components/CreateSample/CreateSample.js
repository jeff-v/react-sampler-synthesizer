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
          waveType: "sine"
        }
      ],
      sampleAssignment: 1,
      samplerRows: 1,
      newOscillatorObject: {}
    };
  }

  createSample = () => {
    this.props.onSampleChange(this.state);
    this.setState({
      sampleSum: [
        {
          id: 1,
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

  handleSampleChange = e => {
    const { newOscillatorObject } = this.state
    const value = e.target.value;
    const id = e.target.id;
    let sampleSumCopy = this.state.sampleSum;
    newOscillatorObject[e.target.name] = value
    console.log(newOscillatorObject)
    sampleSumCopy[id] = newOscillatorObject
    this.setState({
      sampleSum: sampleSumCopy
    });
  };

  onOscillatorSubmit = e => {
    const { newOscillatorObject } = this.state

    // this.setState( {
    //   sampleSum: newSampleSum
    // })
  };

  addAdditionalSample = () => {
    this.setState({
      samplerRows: this.state.samplerRows + 1
    });
  };

  render() {
    const padAssignment = [];
    (function samplePads(numberOfPads) {
      for (let i = 0; i < numberOfPads; i++) {
        padAssignment.push(
          <option value={i} key={i}>
            {i}
          </option>
        );
      }
    })(16);

    const samplerRows = [];
    for (let i = 0; i < this.state.samplerRows; i++) {
      samplerRows.push(
        <OscillatorSettings handleSampleChange={this.handleSampleChange} sampleSum={this.state.sampleSum} id={i} />
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
        <label>
          Assign to sample pad:
          <select
            name="assignToSampler"
            value={this.state.sampleAssignment}
            onChange={this.handleSampleChange}
          >
            {padAssignment}
          </select>
        </label>
      </div>
    );
  }
}

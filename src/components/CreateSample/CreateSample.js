import React, { Component } from "react";
import "./CreateSample.css";
import OscillatorSettings from "../OscillatorSettings/OscillatorSettings";
// import Effects from "../Effects/Effects";

export default class CreateSample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      length: "",
      source: "",
      detune: "",
      frequency: "",
      volume: "",
      waveType: "",
      oscillatorObject: {
        0: {}
      },
      sampleAssignment: 1,
      samplerRows: 1,
      defaultOscillator: {
        length: 1,
        detune: 0,
        frequency: 440,
        volume: 1,
        waveType: "sine"
      }
    };
  }

  createSample = () => {
    let { oscillatorObject, sampleAssignment } = this.state;

    oscillatorObject.sampleAssignment = sampleAssignment
    this.props.onSampleChange(oscillatorObject);
    this.setState({
      length: "",
      source: "",
      detune: "",
      frequency: "",
      volume: "",
      waveType: "",
      oscillatorObject: {
        0: {}
      },
      sampleAssignment: 1,
      samplerRows: 1,
      defaultOscillator: {
        length: 1,
        detune: 0,
        frequency: 440,
        volume: 1,
        waveType: "sine"
      }
    });
  };

  handleSampleChange = e => {
    const { defaultOscillator } = this.state;

    const value = e.target.value;
    const name = e.target.name;
    const id = e.target.id;

    let newOscillator = {};
    newOscillator[id] = Object.assign(defaultOscillator);
    let iteratedOscillator = {};
    iteratedOscillator[id] = Object.assign(
      defaultOscillator,
      (newOscillator[id] = { [name]: value })
    );

    this.setState({
      oscillatorObject: {
        [id]: {
          frequency: iteratedOscillator[id].frequency,
          detune: iteratedOscillator[id].detune,
          length: iteratedOscillator[id].length,
          volume: iteratedOscillator[id].volume,
          waveType: iteratedOscillator[id].waveType
        }
      }
    });
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
        <OscillatorSettings
          handleSampleChange={this.handleSampleChange}
          frequency={this.state.oscillatorObject[i].frequency}
          length={this.state.oscillatorObject[i].length}
          detune={this.state.oscillatorObject[i].detune}
          volume={this.state.oscillatorObject[i].volume}
          waveType={this.state.oscillatorObject[i].waveType}
          id={i}
          key={i}
        />
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
        {/* <Effects
          delay={this.state.effects.delay}
          reverb={this.state.effects.reverb}
          posiiton={this.state.effects.position}
          panning={this.state.effects.panning}
          handleEffectChange={this.handleEffectChange}
        /> */}
      </div>
    );
  }
}

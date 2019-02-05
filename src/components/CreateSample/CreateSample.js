import React, { Component } from "react";
import "./CreateSample.css";
import OscillatorSettings from "../OscillatorSettings/OscillatorSettings";
// import Effects from "../Effects/Effects";

export default class CreateSample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sampleSum: [],
      length: "",
      source: "",
      detune: "",
      frequency: "",
      volume: "",
      waveType: "",
      // effects: {
      //   delay: 0,
      //   panning: 0,
      //   position: {
      //     positionX: 0,
      //     positionY: 0,
      //     positionZ: 0,
      //     forwardX: 0,
      //     forwardY: 0,
      //     forwardZ: 0,
      //     upX: 0,
      //     upY: 0,
      //     upZ: 0
      //   },
      //   reverb: {
      //     roomSize: "",
      //     dampening: "",
      //     wet: "",
      //     dry: ""
      //   }
      // },
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
    const { sampleSum, oscillatorObject } = this.state;
    console.log(oscillatorObject);
    sampleSum.push(oscillatorObject);
    this.props.onSampleChange(sampleSum);
    this.setState({
      sampleSum: [],
      length: "",
      source: "",
      detune: "",
      frequency: "",
      volume: "",
      waveType: ""
    });
  };

  handleSampleChange = e => {
    const { defaultOscillator } = this.state;

    const value = e.target.value;
    const name = e.target.name;
    const id = e.target.id;

    let newOscillator = Object.create(defaultOscillator);
    newOscillator[id] = { [name]: value };

    this.setState({
      frequency: newOscillator[id].frequency,
      detune: newOscillator[id].detune,
      length: newOscillator[id].length,
      volume: newOscillator[id].volume,
      waveType: newOscillator[id].waveType
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
          frequency={this.state.frequency}
          length={this.state.length}
          detune={this.state.detune}
          volume={this.state.volume}
          waveType={this.state.waveType}
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

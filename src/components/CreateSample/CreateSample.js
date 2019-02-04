import React, { Component } from "react";
import "./CreateSample.css";
import OscillatorSettings from "../OscillatorSettings/OscillatorSettings";
// import Effects from "../Effects/Effects";

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
      oscillatorObject: {
        0: {
          length: 1,
          source: "",
          detune: 0,
          frequency: 440,
          volume: 1,
          waveType: "sine"
        }
      },
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
      samplerRows: 1
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
    let { oscillatorObject } = this.state;
    const value = e.target.value;
    const name = e.target.name
    const id = e.target.id;
    oscillatorObject[id] = { [name]: value };
    console.log(oscillatorObject)
    this.setState({
      oscillatorObject: oscillatorObject
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
          sampleSum={this.state.oscillatorObject}
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

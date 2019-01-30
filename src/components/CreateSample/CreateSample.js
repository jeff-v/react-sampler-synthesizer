import React, { Component } from "react";

export default class CreateSample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      length: "",
      source: "",
      frequency: "",
      detune: "",
      volume: "",
      waveType: "sine",
      osc: {},
      gainNode: {}
    };
  }

  createSample = () => {
    const AudioContext = window.AudioContext;
    const audioCtx = new AudioContext();

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    console.log(this.state);
    this.setState(
      {
        currentSample: {
          osc: osc,
          gainNode: gainNode
        }
      },
      this.updateSamples(this.state)
    );
  };

  updateSamples = sample => {
    this.props.onSampleChange(sample);
    this.setState({
      length: "",
      source: "",
      detune: "",
      frequency: "",
      volume: "",
      waveType: "",
      osc: {},
      gainNode: {}
    });
  };

  handleSampleChange = e => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <section>
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
        <button onClick={this.createSample}>Create Sample</button>
      </div>
    );
  }
}

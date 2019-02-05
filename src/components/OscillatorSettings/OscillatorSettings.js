import React, { Component } from "react";

export default class OscillatorSettings extends Component {
  render() {
    const { length, detune, frequency, volume, waveType, id, handleSampleChange } = this.props

    return (
        <form>
          <label>
            Frequency:
            <input
              id={id}
              name="frequency"
              type="number"
              value={frequency}
              onChange={handleSampleChange}
            />
          </label>
          <label>
            Wave type:
            <select
              id={id}
              name="waveType"
              value={waveType}
              onChange={handleSampleChange}
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
              id={id}
              name="detune"
              type="number"
              value={detune}
              onChange={handleSampleChange}
            />
          </label>
          <label>
            Length
            <input
              id={id}
              name="length"
              type="number"
              value={length}
              onChange={handleSampleChange}
            />
          </label>
          <label>
            Volume
            <input
              id={id}
              name="volume"
              type="number"
              value={volume}
              onChange={handleSampleChange}
            />
          </label>
        </form>
    );
  }
}

OscillatorSettings.defaultProps = {
  length: 1,
  detune: 0,
  frequency: 440,
  volume: 1,
  waveType: "sine"
};
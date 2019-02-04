import React, { Component } from "react";

export default class OscillatorSettings extends Component {

  render() {
    return (
        <form>
          <label>
            Frequency:
            <input
              id={this.props.id}
              name="frequency"
              type="number"
              value={this.props.frequency}
              onChange={this.props.handleSampleChange}
            />
          </label>
          <label>
            Wave type:
            <select
              id={this.props.id}
              name="waveType"
              value={this.props.waveType}
              onChange={this.props.handleSampleChange}
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
              id={this.props.id}
              name="detune"
              type="number"
              value={this.props.detune}
              onChange={this.props.handleSampleChange}
            />
          </label>
          <label>
            Length
            <input
              id={this.props.id}
              name="length"
              type="number"
              value={this.props.length}
              onChange={this.props.handleSampleChange}
            />
          </label>
          <label>
            Volume
            <input
              id={this.props.id}
              name="volume"
              type="number"
              value={this.props.volume}
              onChange={this.props.handleSampleChange}
            />
          </label>
        </form>
    );
  }
}

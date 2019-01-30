import React, { Component } from "react";

export default class CreateSample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSample: {
        length: "",
        source: "",
        tone: "",
        volume: ""
      }
    };
  }

  modifySampleLength = e => {};

  modifyTone = e => {
    this.setState({
      currentSample: {
        tone: e.target.value
      }
    })
  };

  createSample = () => {
    const currentSample = this.state;
    this.props.onSampleChange(currentSample);
    this.setState({
      currentSample: {
        length: '',
        source: '',
        tone: '',
        volume: ''
      }
    })
  };

  render() {
    return (
      <div>
        <section>
          <form>
            <label>
              Tone in Hz:
              <input
                type="text"
                value={this.state.tone}
                onChange={this.modifyTone}
              />
            </label>
          </form>
        </section>
        <button onClick={this.createSample}>Create Sample</button>
      </div>
    );
  }
}

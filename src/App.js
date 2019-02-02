import React, { Component } from "react";
import CreateSample from "./components/CreateSample/CreateSample";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      samples: [],
      buttons: [],
      numberOfPads: 16
    };
  }

  componentDidMount() {
    const samples = [];
    for (let i = 0; i < this.state.numberOfPads; i++) {
      samples.push({})
    }
    this.setState({
      samples: samples
    })
  }

  playSample = e => {
    console.log(e.target)
    const sample = JSON.parse(e.target.value);
    console.log(sample)
    const AudioContext = window.AudioContext;
    const audioCtx = new AudioContext();

    sample.forEach((settingObject) => {
      const osc = audioCtx.createOscillator();
      osc.detune.value = settingObject.detune;
      osc.frequency.value = settingObject.frequency;
      osc.type = settingObject.waveType

      const gainNode = audioCtx.createGain();
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      osc.start(0);
      gainNode.gain.value = settingObject.volume;
      setTimeout(() => osc.stop(), settingObject.length * 1000);
    })

  };

  onSampleChange = e => {
    let sampleOrderCopy = this.state.samples
    sampleOrderCopy[e.sampleAssignment - 1] = e.sampleSum
    this.setState({
      samples: sampleOrderCopy
    });
  };

  render() {
    const buttonArray = [];
    for (let i = 0; i < 16; i++) {
      buttonArray.push(
        <button
          className={i}
          onClick={this.playSample}
          value={JSON.stringify(this.state.samples[i])}
        />
      );
    }

    const samplerButtons = buttonArray.map((button, i) => {
      return (
        <div className="box" key={i}>
          {button}
        </div>
      );
    });

    return (
      <div className="">
        <section className="wrapper">{samplerButtons}</section>
        <CreateSample onSampleChange={this.onSampleChange} />
      </div>
    );
  }
}

export default App;

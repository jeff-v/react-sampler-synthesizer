import React, { Component } from "react";
import CreateSample from './components/CreateSample/CreateSample';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      samples: [],
      buttons: []
    };
  }

  playSample = (e) => {
    const sample = JSON.parse(e.target.value);
    const AudioContext = window.AudioContext;
    const audioCtx = new AudioContext();

    const osc = new OscillatorNode(audioCtx, {
      type: sample.type,
      detune: sample.detune,
      frequency: sample.frequency
    });

    const gainNode = audioCtx.createGain();
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    osc.start(0)
    gainNode.gain.value = 0.001;
    console.log(osc, gainNode)
    window.setTimeout(osc.disconnect(), sample.length)
  }

  onSampleChange = (e) => {
    this.setState(prevState => ({
      samples: [...prevState.samples, e]
    }))
  }

  render() {
    const buttonArray = [];
    for (let i = 0; i < 16; i++) {
      buttonArray.push(<button className={i} onClick={this.playSample} value={JSON.stringify(this.state.samples[i])} />);
    }

    const samplerButtons = buttonArray.map((button, i) => {
      return <div className="box" key={i}>{button}</div>;
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

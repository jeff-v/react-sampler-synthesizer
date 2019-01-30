import React, { Component } from "react";
import styles from "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      source: {},
      oscillator: {},
      samples: [],
      buttons: []
    };
  }

  componentDidMount() {
    const buttonArray = [];
    for (let i = 0; i < 16; i++) {
      buttonArray.push(<button className={i} />);
    }

    const AudioContext = window.AudioContext;
    const audioCtx = new AudioContext();

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    this.setState({
      oscillator: osc,
      source: osc,
      buttons: buttonArray
    });
  }

  createSample = e => {
    this.state.oscillator.start();
    e.preventDefault();
  };

  render() {
    const { buttons } = this.state;
    const samplerButtons = buttons.map(button => {
      return <div className="box">{button}</div>;
    });

    return (
      <div className="">
        <section className="wrapper">{samplerButtons}</section>
        <button onClick={this.createSample}>Create Sample</button>
      </div>
    );
  }
}

export default App;

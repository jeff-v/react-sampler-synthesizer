import React, { Component } from "react";
import CreateSample from './components/CreateSample/CreateSample';
import styles from "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      source: {},
      oscillator: {},
      samples: [],
      buttons: [],
      currentSample: {}
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

  onSampleChange = (e) => {
    this.setState(prevState => ({
      samples: [...prevState.samples, e]
    }))
  }

  render() {
    const { buttons } = this.state;
    const samplerButtons = buttons.map(button => {
      return <div className="box">{button}</div>;
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

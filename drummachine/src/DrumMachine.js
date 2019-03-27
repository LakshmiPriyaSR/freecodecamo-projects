import React, { Component } from 'react';
import './DrumMachine.css';
import { Row, Col } from 'react-bootstrap';

var audioTrack = [
  {
    q: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    w: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    e: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    a: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    s: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    d: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    z: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    x: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    c: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
  }
];

class DrumMachine extends Component {
  constructor() {
    super();
    this.state = {
      audioName: '',
      audioSrc: '',
      displayName: 'WELCOME',
      volume: 50
    }
    this.playAudio = this.playAudio.bind(this);
    this.keydownHandler = this.keydownHandler.bind(this);
    this.volumeControl = this.volumeControl.bind(this);
  }

  keydownHandler(e) {
    var audioChar = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];
    if (audioChar.indexOf(e.key) > -1) {
      this.playAudio(e.key);
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', this.keydownHandler);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keydownHandler);
  }

  playAudio(event) {
    var id;
    if (event.target) {
      event.preventDefault();
      id = event.target.innerText.toLowerCase();
    } else {
      id = event.toLowerCase();
    }
    this.setState({
      audioName: id,
      audioSrc: audioTrack[0][id],
      displayName: audioTrack[0][id].substr(audioTrack[0][id].lastIndexOf('/') + 1).replace(".mp3", "")
    });
    setTimeout(() => {
      var audio = document.getElementById(id);
      audio.play();
      try {
        audio.volume = this.state.volume / 100;
      }
      catch (err) {
        audio.volume = 50 / 100;
      }
    }, 100);

  }

  volumeControl(event) {
    event.preventDefault();
    if (this.state.volume <= 100 && event.target.innerText === '-') {
      this.setState({
        volume: this.state.volume - 10
      })
    }
    if (this.state.volume < 100 && event.target.innerText === '+') {
      this.setState({
        volume: this.state.volume + 10
      })
    }
  }

  render() {
    return (
      <div>
        <Col id="drum-machine" >
          <audio id={this.state.audioName} src={this.state.audioSrc} />
          <Col>
            <Row>
              <div className="drum-pad" onClick={e => this.playAudio(e)}>
                <span>Q</span></div>
              <div className="drum-pad" onClick={e => this.playAudio(e)}>
                W</div>
              <div className="drum-pad" onClick={e => this.playAudio(e)}>
                E</div>
            </Row>
            <Row>
              <div className="drum-pad" onClick={e => this.playAudio(e)}>
                A</div>
              <div className="drum-pad" onClick={e => this.playAudio(e)}>
                S</div>
              <div className="drum-pad" onClick={e => this.playAudio(e)}>
                D</div>
            </Row>
            <Row>
              <div className="drum-pad" onClick={e => this.playAudio(e)}>
                Z</div>
              <div className="drum-pad" onClick={e => this.playAudio(e)}>
                X</div>
              <div className="drum-pad" onClick={e => this.playAudio(e)}>
                C</div>
            </Row>
          </Col>
          <Col id="controls">
            <p className="volValue">VOL {this.state.volume}%</p>
            <div className="vol" onClick={e => this.volumeControl(e)}>+</div>
            <div className="vol" onClick={e => this.volumeControl(e)}>-</div>
          </Col>
        </Col>
        <div id="drum-machine" style={{ backgroundColor: '#690e03', display: 'block' }}>
          <p id="displayName">{this.state.displayName}</p>
        </div>
      </div>
    );
  }
}

export default DrumMachine;

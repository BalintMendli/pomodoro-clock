import React, { Component } from 'react';

import Clock from './Clock';
import './App.css';
import BeepSound from './BeepSound.mp3';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionDur: 25,
      breakDur: 5,
      countDown: 0,
      isOn: false,
      timerLabel: 'Session',
    };
    this.timer = 0;
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.beep = new Audio(BeepSound);
  }

  componentDidMount() {
    this.div.focus();
  }

  handleClick(e) {
    const { sessionDur, breakDur, countDown, isOn } = this.state;
    if (
      (e.target.id === 'seDec' || e.target.id === 'session-decrement') &&
      sessionDur > 1 &&
      !isOn
    ) {
      this.setState({ sessionDur: sessionDur - 1 });
    }
    if (
      (e.target.id === 'seInc' || e.target.id === 'session-increment') &&
      sessionDur < 60 &&
      !isOn
    ) {
      this.setState({ sessionDur: sessionDur + 1 });
    }
    if (
      (e.target.id === 'brDec' || e.target.id === 'break-decrement') &&
      breakDur > 1 &&
      !isOn
    ) {
      this.setState({ breakDur: breakDur - 1 });
    }
    if (
      (e.target.id === 'brInc' || e.target.id === 'break-increment') &&
      breakDur < 60 &&
      !isOn
    ) {
      this.setState({ breakDur: breakDur + 1 });
    }
    if (
      (e.target.id === 'stSt' ||
        e.target.id === 'stSt2' ||
        e.target.id === 'start-stop') &&
      !isOn
    ) {
      if (countDown === 0) {
        this.startTimer(sessionDur * 60);
      } else {
        this.startTimer(-1);
      }
      this.setState({ isOn: true });
    }
    if (
      (e.target.id === 'stSt' ||
        e.target.id === 'stSt2' ||
        e.target.id === 'start-stop') &&
      isOn
    ) {
      this.stopTimer();
      this.setState({ isOn: false });
    }
    if (e.target.id === 'res' || e.target.id === 'reset') {
      this.beep.pause();
      this.beep.currentTime = 0;
      this.stopTimer();
      this.setState({ countDown: sessionDur * 60, isOn: false });
    }
  }

  handleKeyDown(e) {
    if (e.key === 'Delete' || e.key === 'Backspace') {
      this.handleClick({ target: { id: 'res' } });
    }
    if (e.key === 'ArrowUp') {
      this.handleClick({ target: { id: 'seInc' } });
    }
    if (e.key === 'ArrowDown') {
      this.handleClick({ target: { id: 'seDec' } });
    }
    if (e.key === '8') {
      this.handleClick({ target: { id: 'brInc' } });
    }
    if (e.key === '2') {
      this.handleClick({ target: { id: 'brDec' } });
    }
    if (e.key === ' ') {
      this.handleClick({ target: { id: 'stSt' } });
    }
  }

  startTimer(init) {
    if (init > 0) {
      this.setState({ countDown: init });
    }
    this.timer = setInterval(this.handleTimer, 1000);
  }

  handleTimer() {
    const { sessionDur, breakDur, countDown, timerLabel } = this.state;
    if (countDown > 0) {
      this.setState({ countDown: countDown - 1 });
    } else if (timerLabel === 'Session') {
      this.beep.play();
      this.setState({
        countDown: breakDur * 60,
        timerLabel: 'Break',
      });
    } else if (timerLabel === 'Break') {
      this.beep.play();
      this.setState({
        countDown: sessionDur * 60,
        timerLabel: 'Session',
      });
    }
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  render() {
    const { sessionDur, breakDur, countDown, timerLabel } = this.state;
    const min = countDown !== 0 ? Math.floor(countDown / 60) : sessionDur;
    const sec = countDown !== 0 ? countDown - 60 * min : 0;
    const minSec = `${`0${min}`.slice(-2)}:${`0${sec}`.slice(-2)}`;
    return (
      <div
        className="App"
        role="tabpanel"
        tabIndex="0"
        onKeyDown={this.handleKeyDown}
        ref={c => {
          this.div = c;
        }}
      >
        <Clock
          handleClick={this.handleClick}
          handleKeyDown={this.handleKeyDown}
          sessionDur={sessionDur}
          breakDur={breakDur}
          timerlabel={timerLabel}
          minSec={minSec}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import Clock from './Clock';
import './App.css';

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
  }

  componentDidMount() {
    this.div.focus();
  }

  handleClick(e) {
    const { sessionDur, breakDur, countDown, isOn } = this.state;
    if (e.target.id === 'seDec' && sessionDur > 1) {
      this.setState({ sessionDur: sessionDur - 1 });
    }
    if (e.target.id === 'seInc' && sessionDur < 60) {
      this.setState({ sessionDur: sessionDur + 1 });
    }
    if (e.target.id === 'brDec' && breakDur > 1) {
      this.setState({ breakDur: breakDur - 1 });
    }
    if (e.target.id === 'brInc' && breakDur < 60) {
      this.setState({ breakDur: breakDur + 1 });
    }
    if ((e.target.id === 'stSt' || e.target.id === 'stSt2') && !isOn) {
      if (countDown === 0) {
        this.startTimer(sessionDur * 60);
      } else {
        this.startTimer(-1);
      }
      this.setState({ isOn: true });
    }
    if ((e.target.id === 'stSt' || e.target.id === 'stSt2') && isOn) {
      this.stopTimer();
      this.setState({ isOn: false });
    }
    if (e.target.id === 'res') {
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
        role="button"
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
        <audio
          id="beep"
          src="http://www.peter-weinberg.com/files/1014/8073/6015/BeepSound.wav"
          ref={audio => {
            this.beep = audio;
          }}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      session:25,
      break:5,
      countDown:0,
      isOn: false,
      timerLabel: 'Session'
    }
    this.timer=0;
    this.handleClick = this.handleClick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }
  handleClick(e){
    if(e.target.id==='seDec' && this.state.session>1){
      this.setState({session:this.state.session-1});
    }
    if(e.target.id==='seInc' && this.state.session<60){
      this.setState({session:this.state.session+1});
    }
    if(e.target.id==='brDec' && this.state.break>1){
      this.setState({break:this.state.break-1});
    }
    if(e.target.id==='brInc' && this.state.break<60){
      this.setState({break:this.state.break+1});
    }
    if((e.target.id==='stSt' || e.target.id==='stSt2') && !this.state.isOn){
      if(this.state.countDown===0){
        this.startTimer(this.state.session*60);
      } else{
        this.startTimer(-1);
      }
      this.setState({isOn: true});
    }
    if((e.target.id==='stSt' || e.target.id==='stSt2') && this.state.isOn){
      this.stopTimer();
      this.setState({isOn: false});
    }
    if(e.target.id==='res'){
      this.stopTimer();
      this.setState({countDown:this.state.session*60, isOn: false});
    }
  }
  startTimer(init){
    if(init>0){
      this.setState({countDown:init});
    }
    this.timer=setInterval(this.handleTimer,1000)
  }
  handleTimer(){
    if(this.state.countDown>0){
      this.setState({countDown:this.state.countDown-1});
    } else if(this.state.timerLabel==='Session'){
      this.setState({
        countDown:this.state.break*60,
        timerLabel:'Break'
      });
    } else if(this.state.timerLabel==='Break'){
      this.setState({
        countDown:this.state.session*60,
        timerLabel:'Session'
      });
    }
  }
  stopTimer(){
    clearInterval(this.timer);
  }
  render() {
    let min=(this.state.countDown!==0) ? Math.floor(this.state.countDown/60) : this.state.session;
    let sec=(this.state.countDown!==0) ? this.state.countDown-60*min : '00';
    return (
      <div className="App">
        <div id="container">
          <div id="title">Pomodoro Clock</div>
          <div id="settings">
            <div id="settings-left">
              <div id="session-label">Session Length</div>
              <div id="session-settings">
                <div id="session-decrement" onClick={this.handleClick}><i id="seDec" className="fas fa-arrow-down fa-2x"></i></div>
                <div id="session-length">{this.state.session}</div>
                <div id="session-increment" onClick={this.handleClick}><i id="seInc" className="fas fa-arrow-up fa-2x"></i></div> 
              </div>
            </div>
            <div id="settings-right">
              <div id="break-label">Break Length</div>
              <div id="break-settings">
                <div id="break-decrement" onClick={this.handleClick}><i id="brDec" className="fas fa-arrow-down fa-2x"></i></div>
                <div id="break-length">{this.state.break}</div>
                <div id="break-increment" onClick={this.handleClick}><i id="brInc" className="fas fa-arrow-up fa-2x"></i></div>  
              </div>
            </div>
          </div>
          <div id="display">
            <div id="timer-label">{this.state.timerLabel}</div>
            <div id="time-left">{('0'+min).slice(-2)+':'+('0'+sec).slice(-2)}</div>
          </div>
          <div id="controls">
            <div id="start-stop" onClick={this.handleClick}><i id="stSt" className="fas fa-play fa-2x"></i><i id="stSt2" className="fas fa-pause fa-2x"></i></div>
            <div id="reset" onClick={this.handleClick}><i id="res" className="fas fa-sync fa-2x"></i></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

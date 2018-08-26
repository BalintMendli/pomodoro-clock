import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      session:25,
      break:5
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    if(e.target.id==='seDec'){
      this.setState({session:this.state.session-1});
    }
    if(e.target.id==='seInc'){
      this.setState({session:this.state.session+1});
    }
    if(e.target.id==='brDec'){
      this.setState({break:this.state.break-1});
    }
    if(e.target.id==='brInc'){
      this.setState({break:this.state.break+1});
    }
  }
  render() {
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
            <div id="timer-label">Session</div>
            <div id="time-left">25:00</div>
          </div>
          <div id="controls">
            <div id="start-stop" onClick={this.handleClick}><i id="stSt" className="fas fa-play fa-2x"></i><i className="fas fa-pause fa-2x"></i></div>
            <div id="reset" onClick={this.handleClick}><i id="res" className="fas fa-sync fa-2x"></i></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

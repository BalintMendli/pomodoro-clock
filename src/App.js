import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="container">
          <div id="title">Pomodoro Clock</div>
          <div id="settings">
            <div id="settings-left">
              <div id="break-label">Break Length</div>
              <div id="break-settings">
                <div id="break-decrement"><i className="fas fa-arrow-down"></i></div>
                <div id="break-length"></div>
                <div id="break-increment"><i className="fas fa-arrow-up"></i>

</div>  
              </div>
            </div>
            <div id="settings-right">
              <div id="session-label">Session Length</div>
              <div id="session-settings">
                <div id="session-decrement"><i className="fas fa-arrow-down"></i></div>
                <div id="session-length"></div>
                <div id="session-increment"><i className="fas fa-arrow-up"></i>

</div> 
              </div>
            </div>
          </div>
          <div id="display">
            <div id="timer-label">Session</div>
            <div id="time-left"></div>
          </div>
          <div id="controls">
            <div id="start-stop"><i class="fas fa-play"></i><i class="fas fa-pause"></i><i class="fas fa-sync"></i></div>
            <div id="reset"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

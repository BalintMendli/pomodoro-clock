import React from 'react';
import PropTypes from 'prop-types';

const Clock = ({ handleClick, sessionDur, breakDur, timerlabel, minSec }) => (
  <div id="container">
    <div id="title">Pomodoro Clock</div>
    <div id="settings">
      <div id="settings-left">
        <div id="session-label">Session Length</div>
        <div id="session-settings">
          <button type="button" id="session-decrement" onClick={handleClick}>
            <i id="seDec" className="fas fa-arrow-down fa-2x" />
          </button>
          <div id="session-length">{sessionDur}</div>
          <button id="session-increment" type="button" onClick={handleClick}>
            <i id="seInc" className="fas fa-arrow-up fa-2x" />
          </button>
        </div>
      </div>
      <div id="settings-right">
        <div id="break-label">Break Length</div>
        <div id="break-settings">
          <button id="break-decrement" type="button" onClick={handleClick}>
            <i id="brDec" className="fas fa-arrow-down fa-2x" />
          </button>
          <div id="break-length">{breakDur}</div>
          <button id="break-increment" type="button" onClick={handleClick}>
            <i id="brInc" className="fas fa-arrow-up fa-2x" />
          </button>
        </div>
      </div>
    </div>
    <div id="display">
      <div id="timer-label">{timerlabel}</div>
      <div id="time-left">{minSec}</div>
    </div>
    <div id="controls">
      <button id="start-stop" type="button" onClick={handleClick}>
        <i id="stSt" className="fas fa-play fa-2x" />
        <i id="stSt2" className="fas fa-pause fa-2x" />
      </button>
      <button id="reset" type="button" onClick={handleClick}>
        <i id="res" className="fas fa-sync fa-2x" />
      </button>
    </div>
  </div>
);

Clock.propTypes = {
  handleClick: PropTypes.func.isRequired,
  sessionDur: PropTypes.number.isRequired,
  breakDur: PropTypes.number.isRequired,
  timerlabel: PropTypes.string.isRequired,
  minSec: PropTypes.string.isRequired,
};

export default Clock;

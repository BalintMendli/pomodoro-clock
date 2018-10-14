import React from 'react';
import PropTypes from 'prop-types';

const Clock = ({
  handleClick,
  handleKeyDown,
  sessionDur,
  breakDur,
  timerlabel,
  minSec,
}) => (
  <div id="container">
    <div id="title">Pomodoro Clock</div>
    <div id="settings">
      <div id="settings-left">
        <div id="session-label">Session Length</div>
        <div id="session-settings">
          <div
            id="session-decrement"
            role="button"
            tabIndex="0"
            onClick={handleClick}
            onKeyDown={handleKeyDown}
          >
            <i id="seDec" className="fas fa-arrow-down fa-2x" />
          </div>
          <div id="session-length">{sessionDur}</div>
          <div
            id="session-increment"
            role="button"
            tabIndex="0"
            onClick={handleClick}
            onKeyDown={handleKeyDown}
          >
            <i id="seInc" className="fas fa-arrow-up fa-2x" />
          </div>
        </div>
      </div>
      <div id="settings-right">
        <div id="break-label">Break Length</div>
        <div id="break-settings">
          <div
            id="break-decrement"
            role="button"
            tabIndex="0"
            onClick={handleClick}
            onKeyDown={handleKeyDown}
          >
            <i id="brDec" className="fas fa-arrow-down fa-2x" />
          </div>
          <div id="break-length">{breakDur}</div>
          <div
            id="break-increment"
            role="button"
            tabIndex="0"
            onClick={handleClick}
            onKeyDown={handleKeyDown}
          >
            <i id="brInc" className="fas fa-arrow-up fa-2x" />
          </div>
        </div>
      </div>
    </div>
    <div id="display">
      <div id="timer-label">{timerlabel}</div>
      <div id="time-left">{minSec}</div>
    </div>
    <div id="controls">
      <div
        id="start-stop"
        role="button"
        tabIndex="0"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        <i id="stSt" className="fas fa-play fa-2x" />
        <i id="stSt2" className="fas fa-pause fa-2x" />
      </div>
      <div
        id="reset"
        role="button"
        tabIndex="0"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        <i id="res" className="fas fa-sync fa-2x" />
      </div>
    </div>
  </div>
);

Clock.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  sessionDur: PropTypes.number.isRequired,
  breakDur: PropTypes.number.isRequired,
  timerlabel: PropTypes.string.isRequired,
  minSec: PropTypes.string.isRequired,
};

export default Clock;

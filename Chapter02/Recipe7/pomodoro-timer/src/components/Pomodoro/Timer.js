import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
  constructor() {
    super();

    // Initial State
    this.state = {
      alert: {
        type: '',
        message: ''
      },
      time: 0
    };

    // Defined times for work, short break and long break...
    this.times = {
      defaultTime: 10, // 25 min
      shortBreak: 300, // 5 min
      longBreak: 900 // 15 min
    };
  }

  componentDidMount() {
    // Set default time when the component mounts
    this.setDefaultTime();
  }

  setDefaultTime = () => {
    // Default time is 25 min
    this.setState({
      time: this.times.defaultTime
    });
  }

  setTime = newTime => {
    this.restartInterval();

    this.setState({
      time: newTime
    });
  }

  restartInterval = () => {
    // Clearing the interval
    clearInterval(this.interval);

    // Execute countDown every second
    this.interval = setInterval(this.countDown, 1000);
  }

  countDown = () => {
    // If the time reach 0 then we display Buzzzz! alert.
    if (this.state.time === 0) {
      this.setState({
        alert: {
          type: 'buz',
          message: 'Buzzzzzzzz!'
        }
      });
    } else {
      // We decrease the time second by second
      this.setState({
        time: this.state.time - 1
      });
    }
  }

  setTimeForWork = () => {
    this.setState({
      alert: {
        type: 'work',
        message: 'Working!'
      }
    });

    return this.setTime(this.times.defaultTime);
  }

  setTimeForShortBreak = () => {
    this.setState({
      alert: {
        type: 'shortBreak',
        message: 'Taking a Short Break!'
      }
    });

    return this.setTime(this.times.shortBreak);
  }

  setTimeForLongBreak = () => {
    this.setState({
      alert: {
        type: 'longBreak',
        message: 'Taking a Long Break!'
      }
    });

    return this.setTime(this.times.longBreak);
  }

  displayTimer(seconds) {
    // Formating the time into mm:ss
    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 3600 % 60);

    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }

  render() {
    const { alert: { message, type }, time } = this.state;

    return (
      <div className="Pomodoro">
        <div className={`alert ${type}`}>
          {message}
        </div>

        <div className="timer">
          {this.displayTimer(time)}
        </div>

        <div className="types">
           <button className="start" onClick={this.setTimeForWork}>Start Working</button>
           <button className="short" onClick={this.setTimeForShortBreak}>Short Break</button>
           <button className="long" onClick={this.setTimeForLongBreak}>Long Break</button>
         </div>
      </div>
    );
  }
}

export default Timer;

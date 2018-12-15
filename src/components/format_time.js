import React, { Component } from 'react';

class FormatTime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hour: 0,
      min: 0,
      sec: 0,
      ms: 0,
    }

    this.timerStyle = {
      display: 'inline-block',
      position: 'relative',
      left: '50%',
      transform: 'translate(-50%)',
      width: '295px',
    }
  }

  componentWillReceiveProps(nextProps) {
    const { elapsed } = nextProps;
    const sec = elapsed / 1000;
    const min = sec / 60;

    this.setState({
      hour: min / 60 | 0,
      min: min % 60 | 0,
      sec: sec % 60 | 0,
      ms: elapsed % 100 | 0,
    });
  }

  leadingZero(number) {
    return number < 10 ? `0${number}` : number;
  }

  render() {
    let { hour, min, sec, ms } = this.state;
    hour = this.leadingZero(hour);
    min = this.leadingZero(min);
    sec = this.leadingZero(sec);
    ms = this.leadingZero(ms);

    return <div style={this.timerStyle}>{hour}:{min}:{sec}:{ms}</div>;
  }
}

export default FormatTime;

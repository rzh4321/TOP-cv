import React, { Component } from 'react';
/* eslint-disable */


export default class DisplayEducation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        School: {this.props.info.school}
        <br />
        Degree: {this.props.info.degree}
        <br />
        Start date: {this.props.info.startDate}
        <br />
        Graduation date: {this.props.info.endDate}
        <br />
      </div>
    );
  }
}

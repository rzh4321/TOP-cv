import React, { Component } from 'react';
/* eslint-disable */


export default class DisplayExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Company: {this.props.info.company}
        <br />
        Title: {this.props.info.title}
        <br />
        Tasks: {this.props.info.tasks}
        <br />
        Start date: {this.props.info.startDate}
        <br />
        End date: {this.props.info.endDate}
        <br />
      </div>
    );
  }
}
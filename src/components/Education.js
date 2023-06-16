import React, { Component } from 'react';
/* eslint-disable */


export default class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label htmlFor="school">School:</label>
        <input type="text" id="school" value={this.props.school} onChange={this.props.changeSchool} disabled={this.props.status === 'submitted'} />

        <label htmlFor="degree">Degree:</label>
        <input type="text" id="degree" value={this.props.degree} onChange={this.props.changeDegree} disabled={this.props.status === 'submitted'} />

        <label htmlFor="startDate">Start date:</label>
        <input type="date" id="startDate" value={this.props.startDate} onChange={this.props.changeStartDate} disabled={this.props.status === 'submitted'} />

        <label htmlFor="endDate">End date:</label>
        <input type="date" id="endDate" value={this.props.endDate} onChange={this.props.changeEndDate} disabled={this.props.status === 'submitted'} />
      </div>

    );
  }
}
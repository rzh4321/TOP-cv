import React, { Component } from 'react';
/* eslint-disable */


export default class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label htmlFor="company">Company:</label>
        <input type="text" id="company" value={this.props.company} onChange={this.props.changeCompany} disabled={this.props.status === 'submitted'} />

        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={this.props.title} onChange={this.props.changeTitle} disabled={this.props.status === 'submitted'} />

        <label htmlFor="tasks">Tasks:</label>
        <textarea id="tasks" value={this.props.tasks} onChange={this.props.changeTasks} disabled={this.props.status === 'submitted'} />

        <label htmlFor="startDateExp">Start date:</label>
        <input type="date" id="startDateExp" value={this.props.startDate} onChange={this.props.changeStartDate} disabled={this.props.status === 'submitted'} />

        <label htmlFor="endDateExp">End date:</label>
        <input type="date" id="endDateExp" value={this.props.endDate} onChange={this.props.changeEndDate} disabled={this.props.status === 'submitted'} />
      </div>

    );
  }
}

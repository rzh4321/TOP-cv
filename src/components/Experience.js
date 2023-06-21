/* eslint-disable */

import React, { Component } from 'react';


export default class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label htmlFor="company">Company:</label>
        <input type="text" category="experience" id="company" value={this.props.company} onChange={this.props.changeState} disabled={this.props.status === 'submitted'} />

        <label htmlFor="title">Title:</label>
        <input type="text" category="experience" id="title" value={this.props.title} onChange={this.props.changeState} disabled={this.props.status === 'submitted'} />

        <label htmlFor="tasks">Tasks:</label>
        <textarea id="tasks" category="experience" value={this.props.tasks} onChange={this.props.changeState} disabled={this.props.status === 'submitted'} />

        <label htmlFor="startDate">Start date:</label>
        <input type="date" category="experience" id="startDate" value={this.props.startDate} onChange={this.props.changeState} disabled={this.props.status === 'submitted'} />

        <label htmlFor="endDate">End date:</label>
        <input type="date" category="experience" id="endDate" value={this.props.endDate} onChange={this.props.changeState} disabled={this.props.status === 'submitted'} />
      </div>

    );
  }
}

import React, { Component } from 'react';
/* eslint-disable */


export default class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" category="generalInfo" id="name" value={this.props.name} onChange={this.props.changeState} disabled={this.props.status === 'submitted'} />

        <label htmlFor="email">Email:</label>
        <input type="email" category="generalInfo" id="email" value={this.props.email} onChange={this.props.changeState} disabled={this.props.status === 'submitted'} />

        <label htmlFor="phone">Phone:</label>
        <input type="number" category="generalInfo" id="phone" value={this.props.phone} onChange={this.props.changeState} disabled={this.props.status === 'submitted'} />
      </div>

    );
  }
}

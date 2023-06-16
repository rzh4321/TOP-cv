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
        <input type="text" id="name" value={this.props.name} onChange={this.props.changeName} disabled={this.props.status === 'submitted'} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={this.props.email} onChange={this.props.changeEmail} disabled={this.props.status === 'submitted'} />

        <label htmlFor="phone">Phone:</label>
        <input type="number" id="phone" value={this.props.phone} onChange={this.props.changeNumber} disabled={this.props.status === 'submitted'} />
      </div>

    );
  }
}

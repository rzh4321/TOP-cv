import React, { Component } from 'react';
/* eslint-disable */


export default class DisplayGeneralInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Name: {this.props.info.name}
        <br />
        Email: {this.props.info.email}
        <br />
        Phone: {this.props.info.phone}
        <br />
      </div>
    );
  }
}

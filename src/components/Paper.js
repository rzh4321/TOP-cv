import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';
/* eslint-disable */


class Paper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generalInfo: {
        name: '',
        email: '',
        phone: '',
      },
      education: [
        {
          school: '',
          degree: '',
          date: '',
        },
      ],
      experience: [
        {
          company: '',
          title: '',
          tasks: [],
          date: '',
        },
      ],
    };
  }

  changeName(e) {
    this.setState({
        generalInfo: {
            name: e.target.value,
            email: this.state.generalInfo.email,
            phone: this.state.generalInfo.phone,
        }
    })
  }

  changeEmail(e) {
    this.setState({
        generalInfo: {
            name: this.state.generalInfo.name,
            email: e.target.value,
            phone: this.state.generalInfo.phone,
        }
    })
  }

  changePhone(e) {
    this.setState({
        generalInfo: {
            name: this.state.generalInfo.name,
            email: this.state.generalInfo.email,
            phone: e.target.value,
        }
    })
  }

  render() {
    return (
      <form>
        <div>General Information</div>
        <GeneralInfo name={this.state.generalInfo.name} email={this.state.generalInfo.email} phone={this.state.generalInfo.phone} 
            changeName={this.changeName.bind(this)} changeEmail={this.changeEmail.bind(this)} changePhone={this.changePhone.bind(this)}/>
      </form>
    );
  }
}

export default Paper;

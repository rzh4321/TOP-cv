import React, { Component } from 'react';
// import uniqid from 'uniqid';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
/* eslint-disable */


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'typing',
      generalInfo: {
        name: '',
        email: '',
        phone: '',
      },
      education:
        {
          school: '',
          degree: '',
          startDate: '',
          endDate: '',
        },
      experience:
        {
          company: '',
          title: '',
          tasks: '',
          startDate: '',
          endDate: '',
        },
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

  changeSchool(e) {
    this.setState({
      education: {
        school: e.target.value,
        degree: this.state.education.degree,
        startDate: this.state.education.startDate,
        endDate: this.state.education.endDate,
      }
    })
  }

  changeDegree(e) {
    this.setState({
      education: {
        school: this.state.education.school,
        degree: e.target.value,
        startDate: this.state.education.startDate,
        endDate: this.state.education.endDate,
      }
    })
  }

  changeStartDateEdu(e) {
    this.setState({
      education: {
        school: this.state.education.school,
        degree: this.state.education.degree,
        startDate: e.target.value,
        endDate: this.state.education.endDate,
      }
    })
  }

  changeEndDateEdu(e) {
    this.setState({
      education: {
        school: this.state.education.school,
        degree: this.state.education.degree,
        startDate: this.state.education.startDate,
        endDate: e.target.value,
      }
    })
  }

  changeCompany(e) {
    this.setState({
      experience: {
        company: e.target.value,
        title: this.state.experience.title,
        tasks: this.state.experience.tasks,
        startDate: this.state.experience.startDate,
        endDate: this.state.experience.endDate,
      }
    })
  }

  changeTasks(e) {
    this.setState({
      experience: {
        company: this.state.experience.company,
        title: this.state.experience.title,
        tasks: e.target.value,
        startDate: this.state.experience.startDate,
        endDate: this.state.experience.endDate,
      }
    })
  }

  changeStartDateExp(e) {
    this.setState({
      experience: {
        company: this.state.experience.company,
        title: this.state.experience.title,
        tasks: this.state.experience.tasks,
        startDate: e.target.value,
        endDate: this.state.experience.endDate,
      }
    })
  }

  changeEndDateExp(e) {
    this.setState({
      experience: {
        company: this.state.experience.company,
        title: this.state.experience.title,
        tasks: this.state.experience.tasks,
        startDate: this.state.experience.startDate,
        endDate: e.target.value,
      }
    })
  }


  
  

  render() {
    let buttonText;
    if (this.state.status === 'typing') buttonText = 'Submit';
    else buttonText = 'Edit';
    return (
      <form>
        <button>{buttonText}</button>
        <div>General Information</div>
        <GeneralInfo status={this.state.status} name={this.state.generalInfo.name} email={this.state.generalInfo.email} phone={this.state.generalInfo.phone} 
            changeName={this.changeName.bind(this)} changeEmail={this.changeEmail.bind(this)} changePhone={this.changePhone.bind(this)}/>
        <div>Education</div>
        <Education status={this.state.status} school={this.state.education.school} degree={this.state.education.degree} startDate={this.state.education.startDate} 
            endDate={this.state.education.endDate} changeSchool={this.changeSchool.bind(this)}  
            changeDegree={this.changeDegree.bind(this)} changeStartDate={this.changeStartDateEdu.bind(this)}
            changeEndDate={this.changeEndDateEdu.bind(this)} />
        <div>Experience</div>
        <Experience status={this.state.status} company={this.state.experience.company} title={this.state.experience.title} startDate={this.state.experience.startDate} 
            endDate={this.state.experience.endDate} changeCompany={this.changeCompany.bind(this)}  
            changeTasks={this.changeTasks.bind(this)} changeStartDate={this.changeStartDateExp.bind(this)}
            changeEndDate={this.changeEndDateExp.bind(this)} />
      </form>
    );
  }
}

export default App;

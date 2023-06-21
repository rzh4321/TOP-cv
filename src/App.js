import React, { Component } from 'react';
// import uniqid from 'uniqid';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import DisplayGeneralInfo from './components/DisplayGeneralInfo';
import DisplayEducation from './components/DisplayEducation';
import DisplayExperience from './components/DisplayExperience';
import './styles/input.css';

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

  changeState(e) {
    console.log(Array.from(e.target.attributes))
    const attributes = Array.from(e.target.attributes).reduce((obj, attr) => {
      obj[attr.name] = attr.value;
      return obj;
    }, {});
    console.log(attributes)
    this.setState({
      [attributes.category]: {
        ...this.state[attributes.category],
        [attributes.id]: e.target.value,
      }
    })
  }

  buttonClicked(e) {
    e.preventDefault();
    const newStatus = this.state.status === 'typing'? 'submitted': 'typing';
    this.setState(
      {
        status: newStatus,
      }
    )
  }


  
  

  render() {
    let buttonText;
    if (this.state.status === 'typing') buttonText = 'Submit';
    else buttonText = 'Edit';
    return (
      <div>
        <form>
          <button onClick={this.buttonClicked.bind(this)}>{buttonText}</button>
          <div className='section'>General Information</div>
          <GeneralInfo status={this.state.status} name={this.state.generalInfo.name} email={this.state.generalInfo.email} phone={this.state.generalInfo.phone} 
              changeState={this.changeState.bind(this)}/>
          <div className='section'>Education</div>
          <Education status={this.state.status} school={this.state.education.school} degree={this.state.education.degree} startDate={this.state.education.startDate} 
              endDate={this.state.education.endDate} changeState={this.changeState.bind(this)} />
          <div className='section'>Experience</div>
          <Experience status={this.state.status} company={this.state.experience.company} title={this.state.experience.title} startDate={this.state.experience.startDate} 
              endDate={this.state.experience.endDate} changeState={this.changeState.bind(this)} />
        </form>
        <br/>
        <div className='display'>
          <span className='section'>General Information</span>
          <DisplayGeneralInfo info={this.state.generalInfo} />
          <span className='section'>Education</span>
          <DisplayEducation info={this.state.education} />
          <span className='section'>Experience</span>
          <DisplayExperience info={this.state.experience} />
        </div>

      </div>

    );
  }
}

export default App;

import React, { useState } from 'react';
// import uniqid from 'uniqid';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import DisplayGeneralInfo from './components/DisplayGeneralInfo';
import DisplayEducation from './components/DisplayEducation';
import DisplayExperience from './components/DisplayExperience';
import './styles/input.css';

/* eslint-disable */


function App() {
  const [status, changeStatus] = useState('typing');
  const [generalInfo, changeGeneralInfo] = useState({name: "", email: "", phone: ""});
  const [education, changeEducation] = useState({school: "", degree: "", startDate: "", endDate: ""});
  const [experience, changeExperience] = useState({company: "", title: "", tasks: "", startDate: "", endDate: ""});

  function changeState(e) {
    //console.log(Array.from(e.target.attributes))
    const attributes = Array.from(e.target.attributes).reduce((obj, attr) => {
      obj[attr.name] = attr.value;
      return obj;
    }, {});
    //console.log(attributes)
    if (attributes.category === "generalInfo") {
      changeGeneralInfo({...generalInfo, [attributes.id]: e.target.value})
    }
    else if (attributes.category === "education") {
      changeEducation({...education, [attributes.id]: e.target.value})
    }
    else if (attributes.category === "experience") {
      changeExperience({...experience, [attributes.id]: e.target.value})
    }
  }

  function buttonClicked(e) {
    e.preventDefault();
    const newStatus = status === 'typing'? 'submitted': 'typing';
    changeStatus(newStatus);
  }

    let buttonText;
    if (status === 'typing') buttonText = 'Submit';
    else buttonText = 'Edit';
    return (
      <div>
        <form>
          <button onClick={buttonClicked}>{buttonText}</button>
          <div className='section'>General Information</div>
          <GeneralInfo status={status} name={generalInfo.name} email={generalInfo.email} phone={generalInfo.phone} 
              changeState={changeState}/>
          <div className='section'>Education</div>
          <Education status={status} school={education.school} degree={education.degree} startDate={education.startDate} 
              endDate={education.endDate} changeState={changeState} />
          <div className='section'>Experience</div>
          <Experience status={status} company={experience.company} title={experience.title} startDate={experience.startDate} 
              endDate={experience.endDate} changeState={changeState} />
        </form>
        <br/>
        <div className='display'>
          <span className='section'>General Information</span>
          <DisplayGeneralInfo info={generalInfo} />
          <span className='section'>Education</span>
          <DisplayEducation info={education} />
          <span className='section'>Experience</span>
          <DisplayExperience info={experience} />
        </div>

      </div>

    );
}

export default App;

import React from 'react';
/* eslint-disable */


export default function DisplayEducation({info}) {
  const {school, degree, startDate, endDate} = info;

    return (
      <div>
        School: {school}
        <br />
        Degree: {degree}
        <br />
        Start date: {startDate}
        <br />
        Graduation date: {endDate}
        <br />
      </div>
    );
}

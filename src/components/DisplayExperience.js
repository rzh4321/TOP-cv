import React from 'react';
/* eslint-disable */


export default function DisplayExperience({info}) {
  const {company, title, tasks, startDate, endDate} = info;
    return (
      <div>
        Company: {company}
        <br />
        Title: {title}
        <br />
        Tasks: {tasks}
        <br />
        Start date: {startDate}
        <br />
        End date: {endDate}
        <br />
      </div>
    );
}
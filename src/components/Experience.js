/* eslint-disable */

import React from 'react';


export default function Experience({status, company, title, tasks, startDate, endDate, changeState}) {

    return (
      <div>
        <label htmlFor="company">Company:</label>
        <input type="text" category="experience" id="company" value={company} onChange={changeState} disabled={status === 'submitted'} />

        <label htmlFor="title">Title:</label>
        <input type="text" category="experience" id="title" value={title} onChange={changeState} disabled={status === 'submitted'} />

        <label htmlFor="tasks">Tasks:</label>
        <textarea id="tasks" category="experience" value={tasks} onChange={changeState} disabled={status === 'submitted'} />

        <label htmlFor="startDate">Start date:</label>
        <input type="date" category="experience" id="startDate" value={startDate} onChange={changeState} disabled={status === 'submitted'} />

        <label htmlFor="endDate">End date:</label>
        <input type="date" category="experience" id="endDate" value={endDate} onChange={changeState} disabled={status === 'submitted'} />
      </div>

    );
}

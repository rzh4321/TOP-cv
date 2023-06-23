import React from 'react';
/* eslint-disable */


export default function Education({status, school, degree, startDate, endDate, changeState}) {

    return (
      <div>
        <label htmlFor="school">School:</label>
        <input type="text" category="education" id="school" value={school} onChange={changeState} disabled={status === 'submitted'} />

        <label htmlFor="degree">Degree:</label>
        <input type="text" category="education" id="degree" value={degree} onChange={changeState} disabled={status === 'submitted'} />

        <label htmlFor="startDate">Start date:</label>
        <input type="date" category="education" id="startDate" value={startDate} onChange={changeState} disabled={status === 'submitted'} />

        <label htmlFor="endDate">End date:</label>
        <input type="date" category="education" id="endDate" value={endDate} onChange={changeState} disabled={status === 'submitted'} />
      </div>

    );
}

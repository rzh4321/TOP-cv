import React from 'react';
/* eslint-disable */


export default function GeneralInfo({status, name, email, phone, changeState}) {

    return (
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" category="generalInfo" id="name" value={name} onChange={changeState} disabled={status === 'submitted'} />

        <label htmlFor="email">Email:</label>
        <input type="email" category="generalInfo" id="email" value={email} onChange={changeState} disabled={status === 'submitted'} />

        <label htmlFor="phone">Phone:</label>
        <input type="number" category="generalInfo" id="phone" value={phone} onChange={changeState} disabled={status === 'submitted'} />
      </div>

    );
}

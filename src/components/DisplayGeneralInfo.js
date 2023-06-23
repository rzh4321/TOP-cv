import React from 'react';
/* eslint-disable */


export default function DisplayGeneralInfo({info}) {
  const {name, email, phone} = info;

    return (
      <div>
        Name: {name}
        <br />
        Email: {email}
        <br />
        Phone: {phone}
        <br />
      </div>
    );
}

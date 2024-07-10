import React, { useState } from 'react';

function FullNameDisplay() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let hasError = false;

    if (!firstName) {
      setFirstNameError('Please fill out this field.');
      hasError = true;
    } else {
      setFirstNameError('');
    }

    if (!lastName) {
      setLastNameError('Please fill out this field.');
      hasError = true;
    } else {
      setLastNameError('');
    }

    if (!hasError) {
      setFullName(`${firstName} ${lastName}`);
    }
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {firstNameError && <p style={{ color: 'red' }}>{firstNameError}</p>}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {lastNameError && <p style={{ color: 'red' }}

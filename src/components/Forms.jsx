import React, { useState } from 'react'
import manageArr from '../manageReducer';

function Forms({ dispatch }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  function submitForm(e) {
    e.preventDefault();
    
    dispatch({
      type: "addName",
      name: name,
      email: email,
    });
    console.log(name, email);
  }
  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="nameInput" style={{ display: "block" }}>
          Name
        </label>
        <input
          type="text"
          name="nameInput"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email" style={{ display: "block" }}>
          Email
        </label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Forms
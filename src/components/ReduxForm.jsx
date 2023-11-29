import React, { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { addName } from "../actions/changeName";
// import manageArr from "../manageReducer";


function ReduxForm() {

  const dispatch = useDispatch();  
  const userState = useSelector(state => state.changeName);
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  async function submitForm(e) {
    e.preventDefault();

    dispatch(addName(name, email));
    userState.forEach(element => {
      console.log('userState is here :', element.name, element.email);
    });
    // console.log(name, email);
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

export default ReduxForm;

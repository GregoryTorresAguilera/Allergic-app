import React, { useState } from "react";

const FormUser = (props) => {
  const [state, setState] = useState(INITIAL_STATE);

  const submitFormUser = (ev) => {
    ev.preventDefault();
    const { userImage, name, email, phone, password } = state;
    if (!userImage || !name || !email || !phone || !password) {
      console.log("Debes rellenar todos los campos");
      return;
    }

    console.log(state);
    props.addProfile(state);
    setState(INITIAL_STATE);
  };
  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setState({ ...state, [name]: value });
  };

  return (
    <form onSubmit={submitFormUser}>
      <fieldset>
        <div style={{ padding: "20px" }}>
          {state.userImage ? (
            <img src={state.userImage} alt={state.name} width="200px" />
          ) : null}
        </div>
        <label>
          <p>Nombre</p>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleInput}
          />
        </label>
        <label>
          <p>Dirección e.mail</p>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleInput}
          />
        </label>
        <label>
          <p>Móvil</p>
          <input
            type="text"
            name="phone"
            value={state.phone}
            onChange={handleInput}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="text"
            name="password"
            value={state.password}
            onChange={handleInput}
          />
        </label>
      </fieldset>
    </form>
  );
};

const INITIAL_STATE = {
  image:"",  
  name: "",
  email: "",
  phone: "",
  password: "",
};

export default FormUser;

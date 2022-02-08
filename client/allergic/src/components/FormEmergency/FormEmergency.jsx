import React, { useState } from "react";

const FormEmergency = (props) => {
  const [state, setState] = useState(INITIAL_STATE);

  const submitFormEmergency = (ev) => {
    ev.preventDefault();
    const { sosname, sosphone, assurance } = state;
    if (!sosname || !sosphone || !assurance) {
      console.log("Por favor comparte esta información en caso de emergencia");
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
    <form onSubmit={submitFormEmergency}>
      <fieldset>
        <label>
          <p>Nombre completo de tu contacto</p>
          <input
            type="text"
            name="sosname"
            value={state.sosname}
            onChange={handleInput}
          />
        </label>
        <label>
          <p>Móvil</p>
          <input
            type="text"
            name="sosphone"
            value={state.sosphone}
            onChange={handleInput}
          />
        </label>
        <label>
          <p>Aseguradora</p>
          <input
            type="text"
            name="assurance"
            value={state.assurance}
            onChange={handleInput}
          />
        </label>
      </fieldset>
    </form>
  );
};

const INITIAL_STATE = {
  sosname: "",
  sosphone: "",
  assurance: "",
 };

export default FormEmergency;

import React from 'react';
import FormUser from '../../components/FormUser/FormUser';
import FormEmergency from '../../components/FormEmergency/FormEmergency';

const Register = () => {
    /// [] (array info registro con local storage)----> post user register
  return <div> Dinos quién eres:
  <FormUser/>
  </div>;

  ///componente alergias + boton submit -----> registro


  <div> <h3>Vamos a añadir tu contacto en caso de emergencia</h3>
  <p>Nos pondremos en contacto con tu persona de confianza y/o compañia de seguros en caso de emergencia.</p> 
  <FormEmergency/>
  </div>

};

export default Register;

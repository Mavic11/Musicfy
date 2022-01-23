import React from 'react';
import "./AuthOptions.scss";
import { Button } from 'semantic-ui-react';
const AuthOptions = (props) => {
  const {setSelectedForm} = props;
  return (
  <div className="auth-options">
    <h2>Millones de canciones , gratis en Musicfy</h2>
    <Button className="register" onClick = {()=>
      setSelectedForm("register")
    }>Registrate gratis</Button>
    <Button className="login" onClick={()=>
      setSelectedForm("login")
    }>Iniciar Sesión</Button>
  </div>
  );
};

export default AuthOptions;

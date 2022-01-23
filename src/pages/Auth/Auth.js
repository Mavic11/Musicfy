import React,{useState} from 'react';
import AuthOptions from '../../components/Auth/AuthOptions';
import LoginForm from '../../components/Auth/LoginForm';
import RegisterForm from '../../components/Auth/RegisterForm';

import BackgroundAuth from '../../Assets/jpg/background-auth.jpg';
import LogoNameWithe from '../../Assets/png/logo-name-white.png';

import "./Auth.scss";

const Auth = () => {
  const [selectedForm, setSelectedForm] = useState(null);

  const handleForm = ()=>{
    switch(selectedForm){
      case 'login':
        return <LoginForm/>
      case 'register':
        return <RegisterForm setSelectedForm={setSelectedForm}/>
      default:
        return <AuthOptions setSelectedForm={setSelectedForm}/>
    }
  }

  return (
  <div className="auth" style={{backgroundImage:`url(${BackgroundAuth})`}}>
    <div className="auth__dark"/>
      <div className="auth__box">
        <div className="auth__box-logo">
          <img src={LogoNameWithe} alt="Musicfy" />
        </div>
        {handleForm()}
      </div>
  </div>
  );
};

export default Auth;
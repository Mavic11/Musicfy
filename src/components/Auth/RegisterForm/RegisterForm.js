import React,{useState} from 'react';
import {Button,Icon,Form,Input} from 'semantic-ui-react';
import firebase from '../../../utils/Firebase';
import "firebase/compat/auth";
import "./RegisterForm.scss";

const RegisterForm = (props) => {
  
  const defaultFormData = ()=>{
    return{
      username:'',
      password:'',
      email:''
    };
  }
  const {setSelectedForm} = props;
  const [formData, setFormData] = useState(defaultFormData());
  const [showPassword, setShowPassword] = useState(false);

  const handlerShowPassword =()=>{
    setShowPassword(!showPassword);
  }

  const onChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  const onSubmit = ()=>{
    console.log("Formulario enviado");
    console.log(formData);
  }
  return (
  <div className="register-form">
    <h1>Empieza a esuchar con una cuenta de Musicfy gratis.</h1>
    <Form onSubmit={onSubmit} onChange={onChange}>
      <Form.Field>
        <Input
          type="text"
          name="email"
          placeholder="correo electronico"
          icon="mail outline"
          //onChange={}
          //error
          />
      </Form.Field>
      <Form.Field>
        <Input
          type = {showPassword?"text":"password"}
          name="password"
          placeholder="contraseña"
          icon={
            showPassword
            ?<Icon name="eye" link onClick={handlerShowPassword}></Icon>
            :<Icon name="eye slash outline" link onClick={handlerShowPassword}></Icon>
          }
          //onChange={}
          //error
          />
      </Form.Field>
      <Form.Field>
        <Input
          type="text"
          name="username"
          placeholder="¿Como deberia llamarte?"
          icon="user circle outline"
          //onChange={}
          //error
          />
      </Form.Field>
      <Button type="submit">Continuar</Button>
    </Form>
    <div className="register-form__options">
      <p onClick={()=>setSelectedForm(null)}>Volver</p>
      <p>
        ¿Ya tienes musicfy? <span onClick={()=>setSelectedForm('login')}>Iniciar Sesión</span>
      </p>
    </div>
  </div>
  );
};

export default RegisterForm;

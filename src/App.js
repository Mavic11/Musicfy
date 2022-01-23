import React,{useState} from 'react';
import firebase from './utils/Firebase';
import "firebase/compat/auth";
import Auth from './pages/Auth';

const App = () =>{

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  firebase.auth().onAuthStateChanged(currentUser => {

    if(!currentUser){
      setUser(null)
    } else{
      setUser(currentUser)
    }
    setIsLoading(false);
  })

  if(isLoading){
    return null;
  }

  return (
    !user ? <Auth/>:<UserLogged/>
  );
}

const UserLogged = () => {
  const logout = ()=>{
    firebase.auth().signOut();
  }

  return (
    <div
      style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height: "100vh",
        flexDirection:"column",
      }}>
        <h1> Usuario Logeado</h1>
        <button onClick={logout}>Cerrar Sesión</button>
    </div>
  )
}


export default App;

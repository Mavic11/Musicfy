import './App.css';
import firebase from './utils/Firebase';
import "firebase/compat/auth";
function App() {
  firebase.auth().onAuthStateChanged(currentUser => {
    console.log(currentUser?'Estamos logueados':'No estamos logueados');
  })
  return (
    <div className="App">
      <h1>React + Electron</h1>
    </div>
  );
}

export default App;

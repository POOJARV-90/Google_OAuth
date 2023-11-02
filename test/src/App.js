import logo from './logo.svg';
import './App.css';
import Login from './Component/Login';
import Logout from './Component/Logout';
import {gapi} from 'gapi-script'
import { useEffect } from 'react';

const clientId = "975298386048-a1f5jvfcctd35f2ckfnvte2mgrrl680n.apps.googleusercontent.com";


function App() {

  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId:clientId,
        scope:""
      })
    };
    gapi.load('client:auth2',start)
})
  return (
    <div className="App">
      <Login/>
      <Logout/>
    </div>
  );
}

export default App;

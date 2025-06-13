
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import React, { useState, useSyncExternalStore } from 'react'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
{/*import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";*/}



function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);
const showAlert = (messege, type)=>{
  setAlert({
    msg: messege,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  },1500 );
}
const toggleMode= ()=> {
  if(mode === 'light'){
  setMode('dark');
  document.body.style.backgroundColor = 'grey';
  showAlert("Dark mode has been enabled!", "success ");
 // document.title = 'TextUtils - Dark Mode';
 {/* setInterval(() => {
    document.title = 'Install TextUtils Now';
  }, 2000);*/}
}
  else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled!", "success ");
  //document.title = 'TextUtils - Light Mode'

  }
}
  return (
 <>
 
{/* <Navbar title = "textutils" about = "AboutTextutils"/> 
  */}

{/*<Router>*/}
<Navbar title = "TextUtils" about = "AboutTextutils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert = {alert}/>
  <div className="container my-3"> 
 {/* <Switch>*/
   /*       <Route exact path="/about">*/
   /*         <About mode={mode} />*/
   /*       </Route>*/}

   {/*       <Route exact path="/">*/}
          <TextForm showAlert={showAlert} heading = "Try TextUtils - Word Counter, Character Counter" mode={mode} /> 
   {/*       </Route>*/}
 {/* </Switch>*/}
  </div>
{ /* </Router>*/
} </>

  );
}

export default App;

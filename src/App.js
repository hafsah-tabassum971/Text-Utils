import './App.css';
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
if (mode === 'light') {
  setMode('dark');
  document.body.style.backgroundColor = '#7e7e81ff';
  showAlert('Dark mode has been enabled!', 'success');
} else {
  setMode('light');
  document.body.style.backgroundColor = 'white';
  showAlert('Light mode has been enabled!', 'success');
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
   /*       </Route>*/
   }

   {/*       <Route exact path="/">*/}
          <TextForm showAlert={showAlert} heading = "Real-Time Writing with Word & Character Insights" mode={mode} /> 
   {/*       </Route>*/}
 {/* </Switch>*/}
  </div>
{ /* </Router>*/
} </>

  );
}

export default App;

//import logo from './logo.svg';
// import './App.css';
import TextCounter from './textCounter.js';
// import About from './about.js';
import Nab from './nab.js';
import Alert from './alert.js';
import React,{useState} from 'react'


export default function App() {
  const [mode,setmode]=useState('light');
  const [alert, setalert] = useState(null);
  const showAlert = (message,type)=>{
    setalert({
      msg:message,
      type:type
    })
  }
  const togglemode=()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
        showAlert("Dark mode has beeen enabled","success");
    }else{
      setmode('light');
      document.body.style.backgroundColor='white';
        showAlert("White mode has beeen enabled","success");
    }
  }
  return (
    <>
    <Nab mode={mode} togglemode= {togglemode}/>
      <Alert alert={alert}/>
      <TextCounter showAlert={showAlert} mode={mode} title="Enter the text Analyze the below"/>
      {/* <About mode={mode} /> */}
    </>

  );
}


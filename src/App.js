import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Text from './component/Text';

import Alert from './component/Alert';
import WordMeaning from './component/WordMeaning';

function App() {
  const [mode,setmode]=useState({
    icon:'regular',
    color:'light'
  })
const [alert,setalert]=useState({
  display:'none',
  msg:''
})

const showAlert=(message)=>{
setalert({
  display:'flex',
  msg:message
})
setTimeout(() => {
  setalert({
    display:'none',
    msg:''
  })
}, 1400);
}
  const TogglerMode=()=>{
    if(mode.color==='light'){
      setmode({
        icon:'solid',
        color:'dark'
      })
      document.body.style.backgroundColor = "#30302e"
      showAlert("enable dark mode")
    }else{
      setmode({
        icon:'regular',
        color:'light'
      })
      document.body.style.backgroundColor = "white"
      showAlert("enable light mode")
    }
    
  }
  return (
    <BrowserRouter>
    <Navbar TogglerMode={TogglerMode} mode={mode}/>
    <Alert  alert={alert}/>
      <Routes>
      <Route exact path="/" element={<WordMeaning />}></Route>
        <Route exact path="/textutils" element={<Text showAlert={showAlert} mode={mode} />}></Route>
        <Route exact path="*" element={<Text showAlert={showAlert} mode={mode} />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

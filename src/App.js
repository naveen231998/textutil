
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {
//   createBrowserRouter,RouterProvider} from "react-router-dom";


function App() {
  const [mode,setmode] = useState('light')
  const [alert,setalert] = useState(null);

  const showAlert = (message,type) => {
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() =>{
      setalert(null);
      
    },3000)
  }

  const toggleMode = ()=>{
    if (mode === 'light')
      {setmode('dark')
        document.body.style.backgroundColor = '#6c757d'
        showAlert("Dark Mode Has been enabled", "success")
      }
    else{
      setmode('light')
      
        document.body.style.backgroundColor = 'white'
        showAlert("Light Mode Has been enabled", "success")
    }
  }

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: 
  //     <>
  //         <Navbar title = "Naveen" aboutText = "About" mode = {mode} toggleMode = {toggleMode}/>
  //         <Alert alert = {alert}/>
  //         <div className="container my-3">
  //         <TextForm heading = 'Enter your text here to Analyse'/>
  //         </div>
  //     </>
  //   },
  //   {
  //     path: "/about",
  //     element:
  //     <>
  //         <Navbar title = "Naveen" aboutText = "About" mode = {mode} toggleMode = {toggleMode}/>
  //         <Alert alert = {alert}/>

      
  //       <About/>
  //     </>
  //   }
  // ])

  return (
    <>

      <Navbar title = "Naveen" aboutText = "About" mode = {mode} toggleMode = {toggleMode}/>
          <Alert alert = {alert}/>
          <div className="container my-3">
          <TextForm heading = 'Enter your text here to Analyse'/>
          </div>
          {/* <About/> */}


    {/* <RouterProvider router={router}/> */}

    </>
  );
}

export default App;

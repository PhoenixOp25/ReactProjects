import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(11)

  //let counter=11;
  const addValue=()=>{
    
    
    // setCounter(counter+=1);
    counter+=1;
    if(counter>20)counter=20;
     setCounter(counter);
     console.log("clicked",counter);
  }
  const removeValue=()=>{
    counter-=1;
    if(counter<0)counter=0;

    setCounter(counter);
  }

  return (
    <>
     <h1>bornvita</h1>
     <h2>counter value:{counter}</h2>

     <button
     onClick={addValue}
     >Add value {counter} </button>
      <br />
      <button
      onClick={removeValue}
      >remove value {counter} </button>
    <footer>footer : {counter} </footer>
    </>
  )
}

export default App

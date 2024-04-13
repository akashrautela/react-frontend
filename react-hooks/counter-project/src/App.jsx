import './App.css'
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(10);

  const addValue = ()=>{
    //counter++; //phantom read problem, variable getting updated but latest value not rendered in the UI - react solved it using hooks
    if(counter < 20)  setCounter(counter+1);
  }

  const decValue = ()=>{
    //counter--;
    if(counter > 0) setCounter(counter-1);
  }

  return (
    <>
      <h1>My Counter app using React</h1>
      <h2>Counter value : {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br />
    <button
    onClick={decValue}
    >Remove value</button>
    </>
  )
}

export default App

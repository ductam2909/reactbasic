import logo from './logo.svg';
import './App.css';
import Student from './Components/Student';
import Test from './Components/Test';
import { useState } from 'react';
function App() {
  const info={
    name :"tam",
    address:"quang nam"
  }

  const [counts,setcounts] = useState([
    {
        name :"tam2",
        address:"quảng nam"
    }
]);

const change=()=>{

    setcounts([
      {
        name :"tam",
        address:"quảng nam"
      }
    ])
  
 
}
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      <button onClick={change}>change</button>
    {/* <Student info={info}/> */}
    <Test/>

    <button onClick={()=>setcounts(counts+1)}>test</button>
    </div>
  );
}

export default App;

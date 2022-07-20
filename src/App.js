import { useState } from 'react';
import './App.css';

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ready To Go</h1>
      </header>
      <hr />
      <div>
        <button
          className={`${switch1 === false ? 'active' : ''}`}
          onClick={() => {
            setSwitch1(false);
          }}>Off</button>
        <button
          className={`${switch1 === true ? 'active' : ''}`}
          onClick={() => {
            setSwitch1(true);
          }}
        >On</button>
      </div>
      <div>
        <button
          className={`${switch2 === false ? 'active' : ''}`}
          onClick={() => {
            setSwitch2(false);
          }}>Off</button>
        <button
          className={`${switch2 === true ? 'active' : ''}`}
          onClick={() => {
            setSwitch2(true);
          }}>On</button>
      </div>
      <div>
        <button
          className={`${switch3 === false ? 'active' : ''}`}
          onClick={() => {
            setSwitch3(false);
          }}>Off</button>
        <button
          className={`${switch3 === true ? 'active' : ''}`}
          onClick={() => {
            setSwitch3(true);
          }}>On</button>
      </div>

      <h2>
        {
          switch1 === true &&
            switch2 === true &&
            switch3 === true ? 'Go !' : 'No way !'
        }
      </h2>
    </div>
  );
}

export default App;

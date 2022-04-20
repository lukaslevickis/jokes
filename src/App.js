import logo from './logo.svg';
import './App.css';
import React from 'react';
import Form from './Form';
import WindowTracker from './WindowTracker';

function App() {
  const [show, setShow] = React.useState(true);

  function toggle() {
    setShow(prevShow => !prevShow)
  }

  return (
    <div className="App">
      {/* <Form /> */}
      <div className='container'>
        <button onClick={toggle}>toggle</button>
      </div>
      {show && <WindowTracker />}
    </div>
  );
}

export default App;

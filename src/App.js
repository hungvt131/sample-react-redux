import React from 'react';
import './App.css';
import Counter from './components/Counter';
import CounterButton from './components/CounterButton';
import AddInput from './components/AddInput';

import User from './components/User';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter/> */}
        {/* <CounterButton/> */}
        {/* <AddInput/> */}
        <User/>
      </header>
    </div>
  );
}

export default App;

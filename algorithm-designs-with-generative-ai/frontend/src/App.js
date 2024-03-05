import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlgorithmLogo from './components/AlgorithmLogo';
import AlgorithmDropdown from './components/AlgorithmDropdown'

function App() {
  return (
    <div className="App">
      <AlgorithmLogo />
      <AlgorithmDropdown/>
    </div>
  );
}

export default App;

import react, { useEffect } from "react";
import { useState } from 'react';
import From from "./Components/Form/Form";
import Tooltip from "./Components/Tooltip/Tooltip";
import './App.css';

function App() {
  const [inputTextValue, setInputTextValue] = useState('');
  const [inputPositionValue, setInputPositionValue] = useState('');
  
  useEffect(() => {
    console.log('Input Text Value:', inputTextValue);
    console.log('Input Position Value:', inputPositionValue);
  }, [inputTextValue, inputPositionValue]);

  return (
    <div className="App">
      <From
        inputTextValue={inputTextValue}
        setInputTextValue={setInputTextValue}
        inputPositionValue={inputPositionValue}
        setInputPositionValue={setInputPositionValue}
      />
      <Tooltip
       text={inputTextValue}
       position={inputPositionValue} />
    </div>
  );
}

export default App;

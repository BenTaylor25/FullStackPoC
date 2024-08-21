import { useState } from 'react';

import { getValue, setValue } from './API/value';
import './App.css';

export default function App() {
  const [clientInputValue, setClientInputValue] = useState('');
  const [serverValue, setServerValue] = useState('');
  const [errorValue, setErrorValue] = useState('');

  function pushValueButtonClicked() {
    setValue(clientInputValue)
      .then(succeeded => {
        if (succeeded) {
          setClientInputValue('');
        } else {
          setErrorValue('Could not send value to the server.');
        }
      });
  }

  function getValueButtonClicked() {
    getValue()
      .then(res => {
        if (res) {
          setServerValue(res);
          setErrorValue('');
        } else {
          setServerValue('');
          setErrorValue('Could not reach the server.');
        }
      });
  }

  return (
    <>
      <div>
        <input
          type='text'
          value={clientInputValue}
          onChange={e => setClientInputValue(e.target.value)}
        />

        <button
          onClick={pushValueButtonClicked}
        >
          Push to Server
          </button>
      </div>

      <div>
        <button
          onClick={getValueButtonClicked}
        >
          Get Value From Server
        </button>

        <p>'{serverValue}'</p>
        <p className='error-message'>{errorValue}</p>
      </div>
    </>
  );
}

import { useState } from 'react';

import { setServerValue } from '../API/value.ts';

import './PushValue.css';

export default function PushValue() {
    const [clientInputValue, setClientInputValue] = useState('');
    const [errorValue, setErrorValue] = useState('');

    function pushValueButtonClicked() {
        setServerValue(clientInputValue)
            .then(succeeded => {
                if (succeeded) {
                    setClientInputValue('');
                    setErrorValue('');
                } else {
                    setErrorValue('Could not send value to the server.');
                }
            });
    }

    return (
        <section className='PushValue'>
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

            <p className="error-message">{errorValue}</p>
        </section>
    );
}



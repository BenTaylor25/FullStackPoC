import { useState } from 'react';

import { setServerValue } from '../API/value';

import './PushValue.css';

export default function PushValue() {
    const [clientInputValue, setClientInputValue] = useState('');

    function pushValueButtonClicked() {
        setServerValue(clientInputValue)
            .then(succeeded => {
                if (succeeded) {
                    setClientInputValue('');
                } else {
                    // setErrorValue('Could not send value to the server.');
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
        </section>
    );
}



import { useState } from "react";

import { setServerValue } from '../API/value';

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
    );
}



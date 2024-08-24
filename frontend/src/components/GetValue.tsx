import { useState } from 'react';

import { getServerValue } from '../API/value';

import './GetValue.css';

export default function GetValue() {
    const [serverValue, setServerValue] = useState('');
    const [errorValue, setErrorValue] = useState('');

    function getValueButtonClicked() {
        getServerValue()
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
        <div className='GetValue'>
            <button
                onClick={getValueButtonClicked}
            >
                Get Value From Server
            </button>

            <p>'{serverValue}'</p>
            <p className='error-message'>{errorValue}</p>
        </div>
    );
}

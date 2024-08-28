import { useState } from 'react';

import './LocallySharedText.css';

export default function LocallySharedText() {
    const [test, setTest] = useState('test');

    function inputChanged(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target) {
            setTest(event.target.value);
        }
    }

    return (
        <>
            <section className="LocallySharedText">
                <h1>Shared Text</h1>

                <input
                    type="text"
                    value={test}
                    onChange={inputChanged} />
            </section>
        </>
    );
}

import { useState } from 'react';

import './LocallySharedText.css';

export default function UnsharedText() {
    const [text, setText] = useState('test');

    function inputChanged(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target) {
            setText(event.target.value);
        }
    }

    return (
        <>
            <section className="LocallySharedText">
                <h1>Unshared Text</h1>

                <input
                    type="text"
                    value={text}
                    onChange={inputChanged} />
            </section>
        </>
    );
}

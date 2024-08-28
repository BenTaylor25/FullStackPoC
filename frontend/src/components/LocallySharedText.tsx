import { useAppDispatch, useAppSelector } from '../hooks/useTypedHooks.ts';
import { setText } from '../stores/sharedTextSlice.ts';

import './LocallySharedText.css';

export default function LocallySharedText() {
    const dispatch = useAppDispatch();

    const text = useAppSelector(state => state.sharedText.text);

    function inputChanged(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target) {
            dispatch(setText(event.target.value));
        }
    }

    return (
        <>
            <section className="LocallySharedText">

                <h1>Shared Text</h1>

                <input
                    type="text"
                    value={text}
                    onChange={inputChanged}
                />

            </section>
        </>
    );
}

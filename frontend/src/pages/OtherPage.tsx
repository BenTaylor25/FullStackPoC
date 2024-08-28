import { useAppSelector } from '../hooks/useTypedHooks.ts';

import './OtherPage.css';

export default function OtherPage() {
    const sharedText = useAppSelector(state => state.sharedText.text);

    return (
        <>
            <main id="other-page">
                <p>{sharedText}</p>
            </main>
        </>
    );
}

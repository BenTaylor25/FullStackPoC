import PushValue from '../components/PushValue.tsx';
import GetValue from '../components/GetValue.tsx';
import LocallySharedText from '../components/LocallySharedText.tsx';
import UnsharedText from '../components/UnsharedText.tsx';

import './MainPage.css';

export default function MainPage() {

    return (
        <>
            <main id="main-page">

                <div className="grid">

                    <div className="grid-row">
                        <PushValue />
                        <LocallySharedText />
                    </div>

                    <div className="grid-row">
                        <GetValue />
                        <LocallySharedText />
                    </div>

                    <div className="grid-row">
                        <UnsharedText />
                        <UnsharedText />
                    </div>

                </div>

            </main>
        </>
    );
}

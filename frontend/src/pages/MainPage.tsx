import PushValue from '../components/PushValue';
import GetValue from '../components/GetValue';

import './MainPage.css';
import LocallySharedText from '../components/LocallySharedText';
import UnsharedText from '../components/UnsharedText';

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

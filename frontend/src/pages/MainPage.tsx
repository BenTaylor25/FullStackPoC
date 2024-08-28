import PushValue from '../components/PushValue';
import GetValue from '../components/GetValue';

import './MainPage.css';

export default function MainPage() {

    return (
        <>
            <main id="main-page">

                <div className="grid">

                    <div className="grid-row">
                        <PushValue />
                    </div>

                    <div className="grid-row">
                        <GetValue />
                    </div>

                </div>

            </main>
        </>
    );
}

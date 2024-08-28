import { Link } from 'react-router-dom';

import './MyNav.css';

export default function MyNav() {
    return (
        <>
            <nav id="my-nav">

                <span id="nav-title">Proof of Concept App</span>

                <div id="nav-control">

                    <Link to="/">
                        <div className="link">
                            <span>Page 1</span>
                        </div>
                    </Link>

                    <Link to="/other-page">
                        <div className="link">
                            <span>Page 2</span>
                        </div>
                    </Link>

                </div>

            </nav>
        </>
    );
}

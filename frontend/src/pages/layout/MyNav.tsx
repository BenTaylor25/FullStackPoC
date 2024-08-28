import { Link } from 'react-router-dom';

import './MyNav.css';

export default function MyNav() {
    return (
        <>
            <nav id="my-nav">

                <span id="nav-title">Proof of Concept App</span>

                <div id="nav-control">

                    <Link to="/">
                        <span>Page 1</span>
                    </Link>

                    <Link to="/other-page">
                        <span>Page 2</span>
                    </Link>

                </div>

            </nav>
        </>
    );
}

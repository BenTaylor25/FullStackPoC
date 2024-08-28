
import './MyNav.css';

export default function MyNav() {
    return (
        <>
            <nav id="my-nav">

                <span id="nav-title">Proof of Concept App</span>

                <div id="nav-control">

                    <a href="/">
                        <span>Page 1</span>
                    </a>

                    <a href="/other-page">
                        <span>Page 2</span>
                    </a>

                </div>

            </nav>
        </>
    );
}

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import logo from "./assets/img/logo.gif"
import PhpSection from "./pages/PhpSection";
import About from "./pages/About";

function App() {
    return (
        <body>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
                <a className="navbar-brand" href="#1">
                    <img src={logo} alt="..." height="36"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#php">PHP</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#3">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#2" id="navbarDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#4">Action</a></li>
                                <li><a className="dropdown-item" href="#2">Another action</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#2">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <About/>
        <PhpSection/>
        </body>

    );
}

export default App;

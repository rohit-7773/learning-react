import reactLogo from "../images/react-icon3.png";

function Navbar() {
    return (
        <nav className="navbar">
            <img src={reactLogo} alt="react logo" className="react-logo" />
            <h3 className="logo-text">React Facts</h3>
            <h4 className="nav-title">Learning React</h4>
        </nav>
    );
}

export default Navbar;
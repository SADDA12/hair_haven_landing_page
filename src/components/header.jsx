import logo from "../assets/logo.png"

export default function Header() {
    return(
        <header className="header">
            <div className="logoDiv"><img src={logo} alt="our logo"/></div>

            <div>
                <ul className="navLinks">
                    <li>About</li>
                    <li>Services</li>
                    <li>Gallery</li>
                    <li>Reviews</li>
                    <li>News</li>
                </ul>
            </div>

            <div className="appointmentSctn"><button>Shop Now</button></div>
        </header>

    );
}
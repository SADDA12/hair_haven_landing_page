import logo from "../assets/logo.png";

export default function Footer() {
    return(
        <section className="footer">

            <div>
                <img src={logo} alt="our logo" />
                <p>Contact us:</p>
                <p>+233 54 228 8666</p>
                <p>hairhaven@yahoo.com</p>
                <p>No. 13 Oxford Street, Airport</p>
            </div>
        </section>
    )
}
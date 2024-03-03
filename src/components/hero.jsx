import heroimg from "../assets/heroimg.png"

export default function Hero() {
    return (
        <section className="heroSctn">
            <div className="heroText">
                <p>Discover your perfect style with...<span className="span1">Hair Haven</span></p>
                <button>Book a consultation</button>
            </div>
            <div>
                <img className="heroPic" src={heroimg} alt="lady with hair"/>
            </div>
        </section>
    )
}
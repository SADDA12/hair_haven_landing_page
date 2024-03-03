import curly from "../assets/curly.png";
import braids from "../assets/braids.png";
import colored from "../assets/colored.png";
import pixie from "../assets/pixiecut.png";

export default function Products() {
    return (
        <section className="productsSctn">
            <div>
                <h4>Our Featured Products</h4>
            </div>

            <div className="imgSctn">
                <div className="imgDiv"><img src={curly} alt="curly wig" /></div>
                
                <div className="imgDiv"><img src={braids} alt="girl in braids" /></div>
                
                <div className="imgDiv"><img src={colored} alt="girl with colored hair" /></div>
        
                <div className="imgDiv"><img src={pixie} alt="girl with pixie cut" /></div>
            </div>
        </section>

    );
}
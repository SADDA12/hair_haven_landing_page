import haircare from "../assets/haircare.png";
import hairstyling from "../assets/hair-styling.png";
import hairextensions from "../assets/hair-extensions.png";

export default function Collection() {
    return(
       <section className="collection-sctn">
        <div><h1>Our Collection</h1></div>

        <div className="collection-img-sctn">
            <div>
                <h4>Hair Care</h4>
               <img src={haircare} alt="haircare tools"/>
            </div>

             <div>
                <h4>Styling Tools</h4>
                <img src={hairstyling} alt="hairstyling tools"/>
             </div>

             <div>
                <h4>Hair Extensions</h4>
                <img src={hairextensions} alt="hair extensions"/>
            </div>   

        </div>
       </section>
        

    );
}
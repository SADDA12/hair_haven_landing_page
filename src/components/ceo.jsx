import ceo from "../assets/ceo.png";

export default function Ceosection() {
    return (
        
        <section className="ceoSctn">
            <h3>Message from our CEO</h3>
            <div className="imgMsg">
               <div className="ceoInfo">
                   <img src={ceo} alt="our ceo"/>
                   <h1>Mariah Mills</h1>
               </div>

               <div className="ceoMsg">
                   <p>I want to take a moment to extend my heartfelt gratitude for your support and loyalty</p>
                   <p>At Hair Haven, we are passionate about more than just hair. We are dedicated to creating experiences that leave you feeling not only beautiful on the outside but also empowered and confident on the inside. Our team of talented stylists and professionals strives tirelessly to deliver exceptional service tailored to your unique preferences and desires.</p>
                   <p>Book a consultation now and lets embark on this journey together</p>
               </div>
            </div>
            

        </section>

    );
}
import bgVideo from "../assets/herosection-bg-video.mp4";

export default function Hero() {
  return (
    <section className="hero-container">
        <video autoPlay loop muted className="video-background">
          <source src={bgVideo} type="video/mp4" />
        </video>
    </section>
  );
}

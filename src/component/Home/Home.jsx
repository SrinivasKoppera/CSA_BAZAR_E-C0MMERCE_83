import "./Home.css";
import SimpleSlider from "../Slider";
import Testimonnials from "../Testimonnials";

const Home = () => {
  return (
    <div className="home-wrapper">
      <section className="hero-section full-width">
        <SimpleSlider />
      </section>

      <div className="home-container">
        <section className="intro-section">
          <h2 className="highlight-text">
            We source and showcase the world's finest teas, sharing the stories,
            culture and innovation behind them
          </h2>
          <div className="cta-buttons">
            <button className="cta-button primary">Shop Now</button>
            <button className="cta-button secondary">Learn More</button>
          </div>
        </section>

        <section className="features-section">
          <div className="feature-item">
            <div className="feature-icon">🚚</div>
            <h3>Free Shipping</h3>
            <p>On orders over $50</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔒</div>
            <h3>Secure Payment</h3>
            <p>100% secure payment</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💬</div>
            <h3>24/7 Support</h3>
            <p>Dedicated support</p>
          </div>
        </section>

        <Testimonnials />
      </div>
    </div>
  );
};

export default Home;

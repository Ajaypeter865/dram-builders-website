import Button from "../../components/ui/Button/Button";

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-overlay"></div>

            <div className="hero-container">
                <h1 className="hero-title">
                    Building the Future{" "}
                    <span className="hero-title-highlight">with Precision</span>
                </h1>

                <p className="hero-subtitle">
                    High-end infrastructure and architectural marvels engineered for the
                    next generation of urban living.
                </p>

                <div className="hero-actions">
                    <Button className="btn btn-primary">View Portfolio</Button>
                    <Button className="btn btn-secondary">View Technical Specs</Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;

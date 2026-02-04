import Button from "../../components/ui/Button/Button";

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="cta-container">

                <div className="cta-content">
                    <h2 className="cta-title">Ready to Build the Future?</h2>
                    <p className="cta-text">
                        Consult with our expert engineers today to bring your high-scale
                        architectural vision to reality.
                    </p>
                </div>

                <div className="cta-actions">
                    <Button className="btn btn-primary">
                        Start a Consultation
                    </Button>
                    <Button className="btn btn-outline">
                        Our Locations
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default CTA;

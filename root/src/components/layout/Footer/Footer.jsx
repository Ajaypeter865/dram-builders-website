import Button from "../../ui/Button/Button";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-container">

                <div className="footer-brand">
                    <h3 className="footer-logo">DRAM</h3>
                    <p className="footer-description">
                        Defining the skylines of tomorrow with uncompromising engineering and visionary design.
                    </p>
                </div>

                <nav className="footer-nav">
                    <a className="footer-link" href="#">About Us</a>
                    <a className="footer-link" href="#">Safety Process</a>
                    <a className="footer-link" href="#">Our Location</a>
                </nav>

        
                <div className="footer-newsletter">
                    <input
                        className="footer-input"
                        type="email"
                        placeholder="Your Email"
                    />
                    <Button className="btn btn-primary">Join List</Button>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

const Footer = () => {
    return (
        <footer className="site-footer">
            {/* Main Footer Content */}
            <div className="footer-container">
                <div className="footer-grid">

                    {/* Column 1: Logo & Description */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <h2>DRAM</h2>
                        </div>
                        <p className="footer-description">
                            Defining the skylines of tomorrow with uncompromising engineering and visionary design.
                        </p>
                        <div className="footer-socials">
                            <a href="#" className="footer-social-link">
                                <span>🌐</span>
                            </a>
                            <a href="#" className="footer-social-link">
                                <span>✉️</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Expertise Links */}
                    <div className="footer-column">
                        <h5 className="footer-column-title">Expertise</h5>
                        <ul className="footer-links">
                            <li><a href="#">Skyscrapers</a></li>
                            <li><a href="#">Bridges &amp; Tunnels</a></li>
                            <li><a href="#">Eco-Parks</a></li>
                            <li><a href="#">Industrial Zones</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Company Links */}
                    <div className="footer-column">
                        <h5 className="footer-column-title">Company</h5>
                        <ul className="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Process</a></li>
                            <li><a href="#">Safety Ethics</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div className="footer-column">
                        <h5 className="footer-column-title">Newsletter</h5>
                        <p className="footer-newsletter-text">
                            Subscribe for technical insights and project updates.
                        </p>
                        <form className="footer-newsletter-form">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="footer-newsletter-input"
                            />
                            <button
                                type="submit"
                                className="footer-newsletter-button"
                            >
                                Join List
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            {/* Footer Bottom - Copyright */}
            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <p className="footer-copyright">
                        © 2024 DRAM INDUSTRIES. ALL RIGHTS RESERVED.
                    </p>
                    <div className="footer-legal-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
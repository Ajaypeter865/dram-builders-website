import Button from "../../ui/Button/Button"



const Footer = () => {
    return (
        <footer>
            <h3>DRAM</h3>
            <p>Defining the skylines of tomorrow with uncompromising engineering and visionary design.</p>

            <nav>
                <a href="#">About Us</a>
                <a href="#">Safety Proccess</a>
                <a href="#">Our Location</a>
            </nav>

            <input type="text" placeholder="Your Email" />
            <Button>JOIN LIST</Button>
        </footer>
    )
}

export default Footer

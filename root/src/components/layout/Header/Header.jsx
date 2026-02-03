import Button from "../../ui/Button/Button"

const Header = () => {

    return (
        <header className="site-header">
            <div className="header-container">
                <div className="header-logo">
                    <h1>DRAM</h1>
                </div>

                <nav className="header-nav">
                    <a className="nav-link" href="#">Project</a>
                    <a className="nav-link" href="#">Service</a>
                    <a className="nav-link" href="#">Inovation</a>
                    <a className="nav-link" href="#">Safety</a>
                    <a className="nav-link" href="#">About</a>
                </nav>
                <div className="header-action">
                    <Button className='btn btn-primary'>Contact us</Button>
                </div>
            </div>
        </header>
    )

}


export default Header
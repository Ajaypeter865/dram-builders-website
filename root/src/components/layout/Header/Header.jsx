
// import Button from "../../ui/Button/Button"

// const Header = () => {
//     return (
//         /* .site-header */
//         <header className="fixed top-0 w-full z-[100] bg-[#0a1016]/90 backdrop-blur-md">
//             <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

//                 <div className="header-logo">
//                     <h1 className="text-xl font-bold leading-tight tracking-[-0.015em] font-display uppercase tracking-widest">DRAM</h1>
//                 </div>

//                 <nav className="flex gap-6">
//                     <a className="text-white/80 hover:text-primary text-sm font-medium transition-colors" href="#">Project</a>
//                     <a className="text-white/80 hover:text-primary text-sm font-medium transition-colors" href="#">Service</a>
//                     <a className="text-white/80 hover:text-primary text-sm font-medium transition-colors" href="#">Inovation</a>
//                     <a className="text-white/80 hover:text-primary text-sm font-medium transition-colors" href="#">Safety</a>
//                     <a className="text-white/80 hover:text-primary text-sm font-medium transition-colors" href="#">About</a>
//                 </nav>

//                 <div className="header-action">
//                     {/* Replaced .btn .btn-primary */}
//                     <Button className="hidden lg:flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-11 px-5 bg-primary text-white text-sm font-bold tracking-wider hover:bg-blue-600 transition-all">
//                         Contact us
//                     </Button>
//                 </div>
//             </div>
//         </header>
//     )
// }

// export default Header


import Button from "../../ui/Button/Button"

const Header = () => {
    return (
        <header className="site-header">
            <div className="header-container">
                {/* Logo Section */}
                <div className="header-logo">
                    <h1>DRAM</h1>
                </div>

                {/* Navigation - Hidden on mobile, visible on md screens and up */}
                <nav className="header-nav">
                    <a className="nav-link" href="#projects">Projects</a>
                    <a className="nav-link" href="#services">Services</a>
                    <a className="nav-link" href="#innovation">Innovation</a>
                    <a className="nav-link" href="#safety">Safety</a>
                    <a className="nav-link" href="#about">About</a>
                </nav>

                {/* Action Buttons */}
                <div className="header-actions">
                    <Button className="btn-contact">
                        CONTACT US
                    </Button>
                    {/* Mobile Menu Button - Hidden on md screens and up */}
                    <button className="mobile-menu-btn">
                        <span>☰</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
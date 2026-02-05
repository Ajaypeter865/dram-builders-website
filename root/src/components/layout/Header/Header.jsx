// import Button from "../../ui/Button/Button"

// const Header = () => {

//     return (
//         <header className="site-header">
//             <div className="header-container">
//                 <div className="header-logo">
//                     <h1>DRAM</h1>
//                 </div>

//                 <nav className="header-nav">
//                     <a className="nav-link" href="#">Project</a>
//                     <a className="nav-link" href="#">Service</a>
//                     <a className="nav-link" href="#">Inovation</a>
//                     <a className="nav-link" href="#">Safety</a>
//                     <a className="nav-link" href="#">About</a>
//                 </nav>
//                 <div className="header-action">
//                     <Button className='btn btn-primary'>Contact us</Button>
//                 </div>
//             </div>
//         </header>
//     )

// }


// export default Header



import Button from "../../ui/Button/Button"

const Header = () => {
    return (
        /* .site-header */
        <header className="fixed top-0 w-full z-[100] bg-[#0a1016]/90 backdrop-blur-md">
            <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
                
                <div className="header-logo">
                    <h1 className="text-xl font-bold tracking-wider text-white">DRAM</h1>
                </div>

                <nav className="flex gap-6">
                    <a className="text-sm text-slate-300 hover:text-sky-400 transition-colors" href="#">Project</a>
                    <a className="text-sm text-slate-300 hover:text-sky-400 transition-colors" href="#">Service</a>
                    <a className="text-sm text-slate-300 hover:text-sky-400 transition-colors" href="#">Inovation</a>
                    <a className="text-sm text-slate-300 hover:text-sky-400 transition-colors" href="#">Safety</a>
                    <a className="text-sm text-slate-300 hover:text-sky-400 transition-colors" href="#">About</a>
                </nav>

                <div className="header-action">
                    {/* Replaced .btn .btn-primary */}
                    <Button className="px-[18px] py-2.5 text-sm font-semibold rounded-md bg-sky-500 text-white cursor-pointer hover:bg-sky-600 transition-colors">
                        Contact us
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header
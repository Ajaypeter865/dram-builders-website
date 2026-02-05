// import Button from "../../ui/Button/Button";

// const Footer = () => {
//     return (
//         <footer className="site-footer">
//             <div className="footer-container">

//                 <div className="footer-brand">
//                     <h3 className="footer-logo">DRAM</h3>
//                     <p className="footer-description">
//                         Defining the skylines of tomorrow with uncompromising engineering and visionary design.
//                     </p>
//                 </div>

//                 <nav className="footer-nav">
//                     <a className="footer-link" href="#">About Us</a>
//                     <a className="footer-link" href="#">Safety Process</a>
//                     <a className="footer-link" href="#">Our Location</a>
//                 </nav>


//                 <div className="footer-newsletter">
//                     <input
//                         className="footer-input"
//                         type="email"
//                         placeholder="Your Email"
//                     />
//                     <Button className="btn btn-primary">Join List</Button>
//                 </div>

//             </div>
//         </footer>
//     );
// };

// export default Footer;


// export default function Footer() {
//   return (
//     <footer className="bg-background-dark text-white py-20 border-t border-white/5">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
//         <div className="col-span-1 md:col-span-1">

//           {/* Brand */}
//           <div className="space-y-6">
//             <div className="flex items-center gap-3">
//               <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
//                 A
//               </div>
//               <h2 className="text-white text-xl font-semibold tracking-wide">
//                 ARCHITECTON
//               </h2>
//             </div>

//             <p className="text-sm leading-relaxed">
//               Defining the skylines of tomorrow with uncompromising
//               engineering and visionary design.
//             </p>

//             <div className="flex gap-4">
//               <div className="h-10 w-10 rounded-lg bg-[#101b28] flex items-center justify-center hover:bg-blue-600 transition">
//                 🌐
//               </div>
//               <div className="h-10 w-10 rounded-lg bg-[#101b28] flex items-center justify-center hover:bg-blue-600 transition">
//                 ✉️
//               </div>
//             </div>
//           </div>

//           {/* Expertise */}
//           <div className="space-y-4">
//             <h3 className="text-white font-semibold tracking-wider">
//               EXPERTISE
//             </h3>
//             <ul className="space-y-3 text-sm">
//               <li>Skyscrapers</li>
//               <li>Bridges & Tunnels</li>
//               <li>Eco-Parks</li>
//               <li>Industrial Zones</li>
//             </ul>
//           </div>

//           {/* Company */}
//           <div className="space-y-4">
//             <h3 className="text-white font-semibold tracking-wider">
//               COMPANY
//             </h3>
//             <ul className="space-y-3 text-sm">
//               <li>About Us</li>
//               <li>Our Process</li>
//               <li>Safety Ethics</li>
//               <li>Careers</li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div className="space-y-6">
//             <h3 className="text-white font-semibold tracking-wider">
//               NEWSLETTER
//             </h3>
//             <p className="text-sm">
//               Subscribe for technical insights and project updates.
//             </p>

//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full rounded-lg bg-[#101b28] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none border border-[#1f2a37] focus:border-blue-500"
//             />

//             <button className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold tracking-wide hover:bg-blue-700 transition">
//               JOIN LIST
//             </button>
//           </div>

//         </div>
//       </div>
//     </footer>
//   );
// }



export default function Footer() {
    return (
        <footer className="bg-background-dark text-white py-20 border-t border-white/5">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Brand */}
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        {/* <div className="size-6 bg-primary rounded flex items-center justify-center">
                            <span className="material-symbols-outlined text-[16px]">
                                architecture
                            </span>
                        </div> */}
                        <h2 className="text-lg font-bold font-display uppercase tracking-widest">
                            ARCHITECTON
                        </h2>
                    </div>

                    <p className="text-concrete/60 text-sm leading-relaxed mb-8">
                        Defining the skylines of tomorrow with uncompromising engineering and visionary design.
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="size-10 rounded bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                        >
                            <span className="material-symbols-outlined text-lg">public</span>
                        </a>

                        <a
                            href="#"
                            className="size-10 rounded bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                        >
                            <span className="material-symbols-outlined text-lg">mail</span>
                        </a>
                    </div>
                </div>

                {/* Expertise */}
                <div>
                    <h5 className="font-bold mb-6 uppercase text-sm tracking-widest">
                        Expertise
                    </h5>
                    <ul className="space-y-4 text-concrete/60 text-sm">
                        {["Skyscrapers", "Bridges & Tunnels", "Eco-Parks", "Industrial Zones"].map(item => (
                            <li key={item}>
                                <a href="#" className="hover:text-primary transition-colors">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h5 className="font-bold mb-6 uppercase text-sm tracking-widest">
                        Company
                    </h5>
                    <ul className="space-y-4 text-concrete/60 text-sm">
                        {["About Us", "Our Process", "Safety Ethics", "Careers"].map(item => (
                            <li key={item}>
                                <a href="#" className="hover:text-primary transition-colors">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h5 className="font-bold mb-6 uppercase text-sm tracking-widest">
                        Newsletter
                    </h5>
                    <p className="text-concrete/60 text-sm mb-4">
                        Subscribe for technical insights and project updates.
                    </p>

                    <form className="flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="bg-white/5 border border-white/10 rounded px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-primary"
                        />
                        <button className="bg-primary py-3 rounded text-sm font-bold uppercase tracking-wider">
                            Join List
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-concrete/40 text-[12px] uppercase tracking-widest">
                <p>© 2024 ARCHITECTON INDUSTRIES. ALL RIGHTS RESERVED.</p>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}


// import Button from "../../components/ui/Button/Button";

// const CTA = () => {
//     return (
//         <section classNameName="cta-section">
//             <div classNameName="cta-container">

//                 <div classNameName="cta-content">
//                     <h2 classNameName="cta-title">Ready to Build the Future?</h2>
//                     <p classNameName="cta-text">
//                         Consult with our expert engineers today to bring your high-scale
//                         architectural vision to reality.
//                     </p>
//                 </div>

//                 <div classNameName="cta-actions">
//                     <Button classNameName="btn btn-primary">
//                         Start a Consultation
//                     </Button>
//                     <Button classNameName="btn btn-outline">
//                         Our Locations
//                     </Button>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default CTA;


import Button from '../../components/ui/Button/Button'


const CTA = () => {


    return (
        
        <section className="cta-section">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-white text-4xl md:text-6xl font-black font-display mb-8">Ready to Build the Future</h2>
                <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
                    Consult with our expert engineers today to bring your high-scale architectural vision to reality.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                    <button
                        className="px-10 py-5 bg-white text-primary font-bold rounded-lg hover:bg-slate-100 transition-colors shadow-xl">
                        START A CONSULTATION
                    </button>
                    <button
                        className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                        OUR LOCATIONS
                    </button>
                </div>
            </div>
        </section>
    )
}


export default CTA
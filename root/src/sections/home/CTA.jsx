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
            <div className="cta-container">
                
                {/* CTA Heading */}
                <h2 className="cta-title">
                    Ready to Build the Future?
                </h2>
                
                {/* CTA Description */}
                <p className="cta-description">
                    Consult with our expert engineers today to bring your high-scale architectural vision to reality.
                </p>
                
                {/* CTA Buttons */}
                <div className="cta-actions">
                    <Button className="cta-button-primary">
                        START A CONSULTATION
                    </Button>
                    <Button className="cta-button-secondary">
                        OUR LOCATIONS
                    </Button>
                </div>
                
            </div>
        </section>
    )
}

export default CTA
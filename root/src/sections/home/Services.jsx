// import services from "../../data/services";
// import ServiceCard from "../../components/ui/ServiceCard/ServiceCard";

// const Services = () => {
//     return (
//         <section className="services-section">

//             <div className="services-header">
//                 <h2 className="section-title">What We Do</h2>
//                 <p className="section-subtitle">
//                     Specialized Services for Complex Visionaries
//                 </p>
//             </div>

//             <div className="services-grid">
//                 {services.map((service) => (
//                     <ServiceCard
//                         key={service.id}
//                         title={service.title}
//                         description={service.description}
//                     />
//                 ))}
//             </div>

//         </section>
//     );
// };

// export default Services;



import services from "../../data/services";
import ServiceCard from "../../components/ui/ServiceCard/ServiceCard";
import serviceImage from "../../assets/images/services.png"; // Add your image

const Services = () => {
    return (
        <section className="services-section">
            <div className="services-container">
                
                {/* Two Column Grid */}
                <div className="services-layout">
                    
                    {/* Left Column - Content */}
                    <div className="services-content">
                        {/* Header */}
                        <div className="services-header">
                            <h6 className="services-subtitle">What we do</h6>
                            <h2 className="services-title">
                                Specialized Services for Complex Visionaries
                            </h2>
                        </div>

                        {/* Service Cards List */}
                        <div className="services-list">
                            {services.map((service) => (
                                <ServiceCard
                                    key={service.id}
                                    icon={service.icon}
                                    title={service.title}
                                    description={service.description}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="services-image-container">
                        <div className="services-image-wrapper">
                            <img 
                                src={serviceImage} 
                                alt="Construction worker wearing hard hat"
                                className="services-image"
                            />
                        </div>
                        
                        {/* Badge - 24/7 Support */}
                        <div className="services-badge">
                            <p className="services-badge-number">24/7</p>
                            <p className="services-badge-text">
                                Site Surveillance &amp; Support
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;
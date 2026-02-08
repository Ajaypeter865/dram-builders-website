// const StatCard = ({ icon, value, label, highlight }) => {
//     return (
//         <div className="stat-card">
//             {/* Icon - You can remove this if you don't want icons */}
//             {icon && (
//                 <span className="stat-icon">{icon}</span>
//             )}
            
//             {/* Label Text */}
//             <p className="stat-label">{label}</p>
            
//             {/* Value with highlight */}
//             <p className="stat-value">
//                 {value}
//                 {highlight && <span className="stat-highlight">{highlight}</span>}
//             </p>
//         </div>
//     );
// };

// export default StatCard;



// import "./serviceCard.css";
const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="service-card">
            {/* Icon Container */}
            {icon && (
                <div className="service-icon-wrapper">
                    <span className="service-icon">{icon}</span>
                </div>
            )}
            
            {/* Text Content */}
            <div className="service-content">
                <h4 className="service-title">{title}</h4>
                <p className="service-description">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
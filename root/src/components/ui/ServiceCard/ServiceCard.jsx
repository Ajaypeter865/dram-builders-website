const StatCard = ({ icon, value, label, highlight }) => {
    return (
        <div className="stat-card">
            {/* Icon - You can remove this if you don't want icons */}
            {icon && (
                <span className="stat-icon">{icon}</span>
            )}
            
            {/* Label Text */}
            <p className="stat-label">{label}</p>
            
            {/* Value with highlight */}
            <p className="stat-value">
                {value}
                {highlight && <span className="stat-highlight">{highlight}</span>}
            </p>
        </div>
    );
};

export default StatCard;
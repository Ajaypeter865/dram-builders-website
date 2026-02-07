const ProjectCard = ({ title, category, description, image, isFeatured }) => {
    return (
        <div className={`project-card ${isFeatured ? 'project-card-featured' : ''}`}>
            
            {/* Background Image */}
            <div 
                className="project-image"
                style={{ backgroundImage: `url(${image})` }}
            ></div>

            {/* Gradient Overlay */}
            <div className="project-overlay"></div>

            {/* Project Content */}
            <div className="project-content">
                <span className="project-category">{category}</span>
                <h3 className="project-title">{title}</h3>
                
                {/* Description - Only shows on featured card and on hover */}
                {isFeatured && description && (
                    <p className="project-description">{description}</p>
                )}
                
                {/* Explore Button - Only on featured card */}
                {isFeatured && (
                    <button className="project-button">EXPLORE PROJECT</button>
                )}
            </div>

        </div>
    );
};

export default ProjectCard;
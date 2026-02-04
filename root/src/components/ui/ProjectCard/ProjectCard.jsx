const ProjectCard = ({ title, location, image }) => {
    return (
        <div className="project-card">

            <div className="project-image-wrapper">
                <img
                    src={image}
                    alt={title}
                    className="project-image"
                />
            </div>

            <div className="project-content">
                <span className="project-location">{location}</span>
                <h3 className="project-title">{title}</h3>
            </div>

        </div>
    );
};

export default ProjectCard;

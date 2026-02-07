import projects from "../../data/projects";
import ProjectCard from "../../components/ui/ProjectCard/ProjectCard";

const PortFolio = () => {
    return (
        <section className="portfolio-section">
            <div className="portfolio-container">
                
                {/* Portfolio Header */}
                <div className="portfolio-header">
                    <div className="portfolio-header-content">
                        <h6 className="portfolio-subtitle">Portfolio</h6>
                        <h2 className="portfolio-title">Crafting Iconic Landmarks</h2>
                    </div>
                    <button className="portfolio-view-all">
                        VIEW ALL PROJECTS
                        <span className="portfolio-arrow">→</span>
                    </button>
                </div>

                {/* Portfolio Grid */}
                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            category={project.category}
                            description={project.description}
                            image={project.image}
                            isFeatured={index === 0} // First card is featured/large
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PortFolio;
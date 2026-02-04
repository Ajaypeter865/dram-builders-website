import projects from "../../data/projects";
import ProjectCard from "../../components/ui/ProjectCard/ProjectCard";

const PortFolio = () => {
    return (
        <section className="portfolio-section">

            <div className="portfolio-header">
                <h2 className="section-title">Our Projects</h2>
            </div>

            <div className="portfolio-grid">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        location={project.location}
                        image={project.image}
                    />
                ))}
            </div>

        </section>
    );
};

export default PortFolio;

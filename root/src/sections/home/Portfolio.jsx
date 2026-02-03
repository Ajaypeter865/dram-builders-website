import projects from "../../data/projects"
import ProjectCard from "../../components/ui/ProjectCard/ProjectCard"



const PortFolio = () => {


    return (
        <section>
            <div>
                {projects.map((data, index) => (
                    <ProjectCard
                        key={index}
                        titile={data.title}
                        location={data.location}
                    />
                ))}
            </div>
        </section>
    )
}

export default PortFolio


const ProjectCard = ({ titile, location, image }) => {

    return (
        <div>
            <img src={image} alt={titile} />
            <h3>{titile}</h3>
            <h2>{location}</h2>
        </div>
    )
}


export default ProjectCard
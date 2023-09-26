const Project = ({ project }) => {
    return (
        <div className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <a href={project.deployedLink}>Deployed Application</a>
            <a href={project.githubLink}>GitHub Repository</a>
        </div>
    );
};

export default Project;
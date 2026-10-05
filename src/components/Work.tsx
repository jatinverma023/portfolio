import "./styles/Work.css";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const Work = () => {
  return (
    <section className="work-section" id="work" aria-label="Featured Projects">
      <div className="work-container section-container">
        <div className="work-header-row">
          <div>
            <h2 className="work-title">
              My <span>Work</span>
            </h2>
            <p className="work-subtitle">
              Focused on AI/RAG architectures, automated video pipelines, and full-stack web platforms.
            </p>
          </div>
          <span className="work-counter" aria-label={`${projects.length} featured projects`}>
            0{projects.length} Projects
          </span>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

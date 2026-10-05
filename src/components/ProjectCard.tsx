import { FaGithub } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { Project } from "../data/projects";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <article className="project-card" id={`project-${project.id}`}>
      {/* Header: Number & Status */}
      <div className="card-top-bar">
        <span className="card-number">{project.number}</span>
        <div className="card-meta-right">
          <span className="card-category">{project.category}</span>
          <span
            className={`card-status-badge ${
              project.status === "Live" ? "status-live" : "status-dev"
            }`}
          >
            <span className="status-dot" aria-hidden="true" />
            {project.status}
          </span>
        </div>
      </div>

      {/* Title & Tagline */}
      <div className="card-header">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-tagline">{project.tagline}</p>
      </div>

      <div className="card-divider" aria-hidden="true" />

      {/* Description */}
      <p className="card-description">{project.description}</p>

      {/* Tech Stack */}
      <div className="card-section">
        <span className="card-section-label">Tech Stack</span>
        <div className="card-tech-grid">
          {project.technologies.map((tech) => (
            <span className="card-tech-pill" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Key Highlights */}
      <div className="card-section">
        <span className="card-section-label">Key Highlights</span>
        <ul className="card-highlights-list">
          {project.highlights.map((highlight) => (
            <li className="card-highlight-item" key={highlight}>
              <span className="highlight-bullet" aria-hidden="true">
                •
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="card-actions">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="card-btn card-btn-github"
            aria-label={`View ${project.title} source code on GitHub`}
            data-cursor="disable"
          >
            <FaGithub className="btn-icon" />
            <span>GitHub</span>
            <MdArrowOutward className="btn-arrow" />
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="card-btn card-btn-live"
            aria-label={`Open live demonstration for ${project.title}`}
            data-cursor="disable"
          >
            <span>Live Demo</span>
            <MdArrowOutward className="btn-arrow" />
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;

import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Development <span>&</span>
          <br /> Projects
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Independent Developer</h4>
                <h5>Full-Stack &amp; AI Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building and iterating on full-stack and AI-focused projects while
              developing practical experience across frontend engineering,
              backend systems, databases, AI integration, retrieval systems, and
              automation workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BTech CSE</h4>
                <h5>7th Sem · CGPA 7.0</h5>
              </div>
              <h3>STUDENT</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Computer Science Engineering.
              Focused on core software engineering, data structures, full-stack web
              development, and artificial intelligence applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Highlights</h4>
                <h5>AI &amp; Web Systems</h5>
              </div>
              <h3>RECENT</h3>
            </div>
            <p>
              Built DocuMind AI (RAG document Q&amp;A platform), The PodTrim
              (automated video processing pipeline), Smart Resume Matcher
              (deterministic matching platform), and YTS Chitwan (full-stack web platform).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

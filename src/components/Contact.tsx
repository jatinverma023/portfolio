import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <p style={{ marginTop: "10px", marginBottom: "30px", opacity: 0.8, fontSize: "16px", maxWidth: "600px" }}>
          Have a project idea, internship opportunity, or just want to connect? Feel free to reach out.
        </p>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:jatinverma90900@gmail.com"
                data-cursor="disable"
              >
                Email — jatinverma90900@gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/jatin-verma-ai"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — www.linkedin.com/in/jatin-verma-ai
              </a>
            </p>
            <h4>Education</h4>
            <p>
              Bachelor of Technology (BTech) — Computer Science Engineering
            </p>
            <p>
              Currently pursuing · 7th Semester (CGPA: 7.0)
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="mailto:jatinverma90900@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
            <a
              href="https://github.com/jatinverma023"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/jatin-verma-ai"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Jatin Verma</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

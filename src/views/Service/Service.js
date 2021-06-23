import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../images/logo.svg";
// import { FaReact } from "@fortawesome/free-solid-svg-icons";
import {
  faCss3,
  faHtml5,
  faJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

const Service = () => {
  return (
    <section className="page">
      <motion.div
        className="block"
        animate={{
          scale: [1, 2, 4, 3, 1],
          rotate: [0, 0, 270, 0, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          opacity: [1, 0.7, 0.2, 0.4, 0.6],
        }}
        transition={{ duration: 10 }}
      >
        To fulfill your wishes . . .
      </motion.div>

      <div>
        <h2 id="service">Skills and projects</h2>
        <div className="service__div">
          <h2>Skills</h2>
          <ul className="services">
            <li className="service__box">
              HTML<br></br>
              <span className="html">
                <FontAwesomeIcon icon={faHtml5} />
              </span>
              <br></br>
            </li>
            <li class="service__box">
              CSS
              <br></br>
              <span className="css">
                <FontAwesomeIcon icon={faCss3} />
              </span>
              <br></br>
            </li>
            <li class="service__box">
              Java Script<br></br>
              <span className="js">
                <FontAwesomeIcon icon={faJs} />
              </span>
              <br></br>
            </li>

            <li class="service__box">
              React
              <br></br>{" "}
              <span className="react">
                <img src={logo} className="App-logo" alt="logo" />
              </span>
              <br></br>
            </li>
            <li class="service__box">
              python<br></br>
              <span className="python">
                <FontAwesomeIcon icon={faPython} />
              </span>
              <br></br>
            </li>
          </ul>
        </div>
        <div>
          <h2>Refering Projects</h2>
          <ul class="services">
            <li class="service__box">
              Portfolio <br></br>
              <a
                href="https://tedrosgh.github.io/personal-portofolio/"
                className="links"
              >
                HTML and Sass
              </a>
            </li>
            <li class="service__box">second project</li>
            <li class="service__box">third project</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Service;

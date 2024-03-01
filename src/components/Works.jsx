import React, { useEffect, useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, view} from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  image,
  source_code_link,
  web_link
}) => {
  return (
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[260px] w-full" >

        <div className="mt-3">
          <h3 className="text-white font-bold text-[20px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
        <a target="_blank" className="text-[14px] text-[#56ccf2]" href="https://www.github.com/devsujay19">github.com/devsujay19</a>
        </div>
      </div>
  );
};

const Works = () => {

  const [domains, setDomains] = useState(["All (1)"]);
  const [filteredProj, setFilteredProj] = useState(projects)

  const filterDomains = (domain) => {
    let filteredProjects;
    if(domain != "All (1)"){
      filteredProjects = projects.filter(e=>e.domain == domain)
    }else {
      filteredProjects=projects;
    }
    setFilteredProj(filteredProjects);
  }

  return (
    <>
      <motion.div className="about_header_details">
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex about_header_details">
        <motion.p
          // variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          For some reasons, my projects are con not be embedded here. Those projects were never uploaded on GitHub. Because, they're on under constant development phase, when I've satifaction that the projects are now can be uploaded to GitHub repositories, I'll surely upload them. Stay tuned with me on GitHub!
        </motion.p>
      </div>

      <div className="domains">
        {domains?.map((e)=>(
          <button key={e} onClick={() => filterDomains(e)} className="domains__each">
            <h2>{e}</h2>
          </button>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-7 about_header_details">
        {filteredProj?.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

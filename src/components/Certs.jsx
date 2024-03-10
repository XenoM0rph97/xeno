import React from "react";

import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { CertCanvas } from "./canvas";

const Certs = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Education and Trainings
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Certifications
        </h2>
      </motion.div>
    
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
      {certifications.map((cert) => (
        <div className='w-500 h-500' key={cert.identifier}>
        <img src={cert.path} title={cert.name}></img>
          {/* <CertCanvas identifier={cert.identifier} /> */}
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Certs, "");
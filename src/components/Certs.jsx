import React from "react";

import { CertCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";

const Certs = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Certs, "");
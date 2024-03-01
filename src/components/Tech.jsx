import React, { useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [timeoutBool, setimeoutBool] = useState(false);

  setTimeout(() => {
    setimeoutBool(true);
  }, 1000);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-1">
      {timeoutBool &&
        technologies.map((technology) => (
          <div className="w-20 h-20 m-1 flex justify-center items-center" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

import { useState } from "react";
import SectionTitle from "./SectionTitle";
import CGI from "./works/CGI";
import LafargeHolcim from "./works/LafargeHolcim";

const Experience = () => {
  const [workCGI, setWorkCGI] = useState(true);
  const [workLafargeHoclim, setWorkLafargeHolcim] = useState(false);

  const handleCGI = () => {
    setWorkCGI(true);
    setWorkLafargeHolcim(false);
  };

  const handleLafargeHolcim = () => {
    setWorkCGI(false);
    setWorkLafargeHolcim(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleCGI}
            className={`${
              workCGI
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            CGI
          </li>
          <li
            onClick={handleLafargeHolcim}
            className={`${
              workLafargeHoclim
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            LafargeHolcim
          </li>
        </ul>
        {workCGI && <CGI />}
        {workLafargeHoclim && <LafargeHolcim />}
      </div>
    </section>
  );
};

export default Experience;

import React, { useRef } from "react";
import { contactData } from "../assets/lib/data.tsx";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
// import { useTheme } from "../context/theme-context";
import { motion, useScroll, useTransform } from "framer-motion";

const Contact: React.FC = () => {
  const { ref } = useSectionInView("Contact");
  const { language } = useLanguage();
  // const { theme } = useTheme();

  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <React.Fragment>
      <section
        className="contact-container w-full min-[1921px]:px-[55rem] mt-16"
        id="contact"
      >
        <div
          className="title-container flex flex-col gap-6 justify-center items-center py-16 max-lg:p-16"
          ref={ref}
        >
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
              textAlign: "center",
            }}
          >
            <p className="text-[--black] mb-6">
              <span className="text-[--orange]">&lt;</span>
              {language === "FR" ? contactData.title.fr : contactData.title.en}
              <span className="text-[--orange]">/&gt;</span>
            </p>

            <h2 className="text-[--black] text-center">
              {language === "FR"
                ? contactData.description.fr
                : contactData.description.en}
            </h2>
          </motion.div>
        </div>
        <div className="flex justify-center mt-6 text-3xl ">
          <a href="mailto:souleymanefmb@gmail.com">
            <button className="w-60 h-20 border border-blue-500 mt-6 font-titleFont text-3xl text-blue-500 tracking-wider rounded-md hover:bg-blue-200 duration-300">
              Say Hello
            </button>
          </a>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;

import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const CGI = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Engineer data
        <span className="text-textGreen tracking-wide">@CGI</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Mars 2024 - Août 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          J'ai été en charge du développement d'un bot d'échecs en Python utilisant Stockfish, permettant une simulation
          précise du comportement des joueurs.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          J'ai conçu et mis en place un pipeline de streaming de données avec Kafka pour l'ingestion, Spark pour le
          traitement, et PostgreSQL pour le stockage, optimisant l'analyse des données de simulation en temps réel.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          J'ai analysé les données des parties simulées pour identifier les facteurs influençant le classement des joueurs et
          développé un tableau de bord interactif pour suivre et analyser les performances individuelles et collectives.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Présentation du jeu prévue au DevFest de Nantes en octobre 2024, avec des retours attendus des participants.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Outils: Python, Java, Docker
        </li>
      </ul>
    </motion.div>
  );
};

export default CGI;

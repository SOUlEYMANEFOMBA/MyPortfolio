import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const LafargeHolcim = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Engineer data
        <span className="text-textGreen tracking-wide">@LafargeHolcim</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Avril 2022 - Août 2022
      </p>
      <p className="text-sm mt-1 font-medium text-textDark">
        Sujet : Mise en place d'un modèle de prévision de la demande de ciment pour les prochaines années.
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          J'ai réalisé une analyse des données pour identifier les variables et les règles de corrélation, définissant les
          fondations du modèle de prévision.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          J'ai mis en place un modèle économétrique de prévision de la demande en ciment, avec une erreur de précision de
          moins de 1%.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          J'ai été en charge de la mise en place des outils pour évaluer la qualité et la pertinence des données internes et
          externes, augmentant la précision des prévisions.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          J'ai mis en œuvre un processus de mise à jour du modèle, réduisant les erreurs de prévision.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Outils: Python, R, RShiny
        </li>
      </ul>
    </motion.div>
  );
};

export default LafargeHolcim;

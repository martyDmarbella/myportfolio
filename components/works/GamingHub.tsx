import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/Ti";

function GamingHub() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Owner
        <span className="text-textGreen tracking-wide">@GamingHub</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">July 2014 - January 2020</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1"><TiArrowForward /></span>
          As a former owner of a computer shop, it's a great experience owning one. I had many players in the shop, and there was no age gap. We all just had fun playing games. I also managed a team that competed in League of Legends tournaments in our town.
        </li>
      </ul>
    </motion.div>
  );
}

export default GamingHub;

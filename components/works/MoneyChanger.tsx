import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/Ti";

function MoneyChanger() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">Liasson Officer
        <span className="text-textGreen tracking-wide">@Pulido&rsquo;s Money Changer</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">Sep 2010 - 2014</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1"><TiArrowForward /></span>
          My role is essential in facilitating effective communication and coordination between money changer establishments and external entities.
        </li>
      </ul>
    </motion.div>
  );
}

export default MoneyChanger;

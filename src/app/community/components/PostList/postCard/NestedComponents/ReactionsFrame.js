import {
  Heart,
  ShareNetwork,
  LinkSimple,
  CurrencyDollar,
  ArrowSquareOut
} from "phosphor-react";
import { Lobster } from 'next/font/google';

import { motion } from "framer-motion";
  const poppins = Lobster({
  subsets: ['latin'],
  weight: ['400'], // or '600', '700', etc.
  display: 'swap', 
});
const iconVariants = {
  hover: { scale: 1.2 },
  tap: { scale: 1.4 },
};

const ReactionBar = ({ post, postlike, showDonate, toggleLike, toggleDonate }) => {
  return (
    <div className="flex justify-between bg-gray-100 p-2 gap-40 px-5 rounded-md items-center shadow-md">
         <div className="flex gap-4">

      {/* Like */}
<motion.div
  variants={iconVariants}
  whileHover="hover"
  whileTap="tap"
  onClick={() => toggleLike(post._id)}
  className="cursor-pointer group"
>
  <Heart
    weight={postlike[post._id] ? "fill" : "regular"}
    className={`w-7 h-7 transition-colors duration-300 ${
      postlike[post._id]
        ? "text-red-500 group-hover:text-red-600"
        : "text-blue-500 group-hover:text-red-400"
    }`}
  />
</motion.div>


      {/* Share */}
      <motion.div variants={iconVariants} whileHover="hover" whileTap="tap" className="cursor-pointer group">
        <ShareNetwork className="w-7 h-7 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
      </motion.div>

      {/* Link */}
      <motion.div variants={iconVariants} whileHover="hover" whileTap="tap" className="cursor-pointer group">
        <LinkSimple className="w-7 h-7 text-blue-500 group-hover:text-indigo-400 transition-colors duration-300" />
      </motion.div>

      {/* Donate */}
      <motion.div
        variants={iconVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={() => toggleDonate(post._id)}
        className="cursor-pointer group"
      >
        <CurrencyDollar
          weight={showDonate[post._id] ? "fill" : "regular"}
          className={`w-7 h-7 transition-colors duration-300 ${
            showDonate[post._id]
              ? "text-green-500 group-hover:text-green-600"
              : "text-blue-500 group-hover:text-green-400"
          }`}
        />
      </motion.div>

      {/* External */}
      <motion.div variants={iconVariants} whileHover="hover" whileTap="tap" className="cursor-pointer group">
        <ArrowSquareOut className="w-6 h-6 text-blue-500 group-hover:text-purple-400 transition-colors duration-300" />
      </motion.div>
      </div>

        {/* Author */}
              <div className={`font-lobster text-xl text-blue-500`}>
                By: {post.author || "Unknown"}
              </div>
    </div>
  );
};

export default ReactionBar;

import React from "react";
import PageLayout from "../Layout/PageLayout";
import { motion } from "framer-motion";

function Dashboard() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <PageLayout>
      <div className="w-full flex flex-col gap-6">
        {/* Top Row (empty placeholder for now) */}
        <div className="flex flex-row gap-6">
          <div className="flex-1"></div>
        </div>

        {/* Middle Row: 1/4 - 2/4 - 1/4 */}
        <div className="flex flex-row gap-6">
          <motion.div
            className="w-1/4 bg-white/30 dark:bg-gray-800/60 backdrop-blur-lg rounded-xl shadow p-4 min-h-[150px] flex items-center justify-center"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            Left Panel
          </motion.div>

          <motion.div
            className="w-2/4 bg-white/30 dark:bg-gray-800/60 backdrop-blur-lg rounded-xl shadow p-4 min-h-[150px] flex items-center justify-center"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            Main Content
          </motion.div>

          <motion.div
            className="w-1/4 bg-white/30 dark:bg-gray-800/60 backdrop-blur-lg rounded-xl shadow p-4 min-h-[150px] flex items-center justify-center"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            Right Panel
          </motion.div>
        </div>

        {/* Row: 3/4 - 1/4 */}
        <div className="flex flex-row gap-6">
          <motion.div
            className="w-3/4 bg-white/30 dark:bg-gray-800/60 backdrop-blur-lg rounded-xl shadow p-4 min-h-[200px] flex items-center justify-center"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            Large Content
          </motion.div>

          <motion.div
            className="w-1/4 bg-white/30 dark:bg-gray-800/60 backdrop-blur-lg rounded-xl shadow p-4 min-h-[200px] flex items-center justify-center"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            Sidebar / Info
          </motion.div>
        </div>

        {/* Row: 3/4 - 1/4 */}
        <div className="flex flex-row gap-6">
          <motion.div
            className="w-3/4 bg-white/30 dark:bg-gray-800/60 backdrop-blur-lg rounded-xl shadow p-4 min-h-[200px] flex items-center justify-center"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            Another Large Section
          </motion.div>

          <motion.div
            className="w-1/4 bg-white/30 dark:bg-gray-800/60 backdrop-blur-lg rounded-xl shadow p-4 min-h-[200px] flex items-center justify-center"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            Additional Info
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Dashboard;

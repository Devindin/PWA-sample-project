import React from "react";
import { motion } from "framer-motion";

export default function PageHeader({ title, subtitle, actions }) {
  return (
    <motion.div
      className="flex justify-between items-center mb-4"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{title}</h1>
        {subtitle && (
          <p className="text-sm text-gray-500 dark:text-gray-300">{subtitle}</p>
        )}
      </div>
      <div className="flex gap-2">
        {actions && actions.map((action, idx) => <div key={idx}>{action}</div>)}
      </div>
    </motion.div>
  );
}

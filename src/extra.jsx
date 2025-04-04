import { useState } from "react";
import { motion, AnimatePresence, spring } from "framer-motion";

const tabs = [
  { id: "tab1", label: "MOVIES", content: "This is content for Tab One" },
  { id: "tab2", label: "LOGIN", content: "This is content for Tab Two" },
  { id: "tab3", label: "Tab Three", content: "This is content for Tab Three" },
];

const ContinuousTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      {/* Tab Buttons */}
      <div className=" flex justify-around space-x-5 border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`z-100 relative flex-1 text-center py-2 font-medium transition ${activeTab === tab.id ? "text-white" : "text-gray-500"
              }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="znz"
                transition={{ type: spring, bounce: 0.2, duration: 0.5 }}
                className="absolute rounded-4xl bottom-0 left-0 right-0 h-full bg-gray-700 -z-10"
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <AnimatePresence mode="wait">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  layoutId="modal"
                  // initial={{ opacity: 0, y: 40 }}
                  // animate={{ opacity: 1, y: 0 }}
                  // exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 1 }}
                  className="text-gray-800"
                >
                  {tab.content}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
export default ContinuousTabs;
import { useContext } from "react";
import React from "react";
import FeedBackItem from "./FeedBackItem";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "../context/FeedbackContext";
function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return <p>no feedback yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedBackItem item={item} key={item.id}>
              {item}
            </FeedBackItem>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

//   return (
//     <div className="feedback-list">
//       {feedback.map((item) => (
//         <FeedBackItem
//           handleDelete={handleDelete}
//           item={item}
//           key={item.id}
//         >
//           {item}
//         </FeedBackItem>
//       ))}
//     </div>
//   );
// }

export default FeedbackList;

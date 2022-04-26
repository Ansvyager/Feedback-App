import { createContext, useState } from "react";
import FeedbackData from "../data/FeddbackData";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  // Add Feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    console.log(newFeedback);
  };

// update Feedbackdata
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item)=>item.id === id ? {...item, ...updItem} : item))
  }

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({ 
      item,
      edit: true,
    });
  };
  // Delete Feedback
  const deleteFeedback = (id) => {
    if (window.confirm("are you sure want to delete ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

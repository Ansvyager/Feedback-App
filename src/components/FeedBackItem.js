import {FaTimes, FaEdit} from "react-icons/fa"
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import PropTypes from 'prop-types'
import React from "react";
import Card from "./shared/Card";
function FeedBackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={()=>{deleteFeedback(item.id);}}>
        <FaTimes color="purple"/>
      </button>
      <button className="edit" color="purple" onClick={()=>{editFeedback(item);}}>
        <FaEdit/>
      </button >
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedBackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default FeedBackItem;

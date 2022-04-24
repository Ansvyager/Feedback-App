import {FaTimes} from "react-icons/fa"
import PropTypes from 'prop-types'
import React from "react";
import Card from "./shared/Card";
function FeedBackItem({ item, handleDelete }) {
 
  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={()=>{handleDelete(item.id)}}>
        <FaTimes color="purple"/>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedBackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default FeedBackItem;

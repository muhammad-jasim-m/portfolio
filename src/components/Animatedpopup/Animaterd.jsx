import React from 'react';
import { motion } from 'framer-motion';
import './Animated.css';

const Animaterd = ({ content, onClose }) => {
  return (
    <motion.div
      className="popup-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="popup-content"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={content.image} alt={content.heading} />
        <h2>{content.heading}</h2>
        <p>{content.detail}</p>
        <button className="close-button" onClick={onClose}>Close</button>
      </motion.div>
    </motion.div>
  );
};

export default Animaterd;

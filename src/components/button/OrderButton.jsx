import React from "react";
import { motion } from "framer-motion";

const OrderButton = ({ onClick }) => {
  const buttonVariants = {
    rest: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
    click: {
      scale: 0.9,
      rotate: -5,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <motion.button
      className="bg-blue-500 text-white font-bold py-3 px-12 rounded-full shadow-lg mb-5"
      onClick={onClick}
      variants={buttonVariants}
      initial="rest"
      whileHover="hover"
      whileTap="click"
      
    >
      Order Now
    </motion.button>
  );
};

export default OrderButton;

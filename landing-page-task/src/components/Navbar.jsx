import React from 'react'
import { motion } from 'framer-motion';
import "../App.css"

function Navbar() {
      const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  };
  return (
         <div className="nav">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="logo"
        >
          Biccas
        </motion.div>
        <motion.ul
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="nav-items"
        >
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>FAQ</li>
          <li>Blog</li>
        </motion.ul>
        <motion.div 
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="nav-items">

        <div className="login-signup">
       
          <button>Sign Up</button>
          <button>Login</button>
        </div>
        </motion.div>
      </div>
  )
}

export default Navbar
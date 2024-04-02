"use client"
import { motion } from "framer"
import React from "react"

const template = ({children}:{children:React.ReactNode }) => {
  return (
    <motion.div 
       initial={{y:20,opacity:0}} 
       animate={{y:0,opacity:100}} 
       transition={{type:'easeIn',duration:0.5}}
    >
          {children}

    </motion.div>
  );
}

export default template
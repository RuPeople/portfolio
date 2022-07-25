import React from 'react';
import {AnimatePresence, motion} from "framer-motion";


const HamburgerIcon = () => {
    return (
        <AnimatePresence>
            <motion.svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
                        initial="hidden"
                        animate="visible">
                <motion.path
                    initial={{rotate:45, opacity: 1, y:5 }}
                    animate={{rotate:0, opacity: 1, y:0 }}
                    exit={{ rotate:45, opacity: 1, y:5}}
                    fill="#D9D9D9" d="M2 4h16v2H2Z" />
                <motion.path
                    initial={{x: -300, opacity: 0}}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    fill="#D9D9D9" d="M2 9h16v2H2Z" />
                <motion.path
                    initial={{rotate:-45, opacity: 1, y:-5 }}
                    animate={{rotate:0, opacity: 1, y:0 }}
                    exit={{ rotate:-45, opacity: 1, y:-5}}
                    fill="#D9D9D9" d="M2 14h16v2H2Z" />
            </motion.svg>

        </AnimatePresence>
    );
};

export default HamburgerIcon;
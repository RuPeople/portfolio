import React from 'react';
import {AnimatePresence, motion} from "framer-motion";


const CloseIcon = () => {
    return (
        <AnimatePresence>
            <motion.svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <motion.path
                    initial={{rotate:0, opacity: 1, y:0 }}
                    animate={{rotate:45, opacity: 1, y:5 }}
                    exit={{ rotate:0, opacity: 1, y:0}}
                    fill="#D9D9D9" d="M2 4h16v2H2Z" />
                <motion.path
                    initial={{rotate:0, opacity: 1, y:0 }}
                    animate={{rotate:-45, opacity: 1, y:-5 }}
                    exit={{ rotate:0, opacity: 1, y:0}}
                    fill="#D9D9D9" d="M2 14h16v2H2Z" />
            </motion.svg>
        </AnimatePresence>
    );
};

export default CloseIcon;
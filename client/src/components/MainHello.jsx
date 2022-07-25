import React from 'react';
import {motion} from "framer-motion";

const emojiMotion = {
    rest: {
        fill: "#d4d4d4",
    },
    hover: {
        fill: "#816797",
        rotate: [0, 14, -8, 14, -8,10,0],
        duration: 2.5
    },
    tap: {
        fill: "#816797",
        rotate: [0, 14, -8, 14, -8,10,0],
        duration: 2.5
    }
}

const textMotion = {
    rest: {
        color: "#d4d4d4",
    },
    hover: {
        color: "#816797",
    },
    tap: {
        color: "#816797",
    }
}


const MainHello = () => {
    return (
        <motion.div
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            animate="rest"
            variants={textMotion}
            className="main__hello d-flex flex-row justify-content-center align-items-center py-3 px-4 text-center">
                    <span>
                        Hello world!
                        <motion.div className="mx-1 d-inline-block" style={{width: 20, cursor: "pointer"}} variants={emojiMotion}>👋</motion.div>
                        I’m a frontend developer based in vladivostok!
                    </span>
        </motion.div>
    );
};

export default MainHello;
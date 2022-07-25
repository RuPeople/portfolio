import React, {useState} from 'react';
import {MAIN_ROUTE} from "../utils/consts";
import {motion} from "framer-motion";
import {NavLink} from "react-router-dom";

const svgMotion = {
    rest: {
        fill: "#d4d4d4",
    },
    hover: {
        fill: "#816797",
        scaleX:-1,
    },
    tap: {
        fill: "#816797",
        scaleX: -1,
        rotate:180,
    }
}


const HeaderLogo = () => {

    return (
        <motion.div initial="rest" whileHover="hover" whileTap="tap" animate="rest">
            <NavLink to={MAIN_ROUTE} className="header__logo d-flex flex-row me-4 text-decoration-none">
                <svg
                            className="me-2" xmlns="http://www.w3.org/2000/svg" width="38" height="18" viewBox="0 0 38 21" fill="none">
                    <path d="M0 8.72188V13.1867L12.2668 19.1829V15.0037L3.98626 10.9543L12.2668 6.90482V2.72559L0 8.72188Z" fill="#D4D4D4"/>
                    <motion.path variants={svgMotion} d="M20.9924 0L17.441 10.5L13.8896 21H16.988L24.0908 0H20.9924Z" fill="#d4d4d4"/>

                    <path d="M25.7332 2.72559V6.90482L33.9956 10.9543L25.7332 15.0037V19.1829L38 13.1867V8.72188L25.7332 2.72559Z" fill="#D4D4D4"/>
                </svg>
                David Chamurliev
            </NavLink>
        </motion.div>
    );
};

export default HeaderLogo;
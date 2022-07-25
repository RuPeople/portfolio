import React from 'react';
import {motion} from "framer-motion";
import {NavLink} from "react-router-dom";

const MainAbout = () => {
    return (
        <motion.div
            className="main__about d-flex flex-column justify-content-start align-items-start my-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}>
            <h1 className="mb-2 h-auto w-auto pb-1">About</h1>
            <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum</p>
            <motion.div className="main__about_portfolio-button mx-auto"
                        style={{backgroundColor: "#6f5a81", borderRadius: 8 }}
                        whileHover={{
                            rotate: Math.random() * 11 - 10,
                            backgroundColor:"#816797"
                        }}
            >
                <NavLink className="w-auto d-flex  py-3 px-5" to={'/portfolio'}>
                    My portfolio
                    <svg className="ms-4" xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                        <path d="M14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289L8.34315 0.928932C7.95262 0.538408 7.31946 0.538408 6.92893 0.928932C6.53841 1.31946 6.53841 1.95262 6.92893 2.34315L12.5858 8L6.92893 13.6569C6.53841 14.0474 6.53841 14.6805 6.92893 15.0711C7.31946 15.4616 7.95262 15.4616 8.34315 15.0711L14.7071 8.70711ZM0 9L14 9V7L0 7L0 9Z" fill="#D4D4D4"/>
                    </svg>
                </NavLink>
            </motion.div>
        </motion.div>
    );
};

export default MainAbout;
import React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import MainHello from "../components/MainHello";
import MainAvatar from "../components/MainAvatar";
import MainAbout from "../components/MainAbout";
import MainBio from "../components/MainBio";
import MainSocials from "../components/MainSocials";



const Main = () => {
    return (
        <AnimatePresence>
            <motion.section
                initial={{ y:10, opacity: 0 }}
                animate={{y:0, opacity: 1 }}
                transition={{duration: 0.8,}}
                exit={{y:10, opacity: 0 }} className="main mx-auto px-4 px-sm-4 px-md-0" style={{maxWidth: 576}}>
                <MainHello/>
                <MainAvatar/>
                <MainAbout/>
                <MainBio/>
                <MainSocials/>
            </motion.section>
        </AnimatePresence>

    );
};

export default Main;
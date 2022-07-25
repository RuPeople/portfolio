import React from 'react';
import {motion} from "framer-motion";
import {Image} from "react-bootstrap";
import avatar_image from "../static/avatar_img.jpg";

const MainAvatar = () => {
    return (

        <motion.div
            className="main__avatar d-flex flex-column flex-sm-row justify-content-between my-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}>
            <div className="main__avatar_text">
                <h1 className="mb-3">David Chamurliev</h1>
                <h2 className="d-block">artist / developer / <s>playboy / philanthropist</s></h2>
            </div>
            <Image className="main__avatar_image mx-auto ms-sm-auto mx-sm-0 mt-3 mt-sm-0" roundedCircle style={{width: 96, height: 96}} src={avatar_image} />
        </motion.div>
    );
};

export default MainAvatar;
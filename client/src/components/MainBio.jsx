import React from 'react';
import {motion} from "framer-motion";
import {ListGroup} from "react-bootstrap";

const MainBio = () => {
    return (
        <motion.div
            className="main__bio d-flex flex-column justify-content-start align-items-start my-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}>
            <h1 className="mb-2 h-auto w-auto pb-1">Bio</h1>
            <ListGroup className="main__bio_list-group w-100">
                <ListGroup.Item
                    className="main__bio_list-group_item d-flex justify-content-start align-items-start p-0 my-1"
                >
                    <span style={{width: 65}} className="col-1">2002</span>
                    Born in Vladivostok
                </ListGroup.Item>
                <ListGroup.Item
                    className="main__bio_list-group_item d-flex justify-content-start align-items-start p-0 my-1"
                >
                    <span style={{width: 65}} className="col-1">2021</span>
                    Worked in 33/87 Studio
                </ListGroup.Item>
                <ListGroup.Item
                    className="main__bio_list-group_item d-flex justify-content-start align-items-start p-0 my-1"
                >
                    <span style={{width: 65}} className="col-1">2022</span>
                    <div>Graduated from Vladivostok State University of Economics and Service’s academic college</div>

                </ListGroup.Item>

            </ListGroup>
        </motion.div>
    );
};

export default MainBio;
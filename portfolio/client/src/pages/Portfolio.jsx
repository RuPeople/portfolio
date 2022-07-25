import React, {useContext, useEffect, useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";

import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchCategories, fetchWorks} from "../http/portfolioAPI";
import {WORK_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router";


import sprint from "../static/thumbnails/7087b952-1ee2-4363-abca-8072ba3e6bf9.svg"
import this_site from "../static/thumbnails/efb36397-2122-4a54-af3f-d26cc7fccaed.svg";
import digital_craft from "../static/thumbnails/23211bff-3c8c-4a9e-b347-2332042701ca.svg";
import worldskills from "../static/thumbnails/9470097f-5ea9-4c1b-b39a-5f973eb98fef.svg";

const Portfolio = observer(() => {
    const {work} = useContext(Context)
    const navigate = useNavigate()


    useEffect(() => {
        fetchWorks(null ).then(data=>work.setWorks(data.rows))
        fetchCategories().then(data=>work.setCategories(data))
    }, [])


    return (
        <AnimatePresence>
            <motion.section
                initial={{ y:10, opacity: 0 }}
                animate={{y:0, opacity: 1 }}
                exit={{y:10, opacity: 0 }}
                className="portfolio mx-auto px-5 px-sm-4 px-md-0" style={{maxWidth: 576}}>

                    {work.categories.map(category =>
                        <div className="portfolio__category d-flex flex-column justify-content-start align-items-start my-5" key={category.id}>
                            <h1 className="mb-2 h-auto w-auto pb-1" >{category.name}</h1>
                            <div className="d-flex flex-column flex-sm-row justify-content-between row row-cols-1 row-cols-sm-2 flex-wrap g-2 w-100">
                                {work.works.filter(work => work.categoryId === category.id).map(filteredWork =>
                                    (
                                        <motion.div onClick={() => navigate(WORK_ROUTE + '/' + filteredWork.id)}
                                                    key={filteredWork.id}
                                                    style={{cursor:"pointer"}}
                                                    initial={{ opacity: 0, x:100 }}
                                                    whileInView={{ opacity: 1, x:0 }}
                                                    viewport={{ once: true }}
                                                    whileHover={{scale:1.025}}

                                                    className="portfolio__work col-12 col-sm-6 h-100 d-flex flex-column justify-content-center align-items-center">
                                            <img className="portfolio__work_image mb-2"

                                                //TODO: GH-PAGES
                                                /*#region GH-PAGES*/
                                                 src={filteredWork.thumbnail}
                                                /*#endregion GH-PAGES*/

                                                //TODO: FullStack
                                                /*#region FullStack*/
                                                 /*src={process.env.REACT_APP_API_URL +  filteredWork.thumbnail}*/
                                                /*#endregion FullStack*/
                                            />

                                            <h1 className="portfolio__work_name text-center mb-2">{filteredWork.name}</h1>
                                            <p className="portfolio__work_description justify-content-center w-100 text-center text-break">{filteredWork.smallDescription}</p>
                                        </motion.div>
                                    )
                                )}
                            </div>
                        </div>
                    )}
            </motion.section>
        </AnimatePresence>
    );
});

export default Portfolio;
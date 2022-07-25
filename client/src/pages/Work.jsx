import React, {useEffect, useState} from 'react';
import {Badge, Breadcrumb, BreadcrumbItem, BreadcrumbLink, List, ListItem} from "@chakra-ui/react";
import BreadcrumbSeparator from "../static/BreadcrumbSeparator";
import {AnimatePresence, motion} from "framer-motion";
import {NavLink} from "react-router-dom";
import {PORTFOLIO_ROUTE} from "../utils/consts";
import {fetchImages, fetchOneWork} from "../http/portfolioAPI";

import {useParams} from "react-router-dom";

const Work = () => {
    const [work, setWork] = useState({})
    const [images, setImages] = useState([])
    const {id} = useParams()

    useEffect(() => {
        fetchOneWork(id).then(data => setWork(data))
        fetchImages(id).then(data => {
            setImages(data.rows)
        })
    },[])

    return (
        <AnimatePresence>
            <motion.section
                initial={{y: 10, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                exit={{y: 10, opacity: 0}}
                className="work mx-auto px-5 px-sm-4 px-md-0" style={{maxWidth: 576}}>
                <Breadcrumb className="breadcrumbs" spacing='8px' separator={<BreadcrumbSeparator color='white'/>}>
                    <BreadcrumbItem>
                        <BreadcrumbLink className="breadcrumbs__link" as={NavLink}
                                        to={PORTFOLIO_ROUTE}>Portfolio</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink className="breadcrumbs__link breadcrumbs__link_current"
                                        href='#'>{work.name}</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                <section>
                    <p className="work__description">{work.bigDescription}</p>
                    <List className="work__list p-0">
                        {work.website ?
                            <ListItem
                                className="work__list_item d-flex flex-column flex-sm-row justify-content-start align-items-start align-items-sm-center mb-2">
                                <Badge
                                    className="work__list_item-badge d-flex flex-row justify-content-center align-items-center py-1 px-2 me-2 ms-0"
                                    ml='1'>
                                    <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                         fill="currentColor"
                                         viewBox="0 0 16 16">
                                        <path
                                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
                                    </svg>
                                    Website
                                </Badge>
                                <a className="work__list_item-link d-flex flex-row my-auto mt-1 mt-sm-0 mb-0"
                                   href={work.website}>{work.website}</a>
                            </ListItem>
                            :
                            <></>
                        }
                        {work.stack ?
                            <ListItem
                                className="work__list_item d-flex flex-column flex-sm-row justify-content-start align-items-start align-items-sm-center mb-2">
                                <Badge
                                    className="work__list_item-badge d-flex flex-row justify-content-center align-items-center py-1 px-2 me-2 ms-0"
                                    ml='1'>
                                    <svg className="bi bi-globe me-2" xmlns="http://www.w3.org/2000/svg" width="16"
                                         height="16" fill="currentColor"
                                         viewBox="0 0 16 16">
                                        <path xmlns="http://www.w3.org/2000/svg"
                                              d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
                                        <path xmlns="http://www.w3.org/2000/svg"
                                              d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
                                    </svg>
                                    Stack
                                </Badge>
                                <span className="work__list_item-text d-flex flex-row my-auto mt-1 mt-sm-0 mb-0">{work.stack}</span>
                            </ListItem>
                            :
                            <></>
                        }{work.year ?
                        <ListItem
                            className="work__list_item d-flex flex-column flex-sm-row justify-content-start align-items-start align-items-sm-center mb-2">
                            <Badge
                                className="work__list_item-badge d-flex flex-row justify-content-center align-items-center py-1 px-2 me-2 ms-0"
                                ml='1'>
                                <svg className="bi bi-globe me-2" xmlns="http://www.w3.org/2000/svg" width="16"
                                     height="16" fill="currentColor"
                                     viewBox="0 0 16 16">
                                    <path xmlns="http://www.w3.org/2000/svg"
                                          d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                </svg>
                                year
                            </Badge>
                            <span className="work__list_item-text d-flex flex-row my-auto mt-1 mt-sm-0 mb-0">{work.year}</span>
                        </ListItem>
                        :
                        <></>
                    }
                    </List>
                    <div className="work__gallery">
                        {images.map(image =>
                            <motion.img
                                initial={{opacity: 0, x: 100}}
                                whileInView={{opacity: 1, x: 0}}
                                viewport={{once: true}}
                                className="w-100 mb-3" style={{borderRadius: 10}}
                                src={process.env.REACT_APP_API_URL + image.img} />
                        )}
                    </div>
                </section>
            </motion.section>
        </AnimatePresence>
    );
};

export default Work;
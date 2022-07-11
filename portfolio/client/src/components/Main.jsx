import React from 'react';

import avatar_image from '../static/avatar_img.jpg'
import {Image, ListGroup} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";

const Main = () => {
    return (
        <AnimatePresence>
            <motion.section className="main mx-auto px-5 px-sm-0" style={{maxWidth: 576}}>
                <div className="main__hello py-3 px-4 text-center">
                    Hello world! i’m a frontend developer based in vladivostok!
                </div>
                <div className="main__avatar d-flex flex-column flex-sm-row justify-content-between my-5">
                    <div className="main__avatar_text">
                        <h1 className="mb-3">David Chamurliev</h1>
                        <h2 className="d-block">artist / developer / <s>playboy / philanthropist</s></h2>
                    </div>
                    <Image className="main__avatar_image mx-auto mt-3 mt-sm-0" roundedCircle style={{width: 96, height: 96}} src={avatar_image} />
                </div>
                <div className="main__about d-flex flex-column justify-content-start align-items-start my-5">
                    <h1 className="mb-2 h-auto w-auto pb-1">About</h1>
                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum</p>
                    <NavLink className="w-auto d-flex mx-auto py-3 px-5" to={'/portfolio'}>
                        My portfolio
                        <svg className="ms-4" xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                            <path d="M14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289L8.34315 0.928932C7.95262 0.538408 7.31946 0.538408 6.92893 0.928932C6.53841 1.31946 6.53841 1.95262 6.92893 2.34315L12.5858 8L6.92893 13.6569C6.53841 14.0474 6.53841 14.6805 6.92893 15.0711C7.31946 15.4616 7.95262 15.4616 8.34315 15.0711L14.7071 8.70711ZM0 9L14 9V7L0 7L0 9Z" fill="#D4D4D4"/>
                        </svg>
                    </NavLink>
                </div>
                <div className="main__bio d-flex flex-column justify-content-start align-items-start my-5">
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
                </div>
                <div className="main__socials d-flex flex-column justify-content-start align-items-start my-5">
                    <h1 className="mb-2 h-auto w-auto pb-1">Socials</h1>
                    <address className="w-100 d-flex flex-column justify-content-start align-items-start">
                        <a className="main__socials_link d-flex flex-row justify-content-start align-items-center py-1 px-3 w-auto my-1" href="https://github.com/RuPeople">
                            <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 3C8.374 3 3 8.50883 3 15.3034C3 20.7394 6.438 25.3511 11.207 26.9782C11.806 27.092 12 26.7106 12 26.3866V24.0962C8.662 24.8405 7.967 22.6444 7.967 22.6444C7.421 21.2223 6.634 20.844 6.634 20.844C5.545 20.0801 6.717 20.0965 6.717 20.0965C7.922 20.1827 8.556 21.3648 8.556 21.3648C9.626 23.2452 11.363 22.7018 12.048 22.387C12.155 21.5924 12.466 21.049 12.81 20.7425C10.145 20.4298 7.343 19.3748 7.343 14.6615C7.343 13.3174 7.812 12.2203 8.579 11.3591C8.455 11.0485 8.044 9.79658 8.696 8.10282C8.696 8.10282 9.704 7.77268 11.997 9.36391C12.954 9.09119 13.98 8.95483 15 8.9497C16.02 8.95483 17.047 9.09119 18.006 9.36391C20.297 7.77268 21.303 8.10282 21.303 8.10282C21.956 9.79761 21.545 11.0495 21.421 11.3591C22.191 12.2203 22.656 13.3184 22.656 14.6615C22.656 19.3871 19.849 20.4277 17.177 20.7322C17.607 21.1136 18 21.8621 18 23.0104V26.3866C18 26.7137 18.192 27.0982 18.801 26.9772C23.566 25.348 27 20.7374 27 15.3034C27 8.50883 21.627 3 15 3Z" fill="#D4D4D4"/>
                            </svg>
                            @RuPeople
                        </a>
                        <a className="main__socials_link d-flex flex-row justify-content-start align-items-center py-1 px-3 w-auto my-1" href="https://discord.com/users/Cerberus#3933/">
                            <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M23.096 8.55679C21.1568 6.99839 18.0904 6.73439 17.9608 6.72319C17.756 6.70559 17.5616 6.82159 17.4776 7.00879C17.4744 7.01519 17.3032 7.51199 17.1376 7.99119C19.3912 8.38559 20.9224 9.26079 21.004 9.30879C21.3864 9.53119 21.5144 10.0216 21.2912 10.4032C21.1432 10.6576 20.8752 10.8 20.6 10.8C20.4632 10.8 20.3256 10.7656 20.1992 10.692C20.1768 10.6784 17.9304 9.39999 15.0016 9.39999C12.072 9.39999 9.82479 10.6792 9.80239 10.692C9.42079 10.9136 8.93119 10.7832 8.70959 10.4008C8.48799 10.02 8.61679 9.53119 8.99759 9.30879C9.07919 9.26079 10.616 8.38239 12.876 7.98879C12.7016 7.50399 12.5256 7.01519 12.5224 7.00879C12.4384 6.82079 12.244 6.70239 12.0392 6.72319C11.9096 6.73359 8.84319 6.99759 6.87839 8.57759C5.85119 9.52639 3.79999 15.0736 3.79999 19.8696C3.79999 19.9544 3.82159 20.0368 3.86399 20.1104C5.28079 22.5984 9.14319 23.2496 10.0232 23.2776C10.0288 23.2784 10.0336 23.2784 10.0384 23.2784C10.1936 23.2784 10.34 23.204 10.432 23.0784L11.384 21.7888C9.29599 21.2856 8.19199 20.4944 8.12559 20.4456C7.77039 20.184 7.69359 19.6832 7.95519 19.3272C8.21599 18.9728 8.71519 18.8944 9.07039 19.1544C9.09999 19.1736 11.1376 20.6 15 20.6C18.8776 20.6 20.9096 19.168 20.9296 19.1536C21.2848 18.896 21.7856 18.9736 22.0456 19.3304C22.3048 19.6856 22.2296 20.1832 21.876 20.444C21.8096 20.4928 20.7112 21.2824 18.628 21.7856L19.568 23.0776C19.66 23.204 19.8064 23.2776 19.9616 23.2776C19.9672 23.2776 19.972 23.2776 19.9768 23.2768C20.8576 23.2488 24.72 22.5976 26.136 20.1096C26.1784 20.036 26.2 19.9536 26.2 19.8688C26.2 15.0736 24.1488 9.52639 23.096 8.55679ZM11.8 18.2C10.916 18.2 10.2 17.3048 10.2 16.2C10.2 15.0952 10.916 14.2 11.8 14.2C12.684 14.2 13.4 15.0952 13.4 16.2C13.4 17.3048 12.684 18.2 11.8 18.2ZM18.2 18.2C17.316 18.2 16.6 17.3048 16.6 16.2C16.6 15.0952 17.316 14.2 18.2 14.2C19.084 14.2 19.8 15.0952 19.8 16.2C19.8 17.3048 19.084 18.2 18.2 18.2Z" fill="#D4D4D4"/>
                            </svg>
                            @RuPeople#3933
                        </a>
                        <a className="main__socials_link d-flex flex-row justify-content-start align-items-center py-1 px-3 w-auto my-1" href="https://discord.com/users/Cerberus#3933/">
                            <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 3C8.373 3 3 8.373 3 15C3 21.627 8.373 27 15 27C21.627 27 27 21.627 27 15C27 8.373 21.627 3 15 3ZM21.361 18.967L19.493 18.993C19.493 18.993 19.09 19.072 18.563 18.708C17.864 18.228 17.205 16.979 16.691 17.141C16.17 17.307 16.186 18.431 16.186 18.431C16.186 18.431 16.19 18.629 16.071 18.758C15.942 18.897 15.689 18.883 15.689 18.883H14.852C14.852 18.883 13.006 19.036 11.379 17.34C9.607 15.491 8.041 11.842 8.041 11.842C8.041 11.842 7.949 11.612 8.047 11.494C8.158 11.364 8.457 11.36 8.457 11.36L10.457 11.35C10.457 11.35 10.645 11.383 10.781 11.483C10.892 11.565 10.955 11.719 10.955 11.719C10.955 11.719 11.278 12.538 11.707 13.28C12.543 14.726 12.931 15.043 13.215 14.888C13.629 14.662 13.505 12.844 13.505 12.844C13.505 12.844 13.513 12.184 13.297 11.89C13.129 11.661 12.813 11.593 12.675 11.576C12.562 11.561 12.746 11.299 12.986 11.181C13.346 11.005 13.982 10.995 14.733 11.002C15.318 11.008 15.487 11.044 15.715 11.1C16.405 11.267 16.171 11.911 16.171 13.456C16.171 13.951 16.082 14.647 16.438 14.876C16.592 14.975 16.967 14.891 17.902 13.297C18.347 12.541 18.68 11.653 18.68 11.653C18.68 11.653 18.753 11.495 18.866 11.427C18.982 11.357 19.138 11.379 19.138 11.379L21.243 11.366C21.243 11.366 21.875 11.29 21.978 11.577C22.086 11.877 21.742 12.578 20.882 13.725C19.47 15.609 19.313 15.434 20.486 16.524C21.606 17.565 21.837 18.071 21.876 18.135C22.339 18.906 21.361 18.967 21.361 18.967Z" fill="#D4D4D4"/>
                            </svg>
                            @RuPeople#3933
                        </a>
                    </address>
                </div>
            </motion.section>
        </AnimatePresence>

    );
};

export default Main;
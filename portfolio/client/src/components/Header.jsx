import React, {useRef} from 'react';
import {Link, Menu, MenuButton, MenuItem, MenuList, useColorMode} from "@chakra-ui/react";
import {Button, Container, Offcanvas, Dropdown, Form, Nav, Navbar, NavDropdown, DropdownButton} from "react-bootstrap";
import { NavLink} from "react-router-dom";
import {MAIN_ROUTE, PORTFOLIO_ROUTE} from "../utils/consts";

import {AnimatePresence, motion, useCycle} from "framer-motion";
import HamburgerIcon from "../static/HamburgerIcon";
import GithubIcon from "../static/GithubIcon";
import CloseIcon from "../static/CloseIcon";
import HeaderLogo from "./HeaderLogo";

const Header = () => {

    return (
        <header style={{zIndex: 1045}} className="header position-sticky top-0">
            <Navbar expand="md" style={{height: 60}} className="mx-auto">
                <Container style={{maxWidth: 768}} className="h-100 w-100 d-flex flex-row justify-content-between justify-content-sm-start">
                    <HeaderLogo/>
                    <NavLink to={PORTFOLIO_ROUTE} className="header__link me-4 d-none d-sm-flex text-decoration-none">Portfolio</NavLink>
                    <Nav.Link href="https://github.com/RuPeople" className="header__link flex-row align-items-center text-center me-4 d-none d-sm-flex">
                        <svg className="me-2 d-flex flex-row align-items-center justify-content-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.99998 1.59998C4.46611 1.59998 1.59998 4.53802 1.59998 8.16177C1.59998 11.061 3.43358 13.5206 5.97704 14.3884C6.29651 14.4491 6.39998 14.2456 6.39998 14.0729V12.8513C4.61971 13.2483 4.24904 12.077 4.24904 12.077C3.95784 11.3185 3.53811 11.1168 3.53811 11.1168C2.95731 10.7094 3.58238 10.7181 3.58238 10.7181C4.22504 10.7641 4.56318 11.3945 4.56318 11.3945C5.13384 12.3974 6.06024 12.1076 6.42558 11.9397C6.48264 11.5159 6.64851 11.2261 6.83198 11.0626C5.41064 10.8959 3.91624 10.3332 3.91624 7.81946C3.91624 7.10259 4.16638 6.51749 4.57544 6.05817C4.50931 5.89248 4.29011 5.22482 4.63784 4.32148C4.63784 4.32148 5.17544 4.1454 6.39838 4.99406C6.90878 4.84861 7.45598 4.77588 7.99998 4.77315C8.54398 4.77588 9.09171 4.84861 9.60318 4.99406C10.825 4.1454 11.3616 4.32148 11.3616 4.32148C11.7098 5.22537 11.4906 5.89303 11.4245 6.05817C11.8352 6.51749 12.0832 7.10313 12.0832 7.81946C12.0832 10.3397 10.5861 10.8948 9.16104 11.0572C9.39038 11.2606 9.59998 11.6598 9.59998 12.2722V14.0729C9.59998 14.2473 9.70237 14.4523 10.0272 14.3878C12.5685 13.5189 14.4 11.0599 14.4 8.16177C14.4 4.53802 11.5344 1.59998 7.99998 1.59998Z" fill="#D4D4D4"/>
                        </svg>Source
                    </Nav.Link>

                    <Menu>
                        {({isOpen}) => (<>
                            <MenuButton isActive={isOpen} className="header__burger d-flex justify-content-center align-items-center d-sm-none p-2 border-0 m-0 ">
                                {isOpen ? <CloseIcon/> : <HamburgerIcon/>}
                            </MenuButton>
                            <MenuList className="header__menu py-1">
                                <MenuItem as={NavLink} to={PORTFOLIO_ROUTE} icon={<HamburgerIcon/>} className="header__menu_link border-0 py-2 px-3"passHref>
                                    Portfolio
                                </MenuItem>
                                <MenuItem as={Link} href="https://github.com/RuPeople" icon={<GithubIcon/>} className="header__menu_link border-0 py-2 px-3">
                                        Source
                                </MenuItem>
                            </MenuList>
                        </>)}

                    </Menu>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
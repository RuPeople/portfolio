import React, {useRef} from 'react';
import {Link, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {PORTFOLIO_ROUTE} from "../utils/consts";

import HamburgerIcon from "../static/HamburgerIcon";
import GithubIcon from "../static/GithubIcon";
import CloseIcon from "../static/CloseIcon";
import HeaderLogo from "./HeaderLogo";
import PortfolioIcon from "../static/PortfolioIcon";

const Header = () => {

    return (
        <header style={{zIndex: 1045}} className="header position-sticky top-0">
            <Navbar expand="md" style={{height: 60}} className="mx-auto">
                <Container style={{maxWidth: 768}} className="h-100 w-100 d-flex flex-row justify-content-between justify-content-sm-start">
                    <HeaderLogo/>
                    <NavLink to={PORTFOLIO_ROUTE} className="header__link me-4 d-none d-sm-flex text-decoration-none">
                        <PortfolioIcon/> <span className="ms-1">Portfolio</span>
                    </NavLink>
                    <Nav.Link href="https://github.com/RuPeople" className="header__link flex-row align-items-center text-center me-4 p-0 d-none d-sm-flex">
                        <GithubIcon/> <span className="ms-1">Source</span>
                    </Nav.Link>

                    <Menu>
                        {({isOpen}) => (<>
                            <MenuButton className="header__burger d-flex justify-content-center align-items-center d-sm-none p-2 border-0 m-0 ">
                                {isOpen ? <CloseIcon/> : <HamburgerIcon/>}
                            </MenuButton>
                            <MenuList className="header__menu py-1">
                                <MenuItem as={NavLink} to={PORTFOLIO_ROUTE} icon={<PortfolioIcon/>} className="header__menu_link border-0 py-2 px-3">
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
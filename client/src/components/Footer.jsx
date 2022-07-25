import React from 'react';
import {Container} from "react-bootstrap";

const Footer = () => {
    return (
        <footer  className="footer container d-flex flex-column align-items-center justify-content-center mb-2">
            <Container style={{maxWidth: 576}}>
                <span className="my-1">© 2022 David chamurliev. All Rights Reserved.</span>
                <span className="my-1">3d model <a href="https://skfb.ly/6WxVW">"Shiba"</a> by zixisun02 is licensed under <a href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution</a></span>
            </Container>
        </footer>
    );
};

export default Footer;
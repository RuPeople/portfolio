import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {login, registration} from "../http/userAPI";

const Auth = () => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')



    const click = async () => {
        try{
            let data
            if (isLogin) {
                data = await login(username,password)
            }
            else {
                data = await registration(username, password, name)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(ADMIN_ROUTE)
        }
        catch (e) {
            alert(e.response.data.message)
        }
    }


    return (
        <Container className="d-flex flex-column justify-content-center align-items-center">
            <Card className="p-2">
                <Form className="d-flex flex-column justify-content-center align-items-center">
                    <h5>Authorization</h5>
                    <Form.Control
                        className="my-2"
                        placeholder="Username"
                        value={username}
                        onChange={e=> setUsername(e.target.value)}
                        type="email"
                    />
                    <Form.Control
                        className="my-2"
                        placeholder="Password"
                        value={password}
                        onChange={e=> setPassword(e.target.value)}
                        type="password"
                    />
                    <Button className="mt-2"
                            onClick={click}
                    >
                        Login
                    </Button>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;
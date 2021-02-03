import React/*,  { useState } */ from 'react';
//import { Button, Form } from "react-bootstrap";
//import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LoginForm = () => {

    const { loginWithRedirect } = useAuth0(); 
    
    return(
        <div className="vertical-center">
        <Button
        onClick={() =>  loginWithRedirect()  } 
        id="qsLoginBtn"
        variant="primary"
        className="btn-margin biglogin" 
        >Log In or Register</Button>
        </div>
    );
};

    /* const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const register = () => {
        (axios.post({
            method: "post",
            data: {
                email: registerEmail,
                password: registerPassword,
            },
            withCredentials: true,
            url: "/api/users/register"
        }).then((res) => console.log(res)));
    };
    const login = () => {
        (axios({
            method: "post",
            data: {
                email: loginEmail,
                password: loginPassword,
            },
            withCredentials: true,
            url: "/api/users/login"
        }).then((res) => console.log(res)));
    }
    const getUser = () => {
        (axios({
            method: "get",
            withCredentials: true,
            url: "/api/users/getUser"
        }).then((res) => console.log(res)));
    }
    
    return(
        <form>
            
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control 
                type="email" 
                name="Enter email" 
                onChange={(e) => setLoginEmail(e.target.value)}
                />
                </Form.Group>
            
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control 
                type="password" 
                name="password"
                onChange={(e) => setLoginPassword(e.target.value)}
                />
            </Form.Group>
        
            <Button variant="primary" type="submit" value="Log In" onClick={login}>
                Login 
            </Button>

                <Form.Label>Email:</Form.Label>
                <input 
                type="email" 
                name="Enter email" 
                onChange={(e) => setRegisterEmail(e.target.value)}
                />

            
            <Form.Label>Password:</Form.Label>
            <input 
                type="password" 
                name="password"
                onChange={(e) => setRegisterPassword(e.target.value)}
                />
        
            <Button variant="primary" type="submit" value="Log In" onClick={register}>
                Register
            </Button>
       
        </form>
    ); */


export default LoginForm;



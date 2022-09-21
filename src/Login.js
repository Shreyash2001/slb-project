import React, { useState } from 'react';
import "./Login.css";
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();
    const handleSubmit = () => {
        history.push("/");
    };

    return (
        <div className="login">
            <div className="login__left">
                
            </div>

            <div className="login__right">
                <div>
                    <h1>Login to DMS</h1>
                </div>
                <div className="login__rightForm">
                    <form onSubmit={handleSubmit}>
                        <input placeholder="LDAP" type="text" onChange={(e) => setEmail(e.target.value)} value={email} required />
                        <input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
                        
                         <Button type="submit">Login</Button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login

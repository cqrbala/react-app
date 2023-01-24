import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

export const Login = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('variable') === 'true') {
            navigate("/profile")
        }
        else {
            console.log(localStorage.getItem('variable'));
        }
    }, []);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            localStorage.setItem('variable', 'true');
            console.log("success");
            navigate("/profile");
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="greddit_username" id="username" name="username" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="secret" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}
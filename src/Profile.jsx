import React from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

export const Profile = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('variable') === 'false') {
            console.log("breach");
            navigate("/");
        }
    }, []);

    const logoutfunc = (e) => {
        localStorage.setItem('variable', 'false');
        console.log("exit");
        console.log(localStorage.getItem('variable'));
        navigate('/');
    }

    return (
        <body>
            <p>Welcome to the profile page !</p>
            <p>First Name: Admin</p>
            <p>Age: 22</p>
            <p>Email: admin@iiit.ac.in</p>
            <p>Contact: +91 9878321094</p>
            <div class="dropdown">
                <button>Followers : 3</button>
                <div class="dropdown-options">
                    <a href="#">Tichnas</a>
                    <a href="#">Sanchit</a>
                    <a href="#">Tichsan</a>
                </div>
            </div>
            <div class="dropdown">

                <button>Following : 3</button>
                <div class="dropdown-options">
                    <a href="#">Google</a>
                    <a href="#">Apple</a>
                    <a href="#">Uber</a>
                </div>
            </div>
            <button onClick={logoutfunc}>Logout</button>
        </body >
    )
}
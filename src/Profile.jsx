import React from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";

export const Profile = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('variable') === 'false') {
            console.log("breach");
            navigate("/");
        }
    });

    const logoutfunc = (e) => {
        localStorage.setItem('variable', 'false');
        console.log("exit");
        console.log(localStorage.getItem('variable'));
        navigate("/");
    }
    const followersfunc = (e) => {
        navigate("/followers");
    }
    const followingfunc = (e) => {
        navigate("/following");
    }

    const [Firstname, setFirstName] = useState('Admin Jr');
    const [Lastname, setLastName] = useState('Admin Sr');
    const [Username, setUserName] = useState('admin')
    const [Contact, setContact] = useState('+91 9623 345 804');
    const [Email, setEmail] = useState('trollster@iiit.ac.in');
    const [Age, setAge] = useState('21');

    return (
        <body>
            <p>Welcome to the profile page !</p>
            <form className="register-form">
                <label htmlFor="Firstname">First name</label>
                <input value={Firstname} name="firstname" onChange={(e) => setFirstName(e.target.value)} id="firstname" placeholder="First Name" />
                <label htmlFor="Lastname">Last name</label>
                <input value={Lastname} name="lastname" onChange={(e) => setLastName(e.target.value)} id="lastname" placeholder="Last Name" />
                <label htmlFor="email">email</label>
                <input value={Email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="Username">Username</label>
                <input value={Username} onChange={(e) => setUserName(e.target.value)} type="username" placeholder="greddit_username" id="username" name="username" />
                <label htmlFor="Age">Age</label>
                <input value={Age} name="age" onChange={(e) => setAge(e.target.value)} id="age" placeholder="Your Age" />
                <label htmlFor="Contact">Contact</label>
                <input value={Contact} name="contact" onChange={(e) => setContact(e.target.value)} id="contact" placeholder="Your Contact" />
                <button onClick={followersfunc}>Followers : 3</button>
                <button onClick={followingfunc}>Following : 3</button>
                <button onClick={logoutfunc}>Logout</button>

            </form>

        </body>
        // <body>
        //     <p>Welcome to the profile page !</p>
        //     <p>First Name: Admin</p>
        //     <p>Age: 22</p>
        //     <p>Email: admin@iiit.ac.in</p>
        //     <p>Contact: +91 9878321094</p>
        //     <button onClick={logoutfunc}>Logout</button>
        // </body >
    )
}
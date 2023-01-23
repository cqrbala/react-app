import React, { useState } from "react";

export const Register = (props) => {
    const [Firstname, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Username, setRegisterUsername] = useState('');
    const [Email, setEmail] = useState('');
    const [Age, setAge] = useState('');
    const [Contact, setContact] = useState('');
    const [Password, setRegisterPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="Firstname">First name</label>
                <input value={Firstname} name="firstname" onChange={(e) => setFirstName(e.target.value)} id="firstname" placeholder="First Name" />
                <label htmlFor="Lastname">Last name</label>
                <input value={LastName} name="lastname" onChange={(e) => setLastName(e.target.value)} id="lastname" placeholder="Last Name" />
                <label htmlFor="email">email</label>
                <input value={Email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="Username">Username</label>
                <input value={Username} onChange={(e) => setRegisterUsername(e.target.value)} type="username" placeholder="greddit_username" id="username" name="username" />
                <label htmlFor="Age">Age</label>
                <input value={Age} name="age" onChange={(e) => setAge(e.target.value)} id="age" placeholder="Your Age" />
                <label htmlFor="Contact">Contact</label>
                <input value={Contact} name="contact" onChange={(e) => setContact(e.target.value)} id="contact" placeholder="Your Contact" />
                <label htmlFor="password">password</label>
                <input value={Password} onChange={(e) => setRegisterPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}
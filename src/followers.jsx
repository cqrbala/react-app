import React from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";


export const Followers = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('variable') === 'false') {
            console.log("breach");
            navigate("/");
        }
    });

    return (
        <body>
            <p>Tichnas</p>
            <p>Sanchit</p>
            <p>Tichsan</p>
        </body>
    )
}
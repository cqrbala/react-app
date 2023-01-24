import React from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";


export const Following = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('variable') === 'false') {
            console.log("breach");
            navigate("/");
        }
    });

    return (
        <body>
            <p>Google</p>
            <p>Meta</p>
            <p>Uber</p>
        </body>
    )
}
import React from 'react';
import {Link} from 'react-router-dom'

const MainMenu = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/auth-form"}>Login/Register</Link>
                </li>
                <li>
                    <Link to={"/profile"}>Profile</Link>
                </li>
            </ul>
        </header>
    );
};

export default MainMenu
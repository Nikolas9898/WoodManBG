import React from 'react';
import HeaderStyle from "../../Header.module.css";
import {Link} from "react-router-dom";

const Logo = props => {
    return (
        <div>
            <div className={HeaderStyle.logoHolder}>
                <Link to={"/"} className={HeaderStyle.logoHolder}>WoodMan.bg</Link>
            </div>
        </div>
    );
};



export default Logo;
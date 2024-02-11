import React from "react";

import { FaCircleArrowUp } from "react-icons/fa6";

import css from "./SpeedNav.module.css";
import { MenuLink } from "../../shared";

export const SpeedNav: React.FC = () => {
    return (    
        <MenuLink to = "#NavBar" styled = {css.SpeedNav}>
            <FaCircleArrowUp />
        </MenuLink>
    )   
}

export default SpeedNav;
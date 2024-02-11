import React from "react";
import { MenuLink } from "../index";

import img from '../../assets/img/logo.png';

import css from "./Logo.module.scss";

interface IProps {
    styled?: string
}

export const Logo: React.FC<IProps> = ({ styled }) => {
    return (
        <MenuLink to = "/">
            <img src= { img } alt="" className= {styled + ' ' + css.Logo} />
        </MenuLink>
    )
}

export default Logo;
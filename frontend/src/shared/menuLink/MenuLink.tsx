import React from "react";

import css from "./MenuLink.module.scss";

interface IProps {
    children: React.ReactNode
    to: string
    styled?: string
}

export const MenuLink: React.FC<IProps> = ({ children, to, styled }) => {
    

    return (
        <a href= { to } className= { css.menu__link + " " + styled }>{ children }</a>
    )
}

export default MenuLink;
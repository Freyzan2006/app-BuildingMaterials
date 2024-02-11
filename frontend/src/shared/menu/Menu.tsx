import React from "react";
import css from './Menu.module.css';
import { MenuLink } from "../menuLink/MenuLink";



export const Menu: React.FC = () => {
    return (
        <menu className = { css.menu }>
            <li><MenuLink to = "#products" styled = "text-teal-900 font-bold menu__link" >Продукция</MenuLink></li>
            <li><MenuLink to = "#company" styled = "text-teal-900 font-bold menu__link" >О компании</MenuLink></li>
            <li><MenuLink to = "#services" styled = "text-teal-900 font-bold menu__link" >Услуги</MenuLink></li>
            <li><MenuLink to = "#contacts" styled = "text-teal-900 font-bold menu__link" >Контакты</MenuLink></li>
        </menu>
    )
} 

export default Menu;
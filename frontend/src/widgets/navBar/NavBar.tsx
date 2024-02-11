import React, { useState } from "react";
import { Menu } from "../../shared";
import { FaWhatsappSquare } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { SideBar } from "../";

import css from './NavBar.module.css';
import { MenuLink } from "../../shared"
import { Logo } from "../../shared";

export const NavBar: React.FC = () => {
    const [show, setShow] = useState(false);

    function isShow() {
        setShow(!show);
        console.log(show);
    }


    return (
        <nav className= { css.nav } id = "NavBar">
            <Logo styled = "text-3xl font-bold underline" />
            <Menu />
            <div className=" flex justify-center gap-4 ">
                <MenuLink to = "https://wa.me/+77007192085"><FaWhatsappSquare color = "green" fontSize= "50px" /></MenuLink>
                <button onClick={isShow}><RiMenu3Fill fontSize= "30px" /></button>
                <SideBar show = { show } isShow = { isShow } />
            </div>
        </nav>
    )
}

export default NavBar;
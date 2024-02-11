import React from "react";

import css from "./Btn.module.scss";

interface IProps {
    children: React.ReactNode
    outline: boolean 
    callback?: () => void
    styled?: string 
}

export const Btn: React.FC<IProps> = ({ children, outline, callback, styled }) => {
    return(
        <button className = { outline ? css.BtnOutLine : css.Btn + " " + styled } onClick={ callback }>{ children }</button>
    )
}

export default Btn;
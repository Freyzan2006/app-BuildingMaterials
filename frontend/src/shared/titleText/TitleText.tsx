import React from "react";

import css from "./TitleText.module.scss";

interface IProps {
    children: React.ReactNode
    color: string 
    size: string
}

export const TitleText: React.FC<IProps> = ({ children, color, size }) => {
    return (
        <h2 style = { { fontSize: size, color: color } } className = { css.TitleText } >{ children }</h2>
    )
}

export default TitleText;
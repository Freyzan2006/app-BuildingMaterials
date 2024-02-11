import React from "react";

import css from "./Text.module.scss";

interface IProps {
    children: React.ReactNode
    color: string 
    size: string
    weight?: string
}

export const Text: React.FC<IProps> = ({ children, color, size, weight }) => {
    return (
        <p style = { { fontSize: size, color: color, fontWeight: weight } } className = { css.Text } >{ children }</p>
    )
}

export default Text;
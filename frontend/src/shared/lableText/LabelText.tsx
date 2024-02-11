import React from "react";

import css from "./LabelText.module.scss";

interface IProps {
    children: React.ReactNode
    color: string
    size?: string
    weight?: string
}

export const LabelText: React.FC<IProps> = ({ children ,color, size, weight }) => {
    return (
        <span style = { { fontWeight: weight, color: color, fontSize: size } } className = { css.LabelText }>{ children }</span>
    )
}

export default LabelText;
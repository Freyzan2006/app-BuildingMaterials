import React from "react";


import { RxCross1 } from "react-icons/rx";

import css from "./Dialog.module.scss";

interface IProps {
    children: React.ReactNode
    isShow: boolean
    showChange: () => void
}

export const Dialog: React.FC<IProps> = ({ children, isShow, showChange }) => {

   

    return (
        <div className = { isShow ? css.Dialog : css.DialogHidden }>
            <div className = { css.Dialog__body }>
                <button className = { css.Dialog__cross } type = "button" onClick = { showChange }><RxCross1 /></button>
                { children }
            </div>
        </div>
    )
}
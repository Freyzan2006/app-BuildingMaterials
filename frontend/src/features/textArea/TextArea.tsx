import React from "react";

import css from "./TextArea.module.scss";

interface IProps {
    styled?: string
    placeHolder?: string
    name: string 
    callback: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    value?: string
}

export const TextArea: React.FC<IProps> = ({ styled, placeHolder, name, callback }) => {

    return (
        <textarea onChange = { callback } name = { name } placeholder = { placeHolder }  className = { css.TextArea + " " + styled }></textarea>
    )
} 

export default TextArea;
import React from "react";

import css from "./InputField.module.scss";

interface IProps {
    type?: string
    styled?: string
    placeHolder?: string
    callback?: (e: React.ChangeEvent<HTMLInputElement>) => void
    name: string 
    value?: string
}

export const InputField: React.FC<IProps> = ({ type, styled, placeHolder, callback, name }) => {

    return (
        <input name = { name } placeholder = { placeHolder } type= { type ? type : "text" } className = { css.InputField + " " + styled } onChange = { callback } />
    )
} 

export default InputField;
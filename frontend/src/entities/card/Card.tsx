import React from "react";

import css from "./Card.module.scss";
import { MenuLink } from "../../shared";

interface IProps {
    item: IItem
}

interface IItem {
    id: number
    name: string 
    anons: string
    about: string
    photo: string
}

export const Card: React.FC<IProps> = ( { item } ) => {
    const { id, name, anons, about, photo } = item as IItem;


    return (
        <div className = { css.Card }>
            <img className = { css.Card__img } src = { photo } alt="" />
            <div className= { css.Card__body }>
                <h3 className= { css.Card__title }>{ name }</h3>
                <p className= { css.Card__content }>{ anons }</p>
            </div>
            <div className= { css.Card__footer }>
                <MenuLink to = {`.../${id}`} styled = { css.Card__btn }>Подробние</MenuLink>
            </div>
        </div>
    )
}

export default Card;
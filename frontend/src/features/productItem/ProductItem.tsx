import React, { useState } from "react";

import css from './ProductItem.module.scss';
import { Photo } from "../../entities";
import { TitleText, Text, Btn } from "../../shared"
import { Dialog, Form } from "../";
import InputField from "../inputField/InputField";
import TextArea from "../textArea/TextArea";

interface IProps {
    item: IProductItem
}

interface IProductItem {
    id: number
    name: string
    anons: string
    category: string 
    city: string
    size: string
    photo: string
    about: string
}


export const ProductItem: React.FC<IProps> = ({ item }) => {
    const { id, name, category, city, size, photo, about } = item as IProductItem;


    const [isShow, setIsShow] = useState<boolean>(false);

    const showChange = () => setIsShow(!isShow);

    return (
        <div className = { css.ProductItem }>
            <div className= { css.ProductItem__left }>
                <Photo src = { photo }  />
            </div>

            <div className= { css.ProductItem__right }>
                <TitleText color="blue" size = "30px">{ name }</TitleText>
                <table>
                    <tbody>
                        <tr>
                            <td>Категориия:</td>
                            <td>{ category }</td>
                        </tr>
                        <tr>
                            <td>Страна происхождения:</td> 
                            <td>{ city }</td>
                        </tr>
                        <tr>
                            <td>Размер: </td>
                            <td>{ size }</td>
                        </tr>
                    </tbody>
                </table>
                <Text color = "black" size="20px" weight = "600">Описание: </Text>
                <Text color = "black" size="15px" weight = "400">{ about }</Text>
                <div className= { css.ProductItem__btns }>
                    <Btn outline = { false }><a href="https://unisteel.kz/tel:+77007192085">Позвонить</a></Btn>
                    <Btn outline = { false } callback = { showChange }>Оставить заявку</Btn>
                </div>
            </div>

            <Dialog isShow = { isShow } showChange = { showChange }>
                <TitleText color = "#004152" size="25px">Оставить заявку</TitleText>
                <Form method="post" url="...">
                    <InputField placeHolder = "Ваше имя" name = "name" />
                    <InputField placeHolder = "Контактный номер" name = "contact" />
                    <TextArea name = "fidback" placeHolder = "Коментрии" />
                </Form>
            </Dialog>
        </div>
    )
}

export default ProductItem;
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
    const { name, category, city, size, photo, about } = item as IProductItem;


    const [isShow, setIsShow] = useState<boolean>(false);

    const showChange = () => setIsShow(!isShow);

    interface IData {
        name: string
        number_client: string
        comment: string
    }

    const [formData, setFormData] = useState<IData>({name: "", number_client: "", comment: ""});
    const ChangeData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value })
    };

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
                <Form method="post" url="clients" data = { formData }>
                    <InputField value = { formData.name } callback = { (e: React.ChangeEvent<HTMLInputElement>) => ChangeData(e) }  placeHolder = "Ваше имя" name = "name" />
                    <InputField value = { formData.number_client } callback = { (e: React.ChangeEvent<HTMLInputElement>) => ChangeData(e) }  placeHolder = "Контактный номер" name = "number_client" />
                    <TextArea value = { formData.comment } callback = { (e: React.ChangeEvent<HTMLTextAreaElement>) => ChangeData(e) } name = "comment" placeHolder = "Коментрии" />
                </Form>
            </Dialog>
        </div>
    )
}

export default ProductItem;
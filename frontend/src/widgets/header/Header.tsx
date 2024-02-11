import React, { useState } from "react";
import css from './Header.module.scss';


import { NavBar } from "../index";
import { Btn, Container, TitleText } from "../../shared"
import { Dialog, Form, InputField, TextArea } from "../../features";



export const Header: React.FC = () => {

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
        <header className = { css.header }  >
            <NavBar />
            <Dialog isShow = { isShow } showChange = { showChange }>
                <TitleText color = "#004152" size="25px">Оставить заявку</TitleText>
                <Form method="post" url="clients" data = { formData }>
                    <InputField value = { formData.name } callback = { (e: React.ChangeEvent<HTMLInputElement>) => ChangeData(e) }  placeHolder = "Ваше имя" name = "name" />
                    <InputField value = { formData.number_client } callback = { (e: React.ChangeEvent<HTMLInputElement>) => ChangeData(e) }  placeHolder = "Контактный номер" name = "number_client" />
                    <TextArea value = { formData.comment } callback = { (e: React.ChangeEvent<HTMLTextAreaElement>) => ChangeData(e) } name = "comment" placeHolder = "Коментрии" />
                </Form>
            </Dialog>
            <div className= {css.header__body}>
                <Container>
                    <section className= { css.header__section }>
                        <h1 className= {css.header__title}>
                            ОПТОВО-РОЗНИЧНАЯ ПРОДАЖА МЕТАЛЛОПРОКАТА
                        </h1>
                        <p className= {css.header__text}>
                            Свяжитесь с нами любым удобным Вам способом — мы выполним заказ по поставке необходимого Вам металлопроката, в самые короткие сроки!
                        </p>
                        <Btn outline = { false } callback = { showChange }>Оставить заявку</Btn>
                    </section>
                </Container>
            </div>
            
        </header>
    )
} 


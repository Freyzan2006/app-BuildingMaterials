import React, { useState } from "react";

import css from "./Partner.module.scss";
import { Container, Text, TitleText, Btn } from "../../shared";
import { Dialog, InputField, TextArea, Form } from "../../features";

export const Partner: React.FC = () => {

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
        <section className= { css.Partner }>
            <Container>
                <div className= { css.Partner__body }>
                    <div className= { css.Partner__col }>
                        <TitleText color="#fff" size="40px">
                            Надежный партнер для вашего бизнеса: 
                            широкий выбор металлопроката от компании 
                            Unisteel
                        </TitleText>
                        <Text color="#fff" size="20px">
                            Если вы ищете надежного поставщика металлопроката 
                            для вашего бизнеса, то компания Unisteel готова 
                            предложить вам широкий выбор высококачественной 
                            продукции. Наш металлопрокат производится на современных 
                            заводах, оборудованных передовыми технологиями, что позволяет
                            нам гарантировать высокое качество продукции и ее соответствие 
                            стандартам безопасности.
                        </Text>
                        <Btn outline = { false } callback = { showChange }>Оставить заявку</Btn>
                    </div>
                </div>
            </Container>

            <Dialog isShow = { isShow } showChange = { showChange }>
                <TitleText color = "#004152" size="25px">Оставить заявку</TitleText>
                <Form method="post" url="clients" data = { formData }>
                    <InputField value = { formData.name } callback = { (e: React.ChangeEvent<HTMLInputElement>) => ChangeData(e) }  placeHolder = "Ваше имя" name = "name" />
                    <InputField value = { formData.number_client } callback = { (e: React.ChangeEvent<HTMLInputElement>) => ChangeData(e) }  placeHolder = "Контактный номер" name = "number_client" />
                    <TextArea value = { formData.comment } callback = { (e: React.ChangeEvent<HTMLTextAreaElement>) => ChangeData(e) } name = "comment" placeHolder = "Коментрии" />
                </Form>
            </Dialog>
        </section>
    )
}

export default Partner;
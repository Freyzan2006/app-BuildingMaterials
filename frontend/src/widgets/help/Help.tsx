import React, { useState } from "react";

import { FaArrowRight } from "react-icons/fa";

import css from './Help.module.scss';
import { Btn, Container, Text, TitleText } from "../../shared";
import { Dialog, InputField, TextArea, Form } from "../../features";

export const Help: React.FC = () => {

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
        <section className = { css.Help }>
            <Container>
                <div className = { css.Help__body }>
                    <div className = { css.Help__col }>
                        <TitleText color="#004152" size="40px">
                            Нужна помощь ?
                        </TitleText>
                        <Text color="black" size="15px" weight="400">
                            Обратитесь к нам и мы вам 
                            окажем все необходимые вам услуги, 
                            а также реализуем металлопрокат под ваши нужды
                        </Text>
                    </div>
                    <div className = { css.Help__col }>
                        <Btn outline = { false } callback = { showChange }>Оставить заявку <FaArrowRight /></Btn>
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

export default Help;
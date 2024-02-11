import React, { useEffect, useState } from "react";

import css from './OurServices.module.scss';
import { Btn, Container, LabelText, Text, TitleText } from "../../shared";
import { Card } from "../../entities";


// import img from "../../assets/img/servises/servise1.png"
// import img2 from "../../assets/img/servises/servise2.png"
// import img3 from "../../assets/img/servises/servise3.png"
// import img4 from "../../assets/img/servises/servise4.png"
import { Dialog, InputField, TextArea, Form } from "../../features";

import axios from "axios";


interface IServicesItems {
    id: number
    name: string 
    anons: string
    about: string
    photo: string
}

export const OurServices: React.FC = () => {
    const [ servicesItems ,setServicesItems ] = useState<IServicesItems[]>([]);

    // const servicesItems = [
    //     {
    //         id: 1,
    //         anons: "Рубка изделий металлопроката гильотиной",
    //         photo: img,
    //         name: "Рубка закладных",
    //         about: "Рубка изделий металлопроката гильотиной",
    //     },
    //     {
    //         id: 2,
    //         anons: "Рубка изделий металлопроката гильотиной",
    //         photo: img2,
    //         name: "Лазерная резка",
    //         about: "Резка лазерным лучом",
    //     },
    //     {
    //         id: 3,
    //         anons: "Рубка изделий металлопроката гильотиной",
    //         photo: img3,
    //         name: "Изготовления гнутого швеллера и гнутых уголков.",
    //         about: "Различный гнутый металлопрофиль значительно усиливает несущую способность конструкций",
    //     },
    //     {
    //         id: 4,
    //         anons: "Рубка изделий металлопроката гильотиной",
    //         photo: img4,
    //         name: "Доставка",
    //         about: "Компания ТОО «Юнистил» предоставляет услуги доставки металлопроката в различные населенные пункты по всему Казахстану . Вам достаточно сделать предварительную заявку, согласовать с менеджерами, чтобы своевременно получить свой товар",
    //     }
    // ]

    useEffect(() => {
        const getProducts = async () => {
            try {
                const respons = await axios.get("http://127.0.0.1:8000/api/services");
                setServicesItems(respons.data);
            } catch (err) {
                console.error("Ошибка при получении данных", err)
            }
        } 
  
        getProducts();
    }, [])


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
        <section className = { css.OurServices }  id = "services">
            <Container>
                <div className = { css.OurServices__body }>
                    <div className= { css.OurServices__left }>
                        <TitleText color = "#004152" size="30px">
                            <LabelText color = "blue" size="15px">УСЛУГИ</LabelText>
                            Наши услуги
                        </TitleText>
                        <Text color = "black" size="20px" weight="400">
                            Ежегодно компания ТОО «Юнистил» обслуживает 
                            более 1000 клиентов, большинство из которых 
                            становятся её постоянными покупателями. 
                        </Text>
                        <Btn outline = { false } callback = { showChange }>Оставить заявку</Btn>
                    </div>
                    <div className= { css.OurServices__right }>
                        { servicesItems.length ? <></> : <TitleText color = "#004152" size="30px">Пока что нет услуг</TitleText> }

                        { servicesItems.map((item: IServicesItems, itemIndex: number) => (
                            <Card key = { itemIndex } item = { item } />
                        )) }
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

export default OurServices;
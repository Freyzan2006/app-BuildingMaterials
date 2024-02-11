import React, { useState } from "react";

import { FaPhone } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdMessage } from "react-icons/md";


import css from './Footer.module.scss';



import { MenuLink, Logo, TitleText, Text } from "../../shared";

import { Form, InputField } from "../../features";


export const Footer: React.FC = () => {

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
        <footer className={css.footer}>
            <div className="container mx-auto max-w-screen-lg">
                <section className= {css.footer__body}>

                    <div className= { css.footer__row }>
                        <div className = { css.footer__col }>
                            <TitleText color="#fff" size="30px">Навигация</TitleText>  
                            <ul className = { css.menu }>
                                <li><MenuLink to = "" styled = "text-white font-bold menu__link" >Продукция</MenuLink></li>
                                <li><MenuLink to = "tel:+77007192085" styled = "text-white font-bold menu__link" >О компании</MenuLink></li>
                                <li><MenuLink to = "tel:+77272516514" styled = "text-white font-bold menu__link" >Услуги</MenuLink></li>
                                <li><MenuLink to = "tel:+77272516512" styled = "text-white font-bold menu__link" >Контакты</MenuLink></li>
                            </ul>
                        </div>

                        <div className = { css.footer__col }>
                            <TitleText color="#fff" size="30px">КОНТАКТЫ</TitleText>       
                            <ul className = { css.menu }>
                                <li><p className="text-white font-bold flex gap-3"><CiLocationOn /> Казахстан, г. Алматы, проспект Рыскулова 63</p></li>
                                <li><MenuLink to = "#!" styled = "text-white font-bold menu__link" ><FaPhone /> +77007192085 </MenuLink></li>
                                <li><MenuLink to = "#!" styled = "text-white font-bold menu__link" ><FaPhone /> +77272516514</MenuLink></li>
                                <li><MenuLink to = "#!" styled = "text-white font-bold menu__link" ><FaPhone /> +77272516512</MenuLink></li>
                                <li><MenuLink to = "#!" styled = "text-white font-bold menu__link" ><MdMessage /> toounisteel@gmail.com</MenuLink></li>
                            </ul>
                        </div>

                        <div className = { css.footer__col }>   
                            <TitleText color="#fff" size="30px">Обратная связь</TitleText> 
                            <Text color="#fff" size="20px">
                                Отправьте свой номер телефона и мы свяжемся с вами в ближайшее время
                            </Text>
                            <Form method="post" url="clients" data = { formData }>
                                <InputField value = { formData.number_client } callback = { (e: React.ChangeEvent<HTMLInputElement>) => ChangeData(e) }  placeHolder = "Контактный номер" name = "number_client" />  
                            </Form>
                        </div>
                    </div>

                    <div className= {css.footer__row}>
                        <div className = { css.footer__line }></div>        
                    </div>

                    <div className= {css.footer__end}>
                        <div className= {css.footer__col + ' ' + ' items-center justify-center'}>
                            <Logo />
                        </div>   
                    </div>

                    <div className= {css.footer__end}>
                        <div className= {css.footer__col + ' ' + ' items-center'}>
                            <p>Copyright © 2023 Unisteel | Powered by IPROD.KZ</p>
                        </div>   
                    </div>

                    <div className= { css.footer__row }>
                        <MenuLink to = "tel:+77007192085" styled = {css.footer__contact}><FaPhone /> Позвонить</MenuLink>
                        <MenuLink to = "mailto:toounisteel@gmail.ru" styled =  { css.footer__contact } ><CiLocationOn /> Написать</MenuLink>
                    </div>
                </section>
            </div>
        </footer>
    )
}

// export default Footer;
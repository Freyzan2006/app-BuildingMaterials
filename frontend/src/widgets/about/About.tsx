import React from "react";

import css from "./About.module.css";
import { Container, TitleText, LabelText, Text } from "../../shared";

import img from '../../assets/img/about/bg.jpeg';


export const About: React.FC = () => {
    return (
        <section className = { css.About } id = "company">
            <Container>
                <div className= { css.About__body }>
                    <div className= { css.About__row }>
                        <div className= { css.About__col }>
                            <TitleText color="#fff" size="40px">
                                <LabelText color = "#fff" size = "15px">О НАШЕЙ КОМПАНИИ</LabelText>
                                КОМПАНИИ UNISTEEL
                            </TitleText>
                            <Text color = "#fff" size="15px" weight="400">
                                Компания ТОО «ЮНИСТИЛ» была основана 22 ноября 2011 года . 
                                Опираясь на богатый опыт, мы тщательно следим за высоким качеством 
                                нашего сервиса, расширяем наш сортаментный ряд, пополняя его новыми 
                                товарами и готовы предложить Вам как популярную продукцию, 
                                так и редкие наименования.
                            </Text>
                            <Text color = "#fff" size="15px" weight="400">
                                Миссия компании — реализация широкого спектра металлопродукции и сопутствующих товаров, 
                                применяемых в промышленном и гражданском строительстве, жилищно-коммунальной сфере, нефтяной 
                                и газовой промышленности, изготовлении и монтаже металлоконструкций и оказании соответствующих услуг.
                            </Text>
                        </div>

                        <div className= { css.About__col }>
                            <img src= { img } alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}  

export default About;
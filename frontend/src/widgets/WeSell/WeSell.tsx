import React from "react";

import css from "./WeSell.module.scss";

import { Container, TitleText, Text } from "../../shared";

import img from '../../assets/img/features/features1.png'
import img2 from '../../assets/img/features/features2.png'
import img3 from '../../assets/img/features/features3.png'
import img4 from '../../assets/img/features/features4.png'
import img5 from '../../assets/img/features/features5.png'
import img6 from '../../assets/img/features/features6.png'
import img7 from '../../assets/img/features/features7.png'



export const WeSell: React.FC = () => {
    return (
        <section className = { css.weSell }>
            <Container>
                <div className= { css.weSell__body }>
                    <div className= {css.weSell__col}>
                     
                        <TitleText color="#004152" size = "40px">Мы реализуем продукцию заводов</TitleText>
                        <Text color = "black" size = "15px" weight="400">
                            Компания Unisteel готова предоставить своим клиентам высококачественную продукцию, 
                            роизведенную на современных заводах с использованием передовых технологий и соответствующих 
                            стандартам качества. Кроме того, наша компания имеет опытных специалистов, которые могут помочь 
                            подобрать наиболее подходящую металлическую продукцию для ваших нужд и оказать услуги по доставке 
                            и установке.
                        </Text>
                    </div>

                    <div className= {css.weSell__col}>
                        <div className = { css.weSell__row }>
                            <img src = { img } alt="" />
                            <img src = { img2 } alt="" />
                            <img src = { img3 } alt="" />
                        </div>

                        <div className = { css.weSell__row }>
                            <img src = { img4 } alt="" />
                            <img src = { img5 } alt="" />
                            <img src = { img6 } alt="" />
                        </div>

                        <div className = { css.weSell__row }>
                            <img src = { img7 } alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default WeSell;
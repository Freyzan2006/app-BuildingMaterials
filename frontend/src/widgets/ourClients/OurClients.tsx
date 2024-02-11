import React from "react";

import css from "./OurClients.module.css";
import { Container, TitleText } from "../../shared";


import img from "../../assets/img/customers/client1.png"
import img2 from "../../assets/img/customers/client2.png"
import img3 from "../../assets/img/customers/client3.png"
import img4 from "../../assets/img/customers/client4.png"
import { Carusel } from "../../features";




interface ISlide {
    url: string
}


export const OurClients: React.FC = () => {

    const slides: ISlide[] = [
        {url: img},
        {url: img2},
        {url: img3},
        {url: img4},
    ]

    return (
        <section className = { css.OurClients }>
            <Container>
                <div className= { css.OurClients__body }>
                
                    <TitleText color="#004152" size = "40px">Наши клиенты</TitleText>

  
                    <Carusel slides_urls = { slides } width="100%" height="400px" />
                </div>
            </Container>
        </section>
    )
}

export default OurClients;
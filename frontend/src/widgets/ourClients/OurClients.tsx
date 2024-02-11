import React, { useState } from "react";

import css from "./OurClients.module.css";
import { Container, TitleText } from "../../shared";


import img from "../../assets/img/customers/client1.png"
import img2 from "../../assets/img/customers/client2.png"
import img3 from "../../assets/img/customers/client3.png"
import img4 from "../../assets/img/customers/client4.png"
import { Carusel } from "../../features";




// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
// import { RxDotFilled } from "react-icons/rx";

interface ISlide {
    url: string
}


export const OurClients: React.FC = () => {

    const slides = [
        {url: img},
        {url: img2},
        {url: img3},
        {url: img4},
    ]


    // const [ currentIndex, setCurrentIndex ] = useState(0);

    // const prevSlide = () => {
    //     const isFirstSlide = currentIndex === 0;
    //     const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
    //     setCurrentIndex(newIndex);
    // }

    // const nextSlide = () => {
    //     const isLastSlide = currentIndex === slides.length - 1;
    //     const newIndex = isLastSlide ? 0 : currentIndex + 1;
    //     setCurrentIndex(newIndex);
    // }

    // const goToSlide = (slideIndex: number) => {
    //     setCurrentIndex(slideIndex);
    // }

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
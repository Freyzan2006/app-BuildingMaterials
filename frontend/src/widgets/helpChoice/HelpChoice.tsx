import React from "react";



import css from "./HelpChoice.module.scss";
import { Container, TitleText, Text, LabelText } from "../../shared";
import { Carusel } from "../../features";

import img from "../../assets/img/hero_bg.png"
import img2 from "../../assets/img/help.png"




// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
// import { RxDotFilled } from "react-icons/rx";


// interface ISlide {
//     url: string
// }

export const HelpChoice: React.FC = () => {

    const slides = [
        {url: img},
        {url: img2},
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
        <section className = { css.Help }>
            <Container>
                <div className= { css.Help__body }>
                    <div className= { css.Help__left }>
                        <TitleText color="#fff" size="40px">
                            Позвольте нам помочь с выбором металлопроката для ваших проектов
                        </TitleText>
                        <LabelText color = "#fff" size="15px">
                            Мы понимаем, что выбор металлопроката под ваши задачи может быть сложным.
                        </LabelText>
                        <Text color="#fff" size="20px">
                            Но не волнуйтесь — компания Unisteel готова помочь вам сделать правильный выбор. Наши опытные специалисты помогут вам выбрать оптимальное решение, учитывая ваши потребности и бюджет. Мы предлагаем широкий выбор металлопроката и металлоконструкций высокого качества, которые соответствуют всем стандартам безопасности. Обратитесь к нам, и мы сделаем все возможное, чтобы помочь вам реализовать ваши проекты!
                        </Text>
                    </div>

                    <div className= { css.Help__right }>
                        {/* <div className = "w-[400px] h-[700px] w-full m-auto py-16 px-4 relative group flex justify-center items-center">
                            <div style = { { backgroundImage: `url(${slides[currentIndex].url})` } } className = "w-full h-full rounded-2xl bg-center bg-cover duration-500 max-w-[500px]"></div>
                        
                            <div className = "hidden group-hover:block absolute top-50% -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                                <IoIosArrowBack onClick = { prevSlide } />
                            </div>
                            <div className = "hidden group-hover:block absolute top-50% -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                                <IoIosArrowForward onClick={ nextSlide } />
                            </div>

                            <div className = "flex top-4 justify-center py-2 absolute bottom-0 -translate-x-0 translate-y-[70%] ">
                                { slides.map((slide: ISlide, slideIndex: number) => (
                                    <div key = { slideIndex } onClick = {() => goToSlide(slideIndex)} className = "text-2xl cursor-pointer py-2">
                                        <RxDotFilled color = { slideIndex == currentIndex ? "black" : "rgba(0, 0, 0, 0.377)" } />
                                    </div>
                                ))}
                            </div>
                        </div> */}

                        <Carusel slides_urls = { slides } width="500px"  height="500px" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default HelpChoice;
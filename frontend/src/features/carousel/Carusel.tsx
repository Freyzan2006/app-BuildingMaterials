import React from "react";

import { useState } from "react";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";

interface IProps {
    slides_urls: ISlide[]
    width?: string
    height?: string 
}

interface ISlide {

    url: string
}

export const Carusel: React.FC<IProps> = ({ slides_urls, width, height }) => {
    const slides = slides_urls;

    const [ currentIndex, setCurrentIndex ] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div style={ { maxWidth: width, height: height } } className = {`w-full m-auto py-16 px-4 relative group flex justify-center items-center`}>
            <div style = { { backgroundImage: `url(${slides[currentIndex].url})` } } className = "w-full h-full rounded-2xl bg-center bg-cover duration-500 max-w-[500px]"></div>
        
            <div className = "hidden group-hover:block absolute top-50% -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <IoIosArrowBack onClick = { prevSlide } />
            </div>
            <div className = "hidden group-hover:block absolute top-50% -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <IoIosArrowForward onClick={ nextSlide } />
            </div>

            <div className = "flex top-4 justify-center py-2 absolute bottom-0 -translate-x-0 translate-y-[70%] ">
                { slides.map((slide: ISlide, slideIndex: number) => (
                    <div key = { slideIndex } onClick = {() => goToSlide(slideIndex)} className = {"text-2xl cursor-pointer py-2 " + slide}>
                        <RxDotFilled color = { slideIndex == currentIndex ? "black" : "rgba(0, 0, 0, 0.377)" } />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carusel;
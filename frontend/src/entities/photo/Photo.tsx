import React from "react";



interface IProps {
    width?: string
    height?: string
    alt?: string 
    src: string  
}

export const Photo: React.FC<IProps> = ( { width, height, alt, src } ) => {
    return (
        <img style = { { width: width, height: height } } src= { src ? src : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg" } alt = { alt ? alt : "..." } />
    )
}

export default Photo
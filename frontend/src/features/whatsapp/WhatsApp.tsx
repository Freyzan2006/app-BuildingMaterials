import React, { useState } from "react";

import { BiLogoWhatsappSquare } from "react-icons/bi";

import css from "./WhatsApp.module.scss";

export const WhatsApp: React.FC = () => {
    const [hover, setHover] = useState(false);

    const isHover = () => setHover(!hover);
    

    return (    
        <div className = { css.WhatsApp }>
            <BiLogoWhatsappSquare onMouseEnter={ isHover } onMouseLeave={ isHover } />
            { hover ? <p className="text-green-500">Сваязатся с нами</p> : <></>}
        </div>
    )   
}

export default WhatsApp;
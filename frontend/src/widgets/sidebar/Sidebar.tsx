import css from './Sidebar.module.css';

import { RxCross1 } from "react-icons/rx";
import { BsFileEarmarkPdfFill } from "react-icons/bs";

interface IProps {
    show: boolean
    isShow: () => void 
}

import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const SideBar: React.FC<IProps> = ({ show, isShow }) => {

    return (
        <div className = { show ? css.sidebar_show : css.sidebar_no_show }>
            <button onClick = {isShow}><RxCross1 className = {css.crossIcon} /></button>
            <h3 className= {css.sidebar_show__title}> 
                Металлопрокат и 
                металлоконструкции
            </h3>
            <p><BsFileEarmarkPdfFill />  <a href="https://unisteel.kz/wp-content/uploads/2023/04/rekvizity.xls">Реквизиты</a></p>

            <ul className = { css.sidebar_show__list }>
                <li><p><IoLocation /> г. Алматы, проспект Рыскулова 63</p></li>
                <li><MdOutlineEmail /> <a href="toounisteel@gmail.ru">toounisteel@gmail.ru</a></li>
                <li><FaPhone /> <a href="tel:+77007192085">+7 (700) 719-20-85</a></li>
                <li><FaPhone /> <a href="tel:+77272516514">+7( 727 ) 251-65-14</a></li>
                <li><FaPhone /> <a href="tel:+77272516512">+7 (727) 251-65-12</a></li>
            </ul>
        </div>
    )
}

export default SideBar;
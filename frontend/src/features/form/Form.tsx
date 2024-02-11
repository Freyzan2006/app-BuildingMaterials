import React, { FormEvent, useState  } from "react";

import css from "./Form.module.scss";
import axios from "axios";
import { Text } from "../../shared";



interface IProps {
    children: React.ReactNode
    method: string
    url: string
    enctype?: string
    callback?: () => void
    data: object
}

interface IData {
    name: string
    number_client: string
    comment: string
}

export const Form: React.FC<IProps> = ({ children, method, url, enctype, callback, data }) => {
    const FormDate = data as IData;


    const [ success, setSucuss ] = useState<string>();
    const [ error, setError ] = useState<string>();
    

    const baseUrl: string = `http://127.0.0.1:8000/api/${url}`;

    
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const check = FormDate.number_client.trim();
        
        if ( check.length <= 7 ) {
            setError("номер быть должен минимум длиной 7.")
            return false
        } else if ( check.indexOf("+") ) {
            setError("Введите номер с кодом номера телефона.")
            return false
        } else {
            setError("");
            setSucuss("Все данные успешно отправлены")
        }

        try {
            console.log(data)
            const response = await axios.post(baseUrl, data);
            
        } catch (error) {
            console.error('Error:', error);
        }
    }; 

    return (
        <div>
            <form onSubmit = { onSubmit } className = { css.Form_defult } method= { method } encType = { enctype }>
                { children }
                { error ? <Text color = "red" size="15px">{ error }</Text> : <Text color = "green" size="15px">{ success }</Text>}
                <button className = { css.Form__btn } type = "submit" onClick = { callback }>Отправить</button>
            </form>
        </div>
    )
} 

export default Form;
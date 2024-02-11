import React from "react";

import css from './createReliable.module.css';
import { Container } from "../../shared";

export const CreateReliable: React.FC = () => {
    return (
        <section className =  { css.CreateReliable }>
            <Container>
                <div className= { css.CreateReliable__body }>

                    <div className= { css.CreateReliable__row }>
                        <h3>
                            Создайте надежный каркас для своих проектов с металлопрокатом от Unisteel
                        </h3>
                    </div>

                    <div className= { css.CreateReliable__row }>
                        <p>
                            Мы предлагаем широкий выбор металлоконструкций и 
                            профилей, которые можно использовать для 
                            создания каркасов зданий, сооружений и других 
                            объектов. Наш металлопрокат отличается высокой 
                            прочностью и долговечностью, что гарантирует 
                            надежность и безопасность ваших проектов.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default CreateReliable;
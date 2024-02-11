import React, { useEffect, useState } from "react";

import css from "./ReasonsMain.module.css";
import { Container, TitleText, Text, LabelText } from "../../shared";
import { Photo } from "../../entities";


import icon from '../../assets/img/Icons/Icon1.png';
import icon2 from '../../assets/img/Icons/Icon2.png';
import icon3 from '../../assets/img/Icons/Icon3.png';
import icon4 from '../../assets/img/Icons/Icon4.png';

export const ReasonsMain: React.FC = () => {
    const [ market, setMarket ] = useState(10);
    const [ positions, setPositions ] = useState(200);
    const [ clients, setClients ] = useState(1000);
    const [ details, setDetails] = useState(10000);


    function getCount () {
        setMarket(market);
        setPositions(positions);
        setClients(clients);
        setDetails(details);
    }

    useEffect(() => {
        getCount();
    }, [])

    return (
        <section className = { css.ReasonsMain }>
            <Container>
                <div className= { css.ReasonsMain__body }>
                    <div className= { css.ReasonsMain__row }>
                        <TitleText color = "#004152" size = "40px">Главные причины почему выбирают нас!</TitleText>
                    </div>

                    <div className= { css.ReasonsMain__row }>
                     
                        <Photo src = { icon } />
                        <div className= { css.ReasonsMain__col }> 
                            <Text color = "black" size = "15px">
                                <LabelText color = "#004152" size="40px" weight = "600">{ market }+</LabelText> 
                                лет на рынке
                            </Text>
                        </div>

                        <Photo src = { icon2 } />
                        <div className= { css.ReasonsMain__col }>
                            
                            <Text color = "black" size = "15px">
                                <LabelText color = "#004152" size="40px" weight = "600">{ positions }+</LabelText> 
                                позиций
                            </Text>
                        </div>

                        <Photo src = { icon3 } />
                        <div className= { css.ReasonsMain__col }>
                            
                            <Text color = "black" size = "15px">  
                                <LabelText color = "#004152" size="40px" weight = "600">{ clients }+</LabelText> 
                                клиентов в год
                            </Text>
                        </div>

                        <Photo src = { icon4 } />
                        <div className= { css.ReasonsMain__col }>
                            <Text color = "black" size = "15px">
                                <LabelText color = "#004152" size="40px" weight = "600">{ details }+</LabelText> 
                                деталей в год
                            </Text>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ReasonsMain;
import React from 'react';

import css from './Home.module.css';

import { WeSell, Products, ReasonsMain } from '../widgets';
import { HelpChoice, CreateReliable, OurServices } from '../widgets';
import { Partner, Help, OurClients, About } from '../widgets';



const Home: React.FC = () => {
    return (
        <main className= {css.Home}>
            <WeSell />
            <About />
            <Products />
            <ReasonsMain />
            <HelpChoice />
            <CreateReliable />
            <OurServices />
            <Partner />
            <OurClients />
            <Help />
        </main>
    )
}

export default Home;
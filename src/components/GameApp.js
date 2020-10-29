import React from 'react';

import GameProvider from '../context/GameContext';
import { Board } from './app/Board';
import { Footer } from './ui/Footer';
import { Header } from './ui/Header';

export const GameApp = () => {
    return (
        <GameProvider>
            <Header />
            <Board />
            <Footer />
        </GameProvider>
    )
}

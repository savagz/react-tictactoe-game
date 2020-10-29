import React from 'react';

import GameProvider from './context/GameContext';
import { Board } from './components/app/Board';
import { Footer } from './components/ui/Footer';
import { Header } from './components/ui/Header';

export const GameApp = () => {
    return (
        <GameProvider>
            <Header />
            <Board />
            <Footer />
        </GameProvider>
    )
}

import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext';
import { Player } from './Player'
import { Position } from './Position'

export const Board = () => {

    const { items, player1, player2 } = useContext(GameContext);

    return (
        <>
            <Player 
                { ...player1 }
            />

            <div className="tic-tac-toe">
                <div className="board">
                    {
                        items.map( item => (
                            <Position
                                key={item.id}
                                { ...item }
                            />    
                        ))
                    }
                </div>
            </div>

            <Player 
                { ...player2 }
            />
        </>
    )
}

import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext';
import { Player } from './Player'
import { Position } from './Position'

export const Board = () => {

    const { items } = useContext(GameContext);

    const player1 = { id:"1", name:"Player 1" };
    const player2 = { id:"2", name:"Player 2" };

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

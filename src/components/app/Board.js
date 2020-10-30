import React, { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';

import { GameContext } from '../../context/GameContext';
import { Player } from './Player'
import { Position } from './Position'

export const Board = () => {

    const { items, winner, player1, player2, playerTurn, resetGame, startGame } = useContext(GameContext);
    
    useEffect(() => {
        if(winner){
            Swal.fire({
                title: 'Winner !',
                text: winner,
                icon: 'success'
            }).then((result) => {
                resetGame();
            });
        }
    }, [winner, resetGame]);

    useEffect(() => {
        if(!playerTurn){
            Swal.fire({
                title: 'New Game',
                text: 'Click to Start',
                icon: 'info'
            }).then((result) => {
                startGame();
            });
        }
    }, [playerTurn, startGame]);

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

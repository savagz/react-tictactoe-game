import React, { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';

import { GameContext } from '../../context/GameContext';
import { Player } from './Player'
import { Position } from './Position'

export const Board = () => {

    const { items, gameStatus, player1, player2, playerTurn, resetGame, cleanMoves } = useContext(GameContext);
    const { winner, state } = gameStatus;

    useEffect(() => {
        if(winner && state !== "STOP"){
            Swal.fire({
                title: 'Winner !',
                text: `${winner} Rocks !`,
                icon: 'success'
            }).then((result) => {
                cleanMoves();
            });
        } else {
            if(state !== "STOP" && items.filter(item => item.played !== "").length === 9){
                Swal.fire({
                    title: 'Its a Tie !',
                    text: 'Try again...',
                    icon: 'error'
                }).then((result) => {
                    cleanMoves();
                });
            }
        }
    }, [items, winner, state, cleanMoves]);

    const handleStartButton = () => {
        resetGame();
    }

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

            {
                !playerTurn && <button className="gamebutton" onClick={ handleStartButton }>Start</button>
            }
        </>
    )
}

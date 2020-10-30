import React, { createContext, useState } from 'react'
import { getItems, getPlayers } from '../helpers/data';
import { checkGameStatus } from '../helpers/game';

export const GameContext = createContext();

const GameProvider = (props) => {
    
    // Winner
    const [winner, setWinner] = useState(null);
    
    // Reset Game
    const [reset, setReset] = useState(false);

    // Players
    const [players, setPlayers] = useState(getPlayers());
    
    // Items
    const [items, setItems] = useState(getItems());

    // Turn Active
    const [playerTurn, setPlayerTurn] = useState(null);

    // Change Turn & Check Positions
    const selectPosition = (id, row, col) => {
        //console.log(`Player ${playerTurn.id} : [${row} - ${col}]`);
        if(reset){
            setReset(false);
        }

        let mvs = playerTurn.moves;
        mvs.push(id);

        // Update Position Played
        setItems(items.map(
            item => item.id === id
            ? { ...item, played:playerTurn.id }
            : item
        ));

        // Update Player Moves
        setPlayers(players.map(
            player => player.id === playerTurn.id
            ? { ...player, moves: mvs }
            : player
        ));
        
        if(checkGameStatus(id, playerTurn.moves)){
            setWinner(playerTurn.name);
        } else {
            if(playerTurn.id === '1'){
                setPlayerTurn(players[1]);
            } else {
                setPlayerTurn(players[0]);
            }
        }
    }

    const resetGame = () => {
        setWinner(null);
        setReset(true);
        setPlayers(getPlayers());
        setItems(getItems());
        setPlayerTurn(null);
    }

    const startGame = () => {
        setPlayerTurn(players[0]);
    }

    return(
        <GameContext.Provider
            value={{
                items,
                winner,
                reset,
                player1:players[0],
                player2:players[1],
                playerTurn,
                selectPosition,
                resetGame,
                startGame
            }}
        >
            { props.children }
        </GameContext.Provider>
    )

}

export default GameProvider;
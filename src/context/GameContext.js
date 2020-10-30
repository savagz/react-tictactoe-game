import React, { createContext, useState } from 'react'
import { getGameStatus, getItems, getPlayers } from '../helpers/data';
import { checkGameStatus } from '../helpers/game';

export const GameContext = createContext();

const GameProvider = (props) => {
    
    // Game Status
    const [gameStatus, setGameStatus] = useState(getGameStatus());

    // Players
    const [players, setPlayers] = useState(getPlayers());
    
    // Items
    const [items, setItems] = useState(getItems());

    // Turn Active
    const [playerTurn, setPlayerTurn] = useState(null);

    // Change Turn & Check Positions
    const selectPosition = (id) => {
        if(gameStatus.reset){
            setGameStatus({ ...gameStatus, reset:false });
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
            setGameStatus({ ...gameStatus, winner:playerTurn.name });
        } else {
            if(playerTurn.id === '1'){
                setPlayerTurn(players[1]);
            } else {
                setPlayerTurn(players[0]);
            }
        }
    }

    // Restart Game
    const resetGame = () => {
        setGameStatus({ ...gameStatus, reset:true, winner:null });
        setPlayers(getPlayers());
        setItems(getItems());
        setPlayerTurn(null);
        
        setGameStatus({ ...gameStatus, reset:true, state:"PLAYING" });
        setPlayerTurn(players[0]);
    }

    // Clean Player Moves
    const cleanMoves = () => {
        setGameStatus({ ...gameStatus, winner:null, state:"STOP" });
        setPlayerTurn(null);
        setPlayers(getPlayers());
    }

    return(
        <GameContext.Provider
            value={{
                items,
                gameStatus,
                player1:players[0],
                player2:players[1],
                playerTurn,
                selectPosition,
                resetGame,
                cleanMoves
            }}
        >
            { props.children }
        </GameContext.Provider>
    )

}

export default GameProvider;
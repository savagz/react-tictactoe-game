import React, { createContext, useState } from 'react'

export const GameContext = createContext();

const GameProvider = (props) => {
    
    const initialItems = [
        {id: "1", row:"1", col:"1"},
        {id: "2", row:"1", col:"2"},
        {id: "3", row:"1", col:"3"},
        {id: "4", row:"2", col:"1"},
        {id: "5", row:"2", col:"2"},
        {id: "6", row:"2", col:"3"},
        {id: "7", row:"3", col:"1"},
        {id: "8", row:"3", col:"2"},
        {id: "9", row:"3", col:"3"}
    ];

    const [playerTurn, setPlayerTurn] = useState('1');
    const [items, setItems] = useState(initialItems);

    const selectPosition = (row, col) => {
        console.log(`Player ${playerTurn} : [${row} - ${col}]`);
        if(playerTurn === '1'){
            setPlayerTurn('2');
        }else{
            setPlayerTurn('1');
        }
    }

    return(
        <GameContext.Provider
            value={{
                items,
                playerTurn,
                selectPosition,
                setItems
            }}
        >
            { props.children }
        </GameContext.Provider>
    )

}

export default GameProvider;
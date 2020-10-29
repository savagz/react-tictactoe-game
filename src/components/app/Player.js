import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext';

export const Player = ({id, name}) => {

    const { playerTurn } = useContext(GameContext);

    return (
        <div>
            { 
                (playerTurn === id)
                ? <h1 className={ `player${id}_title animate__animated animate__zoomIn` } >{ name }</h1>
                : <h1 className="animate__animated animate__zoomIn">{ name }</h1> 
            }
        </div>
    )
}

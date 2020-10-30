import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCircle } from '@fortawesome/free-solid-svg-icons';

import { GameContext } from '../../context/GameContext';

export const Position = ({id}) => {

    // Context
    const { playerTurn, gameStatus, selectPosition } = useContext(GameContext);
    const { reset, state } = gameStatus;

    // Local States
    const [select, setSelect] = useState(false);
    const [icon, setIcon] = useState('');
    const [divclass, setDivclass] = useState('board_item');

    useEffect(() => {
        if(reset){
            resetPosition();
        }
    }, [reset]);

    const resetPosition = () => {
        setSelect(false);
        setDivclass(`board_item`);
        setIcon(''); 
    }

    const handleSelectItem = () => {
        if(state !== "STOP" && !select){
            setSelect(true);
            setDivclass(`board_item item_selected_player${playerTurn.id}`);
            selectPosition(id);

            if(playerTurn.id === '1'){
                setIcon(faTimes);
            } else {
                setIcon(faCircle);
            }
        }
    }

    const setHover = (hover) => {
        if(state !== "STOP" && !select){
            if(hover){
                setDivclass('board_item item_hover');
            }else{
                setDivclass('board_item');
            }
        }
    }

    return (
        <div 
            className={ divclass }
            onClick={ handleSelectItem } 
            onMouseEnter={ () => setHover(true) }
            onMouseLeave={ () => setHover(false) }
        >
            <div className="board_item_inner">
                <div className="board_item_wrapper">
                    <div className="board_item_content">
                        {
                            select && ( <FontAwesomeIcon className="player_icon" icon={ icon } /> )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

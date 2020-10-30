import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCircle } from '@fortawesome/free-solid-svg-icons';

import { GameContext } from '../../context/GameContext';

export const Position = ({id, row, col}) => {

    const { playerTurn, reset, selectPosition } = useContext(GameContext);
    
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
        if(!select){
            setSelect(true);
            setDivclass(`board_item item_selected_player${playerTurn.id}`);
            selectPosition(id, row, col);

            if(playerTurn.id === '1'){
                setIcon(faTimes);
            } else {
                setIcon(faCircle);
            }
        }
    }

    const setHover = (state) => {
        if(!select){
            if(state){
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

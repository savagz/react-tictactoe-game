import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCircle } from '@fortawesome/free-solid-svg-icons';

import { GameContext } from '../../context/GameContext';

export const Position = ({row, col}) => {

    const { playerTurn, selectPosition } = useContext(GameContext);

    const [select, setSelect] = useState(false);
    const [sign, setSign] = useState('');
    const [divclass, setDivclass] = useState('board_item');

    const handleSelectItem = () => {
        if(!select){
            setSelect(true);
            setDivclass(`board_item item_selected_player${playerTurn}`);
            selectPosition(row, col);

            if(playerTurn === '1'){
                setSign(faTimes);
            } else {
                setSign(faCircle);
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
                            select && ( <FontAwesomeIcon className="player_icon" icon={ sign } /> )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

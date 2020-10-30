export function getItems(){
    const initialItems = [
        {id: "1", played:""},
        {id: "2", played:""},
        {id: "3", played:""},
        {id: "4", played:""},
        {id: "5", played:""},
        {id: "6", played:""},
        {id: "7", played:""},
        {id: "8", played:""},
        {id: "9", played:""}
    ];
    return initialItems;
}

export function getPlayers(){
    const players = [
        { id:"1", name:"Player 1", moves:[] },
        { id:"2", name:"Player 2", moves:[] } 
    ];
    return players;
}

export function getGameStatus(){
    const status = {
        winner: null, 
        reset: false, 
        state: 'STOP' 
    };
    return status;
}
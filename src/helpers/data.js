export function getItems(){
    const initialItems = [
        {id: "1", row:"1", col:"1", played:""},
        {id: "2", row:"1", col:"2", played:""},
        {id: "3", row:"1", col:"3", played:""},
        {id: "4", row:"2", col:"1", played:""},
        {id: "5", row:"2", col:"2", played:""},
        {id: "6", row:"2", col:"3", played:""},
        {id: "7", row:"3", col:"1", played:""},
        {id: "8", row:"3", col:"2", played:""},
        {id: "9", row:"3", col:"3", played:""}
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
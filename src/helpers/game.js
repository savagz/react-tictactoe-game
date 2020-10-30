
export function checkGameStatus(id, playermoves){
    const winmoves = [
        { id:'1', moves:[ ['1','2','3'] , ['1','4','7'] , ['1','5','9'] ] },
        { id:'2', moves:[ ['1','2','3'] , ['2','5','8'] ] },
        { id:'3', moves:[ ['1','2','3'] , ['3','6','9'] , ['3','5','7'] ] },
        { id:'4', moves:[ ['1','4','7'] , ['4','5','6'] ] },
        { id:'5', moves:[ ['4','5','6'] , ['2','5','8'] , ['1','5','9'] , ['3','5','7'] ] },
        { id:'6', moves:[ ['4','5','6'] , ['3','6','9'] ] },
        { id:'7', moves:[ ['1','4','7'] , ['7','8','9'] , ['3','5','7'] ] },
        { id:'8', moves:[ ['7','8','9'] , ['2','5','8'] ] },
        { id:'9', moves:[ ['3','6','9'] , ['7','8','9'] , ['1','5','9'] ] }
    ];
    let status = false;

    let wm = winmoves.filter( move => move.id === id )[0].moves;
    wm.forEach( move => {
        if ( move.every((val) => playermoves.indexOf(val) !== -1) ){
            status = true;
        }
    });
    
    return status;
}
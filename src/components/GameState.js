import React, { useState } from "react";

const GameState = () => {
    const [grid, setGrid] = useState([14, 8, 3, 2, 9, 11, 0, 5, 1, 13, 6, 4, 7, 10, 12, 15]);
    const [moves, setMoves] = useState(1);

    // const PanelClick = (number) => {
    
    //     const space = grid.indexOf(0);
    //     const panel = grid.indexOf(number);
    //     const test = [... grid];

    //     const sedge = (space % 4 === 0) ? true : false;
    //     const pedge = (panel % 4 === 0) ? true : false; 

    //     //check to see if space or panel are an edge case first
    //     //in which case they cannot be switched
    //     if(sedge){
    //         if(space - 1 === panel || space + 3 === panel){
    //             return;
    //         }
    //     } else if(pedge){
    //         if(panel - 1 === space || panel + 3 === space){
    //             return;
    //         }
    //     }
    //     //after checking for invalid switch, check for valid
    //     if (Math.abs(space - panel) === 4 || Math.abs(space - panel) === 1){
    //         test[space] = test[panel];
    //         test[panel] = 0;
    //         setGrid(test);
    //         setMoves(moves + 1);
    //     }
    //     //check for win condition after atleast 40 moves
    //     var win = [...grid];
    //     win = win.sort(function(a, b){return a-b});
    //     win.shift();
    //     win.push(0);

    //     if(moves >= 40){
    //         if(JSON.stringify(win) === JSON.stringify(test)){
    //             console.log('You win!');
    //         }  
    //     }
        
    // };
};



export default GameState;
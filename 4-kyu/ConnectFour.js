/**
 * Take a look at wiki description of Connect Four game:

Wiki Connect Four

The grid is 6 row by 7 columns, those being named from A to G.

You will receive a list of strings showing the order of the pieces which dropped in columns:

  piecesPositionList = ["A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "G_Red",
                        "B_Yellow"]
The list may contain up to 42 moves and shows the order the players are playing.

The first player who connects four items of the same color is the winner.

You should return "Yellow", "Red" or "Draw" accordingly.
 */

function whoIsWinner(piecesPositionList) {
    //return "Red", "Yellow" or "Draw"
    const gameboard = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ];

    for (let i = 0; i < piecesPositionList.length; i++) {
        const letterCol = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6 };
        var gameX = letterCol[piecesPositionList[i].charAt(0)];
        var gameY = 5;
        while (gameboard[gameY][gameX] != 0) {
            gameY = gameY - 1;
        }

        // put piece in place if red for 1
        if (piecesPositionList[i].charAt(2) == "R") {
            //if gameX and gameY is  0, push 1
            gameboard[gameY][gameX] = 1;
            //if gameX and gameY is not 0, subtract 1 from gameY
        }
        if (piecesPositionList[i].charAt(2) == "Y") {
            //push -1
            gameboard[gameY][gameX] = -1;
        }
        //put piece in place if yellow for -1
        // check if there are four consecutive horiziontal, vertical or diaganol pieces
        // declare winner
    }
    // else return "draw"
    console.log(gameboard);
    return "Draw";
}

console.log(
    whoIsWinner([
        "C_Yellow",
        "E_Red",
        "G_Yellow",
        "B_Red",
        "D_Yellow",
        "B_Red",
        "B_Yellow",
        "G_Red",
        "C_Yellow",
        "C_Red",
        "D_Yellow",
        "F_Red",
        "E_Yellow",
        "A_Red",
        "A_Yellow",
        "G_Red",
        "A_Yellow",
        "F_Red",
        "F_Yellow",
        "D_Red",
        "B_Yellow",
        "E_Red",
        "D_Yellow",
        "A_Red",
        "G_Yellow",
        "D_Red",
        "D_Yellow",
        "C_Red",
    ])
);

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
        const gameX = letterCol.piecesPositionList[i].charAt(0);
        const gameY = 5;
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
    return "Draw";
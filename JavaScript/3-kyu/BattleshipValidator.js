function validateBattlefield(field) {
    checkSum = (field) => {
        var sum = 0;
        for (let i = 0; i < field.length; i++) {
            sum = sum + field[i].reduce(a, (b) => a + b);
        }
        if (sum != 20) return false;
        return true;
    };
    const transposeField = field;
    const ships = [
        {
            name: "battleship",
            size: 4,
            qty: 1,
            coordinates: findBattleship(field),
        },
        { name: "cruiser", size: 3, qty: 2, coordinates: findCruisers(field) },
        {
            name: "destroyer",
            size: 2,
            qty: 3,
            coordinates: findDestroyers(field),
        },
        {
            name: "submarine",
            size: 1,
            qty: 4,
            coordinates: findSubmarines(field),
        },
    ];
    findBattleship = (field) => {
        // horizontal
        for (let i = 0; i < field.length; i++) {
            for (let j = 0; j < field[i]; j++) {
                if (
                    field[i][j] === field[i][j + 1] &&
                    field[i][j] == field[i][j + 2] &&
                    field[i][j] == field[i][j + 3]
                ) {
                    return [
                        [i, j],
                        [i, j + 1],
                        [i, j + 2],
                        [i, j + 3],
                    ];
                }
            }
        }
        //vertical
        field[0].map((_, colIndex) => field.map((row) => row[colIndex])); // transpose the array
        for (let i = 0; i < field.length; i++) {
            for (let j = 0; j < field[i]; j++) {
                if (
                    field[i][j] === field[i][j + 1] &&
                    field[i][j] == field[i][j + 2] &&
                    field[i][j] == field[i][j + 3]
                ) {
                    return [
                        [j, i],
                        [j + 1, i],
                        [j + 2, i],
                        [j + 3, i],
                    ];
                }
            }
        }
        return false;
    };
    findCruisers = (field) => {};
    findDestroyers = (field) => {};
    findSubmarines = (field) => {};
}

console.log(
    validateBattlefield([
        [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ])
);

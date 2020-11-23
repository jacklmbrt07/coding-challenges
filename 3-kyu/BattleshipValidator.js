function validateBattlefield(field) {
    const ships = [
        { name: "battleship", size: 4, qty: 1 },
        { name: "cruiser", size: 3, qty: 2 },
        { name: "destroyer", size: 2, qty: 3 },
        { name: "submarine", size: 1, qty: 4 },
    ];
    checkSum = (field) => {
        var sum = 0
        for (let i = 0, ; i < field.length; i++) {
            sum = sum + field[i].reduce(a, (b) => a + b);
        }
        if (sum != 20) return false;
        return true;
    }
    checkBattleship = (field) => {

    } 
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

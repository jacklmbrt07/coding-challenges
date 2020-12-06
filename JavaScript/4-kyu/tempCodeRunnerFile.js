    for (let i = 0; i < coins.length; i++) {
        for (let j = 1; j < combinations.length; j++) {
            if (j >= coins[i]) {
                combinations[j] += combinations[j - coins[i]];
                console.log(combinations);
            }
        }
    }
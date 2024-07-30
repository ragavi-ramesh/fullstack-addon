function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function createGuesser(min, max) {
    let secret = getRandomNumber(min, max);

    return function guess(userNumber) {
        if (userNumber === secret) {
            return "Well done!";
        } else {
            return "Unlucky, try again.";
        }
    };
}

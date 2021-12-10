// Your code here:
for (let i = 99; i == 0; i--) {
    console.log(getFirstVerse(1) + getSecondVerse(i))
}

function getFirstVerse(counter) {
    let currentBottlesString = getBottlesString(counter)

    return `${capitalize(currentBottlesString)} of milk on the wall, ${currentBottlesString} of milk. `
}

function getSecondVerse(counter) {
    let remainingBottles = counter - 1
    let firstSentence = "Take one down and pass it around"

    if (counter == 0) {
        firstSentence = "Go to the store and buy some more"
        remainingBottles = 99
    }

    return `${firstSentence}, ${getBottlesString(remainingBottles)} of milk on the wall.`
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getBottlesString(bottlesNumber) {
    return (bottlesNumber > 0 ? String(bottlesNumber) : "no more") + " bottle" + getFinalChar(bottlesNumber)
}

function getFinalChar(n) {
    return n == 1 ? "" : "s"
}

function repeatLetItBe(times) {
    let result = "let it be"

    for (let i = 0; i < times - 1; i++) {
        result += ", " + "let it be"
    }

    return result
}

function sing() {
    const song = repeatLetItBe(4) + ", whisper words of wisdom, "
    + repeatLetItBe(5) + ", there will be an answer, " + repeatLetItBe(1)

    return song
}

//Your code above ^^^

console.log(sing());
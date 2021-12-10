/* This exercise is almost identical to 15-Random numbers - consider merging them here and using another concept for 15? */

// Declare your function here
function generateRandom() {
    const randomFloat = Math.random() * 10
    const randomInt = Math.floor(randomFloat) 
    console.log(randomInt)
}

generateRandom()
let wordArray = []
let result = "";

function mnemonics(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (typeof wordArray[i] === "string") {
            result += wordArray[i][0]
        } else continue
    }
    return result.toUpperCase();
}
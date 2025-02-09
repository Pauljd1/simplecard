function findFirstShortestWord(wordsArray) {
    let shortest = wordsArray[0]

    for (let word of wordsArray) {
        if(word.length < shortest.length){
            shortest = word
        }
    }

    //Return the shortest word
    return shortest
}





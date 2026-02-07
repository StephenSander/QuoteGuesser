// Random Number Generator
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
};

const quotes = [
    ['Obi-Wan Kenobi', 'May the Force be with you.'],
    ['The Terminator', "I'll be back"],
    ['The Joker', 'Why so serious?'],
    ['Tony Montana', 'Say hello to my little friend!'],
    ['Announcer (Mortal Kombat)', 'Finish him!'],
    ['Dorothy', "There's no place like home"],
    ['GLaDOS', 'The cake is a lie'],
    ['Mario', "It's-a-me"],
    ['Gandalf', 'You shall not pass!'],
    ['Darth Vader', 'I am your father'],
    ['Andy Dufresne', 'Get busy living, or get busy dying'],
    ['Uncle Ben', 'With great power comes great responsibility'],
    ['Doc Brown', "Roads? Where we're going, we don't need roads"],
    ['Vladimir Makarov', 'Remember...No Russion'],
    ['William Wallace', "They may take our lives, but they'll never take our freedom!"],
    ['Harvey Dent', 'You either die a hero or live long enough to see yourself become the villain'],
    ['King Leonidas', 'This is Sparta!'],
    ['Master Chief', 'I need a weapon'],
    ['Captain Jack Sparrow', "I've got a jar of dirt"]
]

let gameQuote = [];

const getQuote = (array) => {
    
    // Grab a random author
    gameQuote.push(array[generateRandomNumber(array.length)][0]);
    // Grab a random quote
    gameQuote.push(array[generateRandomNumber(array.length)][1]);
    console.log(gameQuote);
};

getQuote(quotes);
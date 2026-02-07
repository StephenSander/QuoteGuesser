// Random Number Generator
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
};

const quotes = [
    ['Obi-Wan Kenobi', 'May the Force be with you.', 'Star Wars'],
    ['The Terminator', "I'll be back", 'Terminator'],
    ['The Joker', 'Why so serious?', 'The Dark Knight'],
    ['Tony Montana', 'Say hello to my little friend!', 'Scarface'],
    ['Announcer', 'Finish him!', 'Mortal Kombat'],
    ['Dorothy', "There's no place like home", 'The Wizard of Oz'],
    ['GLaDOS', 'The cake is a lie', 'Portal'],
    ['Mario', "It's-a-me", 'Super Mario Bros'],
    ['Gandalf', 'You shall not pass!', 'The Lord of the Rings'],
    ['Darth Vader', 'I am your father', 'Star Wars'],
    ['Andy Dufresne', 'Get busy living, or get busy dying', 'The Shawshank Redemption'],
    ['Uncle Ben', 'With great power comes great responsibility', 'Spider-Man'],
    ['Doc Brown', "Roads? Where we're going, we don't need roads", "Back to the Future"],
    ['Vladimir Makarov', 'Remember...No Russion', 'Call of Duty: Modern Warfare 2'],
    ['William Wallace', "They may take our lives, but they'll never take our freedom!", 'Braveheart'],
    ['Harvey Dent', 'You either die a hero or live long enough to see yourself become the villain', 'The Dark Knight'],
    ['King Leonidas', 'This is Sparta!', '300'],
    ['Master Chief', 'I need a weapon', 'Halo 2'],
    ['Captain Jack Sparrow', "I've got a jar of dirt", 'Pirates of the Carribean']
]

let gameQuote = [];

const getQuote = (array) => {
    
    // Grab a random author
    gameQuote.push(array[generateRandomNumber(array.length)][0]);
    // Grab a random quote
    gameQuote.push(array[generateRandomNumber(array.length)][1]);
    // Grab a random source
    gameQuote.push(array[generateRandomNumber(array.length)][2]);
    console.log(gameQuote);
};

getQuote(quotes);
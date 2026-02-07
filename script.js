// Random Number Generator
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
};

const quotes = [
    ['Obi-Wan Kenobi', 'May the Force be with you.', 'Star Wars', 'movie'],
    ['The Terminator', "I'll be back", 'Terminator', 'movie'],
    ['The Joker', 'Why so serious?', 'The Dark Knight', 'movie'],
    ['Tony Montana', 'Say hello to my little friend!', 'Scarface', 'movie'],
    ['Announcer', 'Finish him!', 'Mortal Kombat', 'game'],
    ['Dorothy', "There's no place like home", 'The Wizard of Oz', 'movie'],
    ['GLaDOS', 'The cake is a lie', 'Portal', 'game'],
    ['Mario', "It's-a-me", 'Super Mario Bros', 'game'],
    ['Gandalf', 'You shall not pass!', 'The Lord of the Rings', 'movie'],
    ['Darth Vader', 'I am your father', 'Star Wars', 'movie'],
    ['Andy Dufresne', 'Get busy living, or get busy dying', 'The Shawshank Redemption', 'movie'],
    ['Uncle Ben', 'With great power comes great responsibility', 'Spider-Man', 'movie'],
    ['Doc Brown', "Roads? Where we're going, we don't need roads", "Back to the Future", 'movie'],
    ['Vladimir Makarov', 'Remember...No Russion', 'Call of Duty: Modern Warfare 2', 'game'],
    ['William Wallace', "They may take our lives, but they'll never take our freedom!", 'Braveheart', 'movie'],
    ['Harvey Dent', 'You either die a hero or live long enough to see yourself become the villain', 'The Dark Knight', 'movie'],
    ['King Leonidas', 'This is Sparta!', '300', 'movie'],
    ['Master Chief', 'I need a weapon', 'Halo 2', 'game'],
    ['Captain Jack Sparrow', "I've got a jar of dirt", 'Pirates of the Carribean', 'movie']
]

let gameQuote = [];

const getQuote = (array) => {
    
    // Grab a random author
    gameQuote.push(array[generateRandomNumber(array.length)][0]);
    // Grab a random quote
    gameQuote.push(array[generateRandomNumber(array.length)][1]);
    // Grab a random source
    gameQuote.push(array[generateRandomNumber(array.length)][2]);

    let author = gameQuote[0];
    let saying = gameQuote[1];
    let source = gameQuote[2];
    const findSourceType = () => {
        
    }

    console.log('Okay are you ready? Here is your quote:');
    console.log(`"${saying}" - ${author} from the ${sourceType}: ${source}`);
};

getQuote(quotes);
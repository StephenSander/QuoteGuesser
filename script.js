// Random Number Generator
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
};

const quotes = [
    ['Obi-Wan Kenobi', 'May the Force be with you.', {movie: 'Star Wars'}],
    ['The Terminator', "I'll be back", {movie: 'Terminator'}],
    ['The Joker', 'Why so serious?', {movie: 'The Dark Knight'}],
    ['Tony Montana', 'Say hello to my little friend!', {movie: 'Scarface'}],
    ['Announcer', 'Finish him!', {game: 'Mortal Kombat'}],
    ['Dorothy', "There's no place like home", {movie: 'The Wizard of Oz'}],
    ['GLaDOS', 'The cake is a lie', {game: 'Portal'}],
    ['Mario', "It's-a-me", {game:'Super Mario Bros'}],
    ['Gandalf', 'You shall not pass!', {movie: 'The Lord of the Rings'}],
    ['Darth Vader', 'I am your father', {movie: 'Star Wars'}],
    ['Andy Dufresne', 'Get busy living, or get busy dying', {movie: 'The Shawshank Redemption'}],
    ['Uncle Ben', 'With great power comes great responsibility', {movie: 'Spider-Man'}],
    ['Doc Brown', "Roads? Where we're going, we don't need roads", {movie: "Back to the Future"}],
    ['Vladimir Makarov', 'Remember...No Russian', {game: 'Call of Duty: Modern Warfare 2'}],
    ['William Wallace', "They may take our lives, but they'll never take our freedom!", {movie: 'Braveheart'}],
    ['Harvey Dent', 'You either die a hero or live long enough to see yourself become the villain', {movie: 'The Dark Knight'}],
    ['King Leonidas', 'This is Sparta!', {movie: '300'}],
    ['Master Chief', 'I need a weapon', {game: 'Halo 2'}],
    ['Captain Jack Sparrow', "I've got a jar of dirt", {movie: 'Pirates of the Carribean'}],
    ['Vaas Montenegro', 'Have I ever told you the definition of insanity?', {game: 'Far Cry 3'}],
    ['Arthur Morgan', "It weren't us who changed", {game: 'Red Dead Redemption 2'}],
    ['The Arbiter', 'Kill me or release me, parasite! But do not waste my time with talk', {game: 'Halo 2'}]
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
    const findSource = () => {
        if (gameQuote[2].movie) {
            return gameQuote[2].movie;
        } else if (gameQuote[2].game) {
            return gameQuote[2].game;
        }
    };
    let source = findSource();

    const findSourceType = () => {
        if (gameQuote[2].movie) {
            return 'movie';
        } else {
            return 'game';
        }
    };
    let sourceType = findSourceType();

    document.querySelector('h1').innerHTML = 'Okay are you ready? Here is your quote:';
    document.getElementById('first').innerHTML = `"${saying}" - ${author}`;
    document.getElementById('second').innerHTML = `From the ${sourceType}: ${source}`;
};

getQuote(quotes);
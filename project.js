// 1. Deposit some money
// 2. Determine number of of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if user won
// 6. give the user their winnings.
// 7. play agian

const prompt = require("prompt-sync")();

const ROWS = 3; // good practice to name global vaiables in capital letters
const COLS = 3;

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOLS_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}

// Deposit some money
const deposit = () => {
    while (true){
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount); // The parse float function converts the string to the floating point number

    // checking the validation of the number
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){ // isNaN = is Not a Number?
        console.log("Invalid deposit amount, try again")
    }
    else{
        return numberDepositAmount;
    }
    }
};

// Determine number of of lines to bet on
const getNumberOfLines = () => {
    while (true){
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);
    
        // checking the validation of the number of Lines
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){ 
            console.log("Invalid number of lines, try again")
        }
        else{
            return numberOfLines;
        }
    }
}

// Collect the bet amount
const getBet = (balance,lines) =>{
    while (true){
        const bet = prompt("Enter the bet per line: "); // get the bet per line
        const numberBet = parseFloat(bet);
    
        // checking the validation of the bet
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance/lines){  // validate the be. Bet = bet per line * number of lines
            console.log("Invalid bet, try again")
        }
        else{
            return numberBet;
        }
    }
}

// spin the slot machine
const spin = () => {
    const symbols  = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for (let i=0; i< count; i++){
            symbols.push(symbol); // pushing the inside of the array
        }
    }
    const reels = [[],[],[]]
    for (let i=0; i < COLS; i++){
        const reelSymbols = [...symbols]; // copy from symbols array
        for (let j=0; j < ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
};

const reels = spin();
console.log(reels);
let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance,numberOfLines);
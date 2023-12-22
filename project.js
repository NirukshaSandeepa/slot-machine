// 1. Deposit some money
// 2. Determine number of of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if user won
// 6. give the user their winnings.
// 7. play agian

const prompt = require("prompt-sync")();

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

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance,numberOfLines);
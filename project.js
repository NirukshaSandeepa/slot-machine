// 1. Deposit some money
// 2. Determine number of of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if user won
// 6. give the user their winnings.
// 7. play agian

const prompt = require("prompt-sync")();

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

const getNumberOfLines = () => {
    while (true){
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);
    
        // checking the validation of the number
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){ // isNaN = is Not a Number?
            console.log("Invalid number of lines, try again")
        }
        else{
            return numberOfLines;
        }
        }
}

const depositAmount = deposit();
const numberOfLines = getNumberOfLines();
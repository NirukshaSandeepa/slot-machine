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
    const numberDepositAmount = parseFloat(depositAmount);

    // checking the validation of the number
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){ // isNaN = is Not a Number?
        console.log("Invalid deposit amount, try again")
    }
    else{
        return numberDepositAmount;
    }
    }
};



const depositAmount = deposit();
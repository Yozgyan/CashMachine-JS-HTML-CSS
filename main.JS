let cashBalance = 1500;
let userPin = 1234;


function changePinFunction() {
    let userInput = Number(prompt(`Please enter your currnet Pin`, `Current pin`));

    if (userInput === userPin) {
        userPin = Number(prompt('Please insert new Pin'))
        userPinCheck();
    }
}

function userPinCheck() {
    let userInput = Number(prompt('Enter Pin', 'PIN NUMBER'));

    if (userInput !== userPin) {
        alert("Wrong Passowrd");
        userPinCheck();
    } else if (userInput === userPin) {
        mainMenuFunction();
    }
}

function mainMenuFunction() {
    let userChoice = Number(prompt("1 Check balance\n2 Deposit\n3 Cash Withdrawal \n4 Change Pin \n5 Return Card", "Select from the above options"));

    switch (userChoice) {
        case 1:
            alert(`This is your balance: ${cashBalance} $`);
            mainMenuFunction();
            break;
        case 2:
            depositFunction();
            break;
        case 3:
            cashWithdrawalFunction();
            break;
        case 4:
            changePinFunction();
            break;
        case 5:
            alert(`Thank you and see you soon.`);
            break;
    }

}

// Deposit function witch is called when we select Number 2 from the main menu
function depositFunction() {

    let userDeposit = Number(prompt(`How much would you like to deposit`, "DEPOSIT AMOUNT "));

    if (userDeposit > 0) {
        alert(`You just depost $${userDeposit} and your balance now is $${userDeposit + cashBalance}`);
        cashBalance = userDeposit + cashBalance
        mainMenuFunction()
    } else if (userDeposit <= 0) {
        alert(`You entered invalid amount please try again`)
        depositFunction()
    } else
        mainMenuFunction()
};

function cashWithdrawalFunction() {
    let userInput = Number(prompt(`How much would you like to withdraw`, "AMOUNT FOR WITHDRAW"));

    if (userInput > 0 && userInput <= cashBalance) {
        alert(`You just withdrawal $${userInput} and your balance now is $${cashBalance - userInput}`);
        cashBalance -= userInput
        mainMenuFunction()
    } else if (userInput <= 0 || userInput > cashBalance) {
        alert(`You entered invalid amount please try again`)
        cashWithdrawalFunction()
    } else
        mainMenuFunction()

};



document.getElementById("domExample").innerHTML = "Yozgyan Shakir";


let btn = document.getElementById('button3');

btn.addEventListener('click', userPinCheck);
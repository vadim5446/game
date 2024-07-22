// const displayOptions = () => {    //     optionsContainer.innerHTML += `<h3>Please Select An Option</h3>`;
//     let buttonCon = document.createElement("div");
//     for (let value in options) {
//         buttonCon.innerHTML += `<button class="options" onclick="generate Word('${value}')">${value}</button>`;
//     }
//     optionsContainer.appendChild(buttonCon);
// };

// const blocker = () => {
//     let optionsButtons = document.querySelectorAll(".options");
//     let letterButtons = document.querySelectorAll(".letters");

//     optionsButtons.forEach((button) => {
//         button.disabled = true;
//     });

//     letterButtons.forEach((button) => {
//         button.disabled.true;
//     });
//     newGameContainer.classList.remove("hide");
// };

// const generateWord = (optionValue) => {
//     let optionsButtons = document.querySelectorAll(".options");

//     optionsButtons.forEach((button) => {
//         if (button.innerText.toLowerCase() === optionValue) {
//             button.classList.add("active");
//         }
//         button.disabled = true;
//     });

//     letterContainer.classList.remove("hide");
//     userInputSection.innerText = "";

//     let optionArray = options[optionValue];

//     chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
//     chosenWord = chosenWord.toUpperCase();

//     let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');

//     userInputSection.innerHTML = displayItem;
// };

// const initializer = () => {
//     winCount = 0;
//     count = 0;


//     userInputSection.innerHTML = "";
//     optionsContainer.innerHTML = "";
//     letterContainer.classList.add("hide");
//     newGameContainer.classList.add("hide");
//     letterContainer.innerHTML = "";

//     for (let i = 65; i < 91; i++) {
//         let button = document.createElement("button");
//         button.classList.add("letters");

//         button.innerText = String.fromCharCode(i);

//         button.addEventListener("click", () => {
//             let charArray = chosenWord.split("");
//             let dashes = document.getElementsByClassName("dashes");

//             if (charArray.includes(button.innerText)) {
//               charArray.forEach((char, index) => {
                    
//                 if (char === button.innerText) {

//                     dashes[index].innerText = char;

//                     winCount += 1;

//                     if (winCount == charArray.length) {
//                       resultText.innerHTML = `<h2 class='win-msg'>You Win!</h2><p>The word was <span>${chosenWord}</span></p>`;

//                       blocker();
//                     }
//                 }
//             });
//         } else {

//           count += 1

//           drawMan(count);

//           if (count == 6) {
//             resultText.innerHTML = `< h2 class='lose-msg'> Game Over!</h2 ><p>The word was <span>${chosenWord}</span></p>`;
//             blocker();
//           }
//         }

//         button.disabled = true;
//       });
//       letterContainer.append(button);
//     }

//     displayOptions();

//     let { initialDrawing } = canvasCreator();

//     initialDrawing();
//   };


//   const canvasCreator = () => {
//     let context = canvas.getContext("2d");
//     context.beginPath();
//     context.strokesStyle = "#000";
//     context.linewidth = 2;

//    const drawLine = (fromX, fromY, toX, toY) => {
//      context.moveTo(fromX, fromY);
//      context.lineTo(toX, toY);
//      context.stroke();
//    };

//    const head = () => {
//      context.beginPath();
//      context.arc(70, 30, 10, 0, Math.PI * 2, true);
//      context.stroke();
//    }
//To create the following code I had help from watching and following youtube, asking Chatgpt, and advising with classmates
//https://www.youtube.com/watch?v=dRzhwwXy-Sk&t=553s 
//HTML elements stored in consts, by id to be manipulated
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
//select HTML element with the id `user-input-section` and assign it constant `userInputSection`
const userInputSection = document.getElementById("user-input-section");
//select HTML element with id `new-game-container` and assign it to constant `newGameContainer` to display new game button
const newGameContainer = document.getElementById("new-game-container");
//select HTML element with id `new-game-button` and assign it to constant `newGameButton` to start new game
const newGameButton = document.getElementById("new-game-button");
//select HTML element with id `canvas` and assign it to constant `canvas` to start new game
const canvas = document.getElementById("canvas");
//select HTML element with id `result-text` and assign it to constant `resultText` to display result and correct word
const resultText = document.getElementById("result-text");

//object with options for the game, values for buttons
let options = {
    countries: [
        "Argentina",
        "Scotland",
        "Georgia",
        "Taiwan"
    ],
    foods: [
        "Ravioli",
        "Baklava",
        "Spaghetti",
        "Shawarma",
    ]
};

//winCount keeps track of how many correct guesses the player has made
let winCount = 0;
//count keeps track of how many incorrect guesses the player has made
let count = 0;
//chosenWord stores the word that the player is trying to guess
let chosenWord = "";
//Display option buttons
const displayOptions = () => {
    //set the HTML content of the optionsContainer element to a heading with the text "Please Select An Option" to clear any existing content in `optionsContainer`
    optionsContainer.innerHTML = `<h3>Please Select An Option</h3>`;
    //create new div element and assign it to the variable buttonCon to contain option buttons
    let buttonCon = document.createElement("div");
    //start a for...in loop that iterates over the properties of the options object
    for (let value in options) {
        //add button element to buttonCon div for each property in the options object
        buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
    }
    //append buttonCon div with option buttons to the optionsContainer element
    optionsContainer.appendChild(buttonCon);
};
//Block all the Buttons function declaration
const blocker = () => {
    //find buttons with the class options and store them in a variable called optionsButtons
    let optionsButtons = document.querySelectorAll(".options");
    //find all buttons with the class letters and store them in a variable called letterButtons.
    let letterButtons = document.querySelectorAll(".letters");
    //disable all options
    optionsButtons.forEach((button) => {
        button.disabled = true;
    });
    //disable all letters
    letterButtons.forEach((button) => {
        button.disabled = true;
    });
    //function ensures that once the game is over, no further actions can be taken until the player starts a new game
    newGameContainer.classList.remove("hide");
};
//Define the funcction, Word Generator takes on input called `optionValue`
const generateWord = (optionValue) => {
    //looking for all buttons labeled with the class "options" and storing them in the variable `optionsButtons`
    let optionsButtons = document.querySelectorAll(".options");
    //If options value matches the button innerText then highlight the button
    //loops through each button
    optionsButtons.forEach((button) => {
        console.log(button.innerText, optionValue)
        if (button.innerText.toLowerCase() === optionValue) {
            button.classList.add("active");
        }
        //disable buttons regardless of whether it matches the chosen option
        button.disabled = true;
    });
    //removes hiding of letters, makes them visible, and clears previous content
    letterContainer.classList.remove("hide");
    userInputSection.textContent = "";

    let optionArray = options[optionValue];
    //choses a number randomly from the category and rounds it down
    chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
    chosenWord = chosenWord.toUpperCase();
    //creates dashs for the placement of letters
    let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');
    //Dashes are displayed in the user input section
    userInputSection.innerHTML = displayItem;
};
//Initial Function, game intialized (called when page loads/user presses new game)
const initializer = () => {
    winCount = 0;
    count = 0;
    //Initially erase all content and hide letters and new game button
    userInputSection.textContent = "";
    optionsContainer.textContent = "";
    letterContainer.classList.add("hide");
    newGameContainer.classList.add("hide");
    letterContainer.textContent = "";
    //creating new buttons for the letters
    for (let i = 65; i < 91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");
        //Number to ASCII[A-Z]
        button.textContent = String.fromCharCode(i);
        //Adds a click event for each button
        button.addEventListener("click", () => {
            //split chosen word into an array of letters
            let charArray = chosenWord.split("");
            //Gets the elements representing the dashes (hidden letters) in the word
            let dashes = document.getElementsByClassName("dashes");
            //check for the letter, if array contains clicked value replace the matched dash with letter else draw on canvas
            if (charArray.includes(button.textContent)) {
                //loop through each character in the chosen word to see if there is a match
                charArray.forEach((char, index) => {
                    //check if character in array is same as clicked button, if so, execute the following
                    if (char === button.textContent) {
                        //reveal the letter in the corresponding spot
                        dashes[index].textContent = char;
                        //Update the win count
                        winCount += 1;
                        //if winCount equals word length execute the following
                        if (winCount == charArray.length) {
                            resultText.innerHTML = `<h2 class='win-msg'>You Win!</h2><p>The word was <span>${chosenWord}</span></p>`;
                            //block all buttons
                            blocker();
                        }
                    }
                });
            } else {
                //Lose count, if chosen letter is not in the chosen word, increase the ccount of incorrect guesses
                count += 1;
                //call `drawman(count)` for drawing a part of the hangman
                drawMan(count);
                //if count reaches 6, display lose message and disable all buttons
                if (count == 6) {
                    resultText.innerHTML = `<h2 class='lose-msg'>Game Over!</h2><p>The word was <span>${chosenWord}</span></p>`;
                    blocker();
                }
            }
            //disable clicked letter button
            button.disabled = true;
        });
        //makes button appear on screen
        letterContainer.append(button);
    }

    displayOptions();
    //Call to canvasCreator (for clearing previous canvas and creating initial canvas)
    let { initialDrawing } = canvasCreator();
    //initialDrawing would draw the frame
    initialDrawing();
};
//Canvas
const canvasCreator = () => {
    let context = canvas.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 2;
    //For drawing lines
    const drawLine = (fromX, fromY, toX, toY) => {
        context.moveTo(fromX, fromY);
        context.lineTo(toX, toY);
        context.stroke();
    };

    const head = () => {
        context.beginPath();
        //completes circle
        context.arc(70, 30, 10, 0, Math.PI * 2, true);
        //draws circle
        context.stroke();
    };

    const body = () => {
        drawLine(70, 40, 70, 80);
    };

    const leftArm = () => {
        drawLine(70, 50, 50, 70);
    };

    const rightArm = () => {
        drawLine(70, 50, 90, 70);
    };

    const leftLeg = () => {
        drawLine(70, 80, 50, 110);
    };

    const rightLeg = () => {
        drawLine(70, 80, 90, 110);
    };
    //initial frame 
    const initialDrawing = () => {
        //clear canvas
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        //bottom line
        drawLine(10, 130, 130, 130);
        //left line
        drawLine(10, 10, 10, 131);
        //top line
        drawLine(10, 10, 70, 10);
        //small top line
        drawLine(70, 10, 70, 20);
    };

    return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
};
//draw the man, defined by arrow function called `drawMan`
const drawMan = (count) => {
    let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
    switch (count) {
        case 1:
            head();
            break;
        case 2:
            body();
            break;
        case 3:
            leftArm();
            break;
        case 4:
            rightArm();
            break;
        case 5:
            leftLeg();
            break;
        case 6:
            rightLeg();
            break;
        default:
            break;
    }
};

//New Game, when clicked, intializer function executes new game 
newGameButton.addEventListener("click", initializer);
//when page finishes loading `initialize` function executes
window.onload = initializer;


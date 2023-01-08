//GET the elements from the html DOM and store them in variables
const containerDiv = document.querySelector(".container");
const userValue = document.getElementById("user-number");
const userSubmit = document.getElementById("user-submit");
const promptText = document.getElementById("prompt");
const copyInput = document.getElementById("copy-input");
const clearButton = document.getElementById("clear-button");

//CREATE a function called grid10
//CREATE a loop to create 10 div nodes called "row" inside the parent node "containerDiv"
//CREATE a loop to create another 10 div nodes inside each of the row nodes
//CALL function draw
function grid10() {
    for(let i = 0; i < 10; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        containerDiv.appendChild(row);
        
        for(let k = 0; k < 10; k++) {
            let column = document.createElement('div');
            column.classList.add('column')
            row.appendChild(column);
            
            
        }
       
    } 
    
    draw();
    
} 

//CREATE a function called entryHint
//ASSIGN a string to the textContent property of variable promptText node
function entryHint() {
    promptText.textContent = "Enter a number between 2 and 99.";
}

//CREATE a function called duplicateGrid
//DECLARE a variable called userGrid and ASSIGN the value that the user inputs in the text field of userValue node to it
//CONCATENATE the string "x" and userGrid together and assign it to the textcontent property of copyInput node

function duplicateGrid() {
    let userGrid = userValue.value;
    copyInput.textContent = "x " + userGrid;
    
}

//CREATE a function called changeColor
//DECLARE a variable called blackRadio and assign the node with id attribute "black-pen" to it 
//DECLARE a variable called redRadio and assign the node with id attribute "red-pen" to it 
//DECLARE a variable called blueRadio and assign the node with id attribute "blue-pen" to it 
//DECLARE a variable called rainbow and assign the node with id attribute "rainbow-pen" to it 
//DECLARE a variable called eraserRadio and assign the node with id attribute "eraser-pen" to it 
/*IF blackRadio is checked 
    change the background color of the target event to black
  ELSE IF redRadio is checked 
    change the background color of the target event to red
    
  ELSE IF blueRadio is checked
    change the background color of the target event to blue
  ELSE IF rainbowRadio is checked
    change the background color of the target event to rainbow
    ENDIF
    ENDIF
    ENDIF
    ENDIF
*/
function changeColor() {
    let blackRadio = document.getElementById('black-pen');
    let redRadio = document.getElementById('red-pen');
    let blueRadio = document.getElementById('blue-pen');
    let rainbow = document.getElementById('rainbow-pen');
    let eraserRadio = document.getElementById('eraser-pen'); 

    if (blackRadio.checked) {
        this.style.backgroundColor = '#2e2b2b';
    } else if (redRadio.checked) {
        this.style.backgroundColor = '#da2d2d'
    } else if (blueRadio.checked) {
        this.style.backgroundColor = "#3f33dd"
    } else if (eraserRadio.checked) {
        this.style.backgroundColor = ''
    } else if (rainbow.checked) {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = "#" + randomColor;
    }
}

//CREATE a function called draw
//DECLARE a variable columns and assign the node with an class attribute "column" to it
//CREATE a loop to add event listener to all the div nodes with class attribute "column"

function draw() {
    let columns = document.getElementsByClassName("column");
    
    for (let i = 0; i < columns.length; i++) {
        columns[i].addEventListener("mouseover", changeColor);
    }
    
}

//CREATE a function called makeGrid
//DECLARE a variable called number and assign the value that the user input inside the text field to it
//ASSIGN an empty string to the innerHTML property of the containerDiv variable
/*IF statement
IF the value inputted by the user (number) is not a number data type OR the value <= 2 OR the value >= 90 THEN
    ASSIGN the string "Make sure it's a number from 2 to 99!" to the textContent property of the variable promptText
    CREATE a loop to create 10 div nodes called "row" inside the parent node "containerDiv"
    CREATE a loop to create another 10 div nodes inside each of the row nodes
ELSE
    ASSIGN empty string to the textContent of variable promptText
    ASSIGN empty string to the textContent of variable containerDiv
    CREATE a loop to create variable number div nodes called "row" inside the parent node "containerDiv"
    CREATE a loop to create another variable number div nodes inside each of the row nodes
ENDIF
*/
// CALL function draw


function makeGrid() {
    let number = userValue.value;

    containerDiv.innerHTML = "";

    if (isNaN(number) || number <= 2 || number >= 99) {
        promptText.textContent = "Make sure it's a number from 2 to 99!";

        for(let i = 0; i < 10; i++) {
            let row = document.createElement('div');
            row.classList.add('row');
            containerDiv.appendChild(row);

            for(let k = 0; k < 10; k++) {
                let column = document.createElement('div');
                column.classList.add('column')
                row.appendChild(column);
            }
        } 
    } else {
        promptText.textContent = "";
        
        
        containerDiv.innerHTML = "";

       
        
        for(let i = 0; i < number; i++) {
            let row = document.createElement('div');
            row.classList.add('row');
            containerDiv.appendChild(row);

            for(let k = 0; k < number; k++) {
                let column = document.createElement('div');
                column.classList.add('column')
                row.appendChild(column);
            }
        } 
    } 

    draw();
}

//DECLARE a function called clearGrid
//DECLARE a variable columns and assign the node with class attribute "column"
//LOOP through all the column divs and set background color to empty string
function clearGrid() {
    let columns = document.getElementsByClassName("column");
    for (let i = 0; i < columns.length; i++) {
        columns[i].style.backgroundColor = '';
    }
}

//ADD an event listener to the window to monitor when the event target loads THEN run function grid10
//ADD an event listener to the variable userValue to monitor when the event target is focused on THEN run function entryHint
//ADD an event listener to the variable userValue to monitor when the user types a key inside the text field of the event target THEN run function entryHint
//ADD an event listener to the variable userSubmit to monitor when the user clicks on the event target THEN run function entryHint
window.addEventListener("load", grid10);
userValue.addEventListener("focus", entryHint);
userValue.addEventListener("keyup", duplicateGrid);
userSubmit.addEventListener("click", makeGrid);
clearButton.addEventListener("click", clearGrid);



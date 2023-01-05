//catch DOM
const containerDiv = document.querySelector(".container");
const userValue = document.getElementById("user-number");
const userSubmit = document.getElementById("user-submit");
const promptText = document.getElementById("prompt");
const copyInput = document.getElementById("copy-input");
const clearButton = document.getElementById("clear-button");

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

function entryHint() {
    promptText.textContent = "Enter a number between 2 and 99.";
}

function duplicateGrid() {
    let userGrid = userValue.value;
    copyInput.textContent = "x " + userGrid;
    console.log(copyInput.textContent);
}

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

function draw() {
    let columns = document.getElementsByClassName("column");
    
   
    for (let i = 0; i < columns.length; i++) {
        columns[i].addEventListener("mouseover", changeColor);
    }
    
}

function makeGrid() {
    let number = userValue.value;

    containerDiv.innerHTML = "";

    if (isNaN(number) || number <= 2 || number >= 99) {
        promptText.textContent = "Make sure it's a number from 2 to 99!";

        for(let i = 0; i < 10; i++) {
            let row1 = document.createElement('div');
            row1.classList.add('row');
            containerDiv.appendChild(row1);
            for(let k = 0; k < 10; k++) {
                let column = document.createElement('div');
                column.classList.add('column')
                row1.appendChild(column1);
            }
        } 
    } else {
        promptText.textContent = "";
        
        
        containerDiv.innerHTML = "";

       
        
        for(let i = 0; i < number; i++) {
            let row1 = document.createElement('div');
            row1.classList.add('row');
            containerDiv.appendChild(row1);
            for(let k = 0; k < number; k++) {
                let column1 = document.createElement('div');
                column1.classList.add('column')
                row1.appendChild(column1);
            }
        } 
    } 

    draw();
}

 
function clearGrid() {
    let columns = document.getElementsByClassName("column");
    for (let i = 0; i < columns.length; i++) {
        columns[i].style.backgroundColor = '';
    }
}


window.addEventListener("load", grid10);
userValue.addEventListener("focus", entryHint);
userValue.addEventListener("keyup", duplicateGrid);
userSubmit.addEventListener("click", makeGrid);
//clearButton.addEventListener("click", clearGrid);



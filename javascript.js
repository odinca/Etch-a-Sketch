// Function to create element with a class
function buildElement(elementName, className) {
    const newElement = document.createElement(elementName);
    newElement.classList.add(className);
    return newElement;
}

// Function to build grid
function createGrid(squaresPerRow = 16){
    const container = document.querySelector("#container");
    for (let rowNum = 1; rowNum <= squaresPerRow; rowNum++) {
        let currentRow = container.appendChild(buildElement("div", "row"))
        for (let columnNum = 1; columnNum <= squaresPerRow; columnNum++) {
            currentRow.appendChild(buildElement("div", "gridItem"));
        }
    }
    squareDimensions(960, squaresPerRow);
    changeColour();   
}

// Function to dynamically set dimensions of grid square
function squareDimensions(rowWidth = 960, numOfSquares) {
    const squareDimension = rowWidth / numOfSquares;
    const gridSquare = document.querySelector(".gridItem");
    const rowItem = document.querySelector(".row");
    rowItem.style.cssText = `width: ${rowWidth}`;
    gridSquare.style.cssText = `height: ${squareDimension}px; width: ${rowWidth}px`;
}

// Function to change colour of mouseover element
function changeColour() {
    const square = document.querySelector("#container");

    square.addEventListener("mouseover", (event) => {
        if (event.target.classList == "gridItem") {
        event.target.style.backgroundColor = "rgb(105 105 105)";
        }
    });
}

function newGameButton() {
    const btn = document.querySelector("button");
    btn.addEventListener("click", () => {
        let numberOfSquares = prompt("Please select the number of squares per side for your new canvas (default = 16).");
        numberOfSquares = Number(numberOfSquares);
        if (isNaN(numberOfSquares) || numberOfSquares === 0) {numberOfSquares = 16};
        removeElementsArray(".gridItem");
        removeElementsArray(".row");
        return createGrid(numberOfSquares);
    })
}

// Function to remove elements
function removeElementsArray(selectedElements) {
    const elementsArray = document.querySelectorAll(selectedElements);
    elementsArray.forEach(element => element.remove())
}


createGrid();

newGameButton();
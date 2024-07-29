// Function to create element with a class
function buildElement(elementName, className) {
    const newElement = document.createElement(elementName);
    newElement.classList.add(className);
    return newElement;
}

// Function to build grid
function createGrid(squaresPerRow = 16, rowWidth = 960){
    const squareDimension = rowWidth / squaresPerRow;
    const container = document.querySelector("#container");
    for (let rowNum = 1; rowNum <= squaresPerRow; rowNum++) {
        let currentRow = container.appendChild(buildElement("div", "row"))
        currentRow.style.cssText = `width: ${rowWidth}px`;
        for (let columnNum = 1; columnNum <= squaresPerRow; columnNum++) {
            let gridSquare = currentRow.appendChild(buildElement("div", "gridItem"));
            gridSquare.style.cssText = `height: ${squareDimension}px; width: ${squareDimension}px`
        }
    }
    changeColour();   
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
        let numberOfSquares = prompt("Please select the number of squares (1-100) per side for your new canvas (default = 16).");
        numberOfSquares = Number(numberOfSquares);
        if (isNaN(numberOfSquares) || numberOfSquares === 0 || numberOfSquares > 100) {
            numberOfSquares = 16
        };
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
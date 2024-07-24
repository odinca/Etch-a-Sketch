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
        let numberOfSquares = prompt("Please select the number of squares per side for your new canvas (default = 16).");
        removeElementsArray(".gridItem");
        removeElementsArray(".row");
        return createGrid(Number(numberOfSquares));
    })
}

// Function to remove elements
function removeElementsArray(selectedElements) {
    const elementsArray = document.querySelectorAll(selectedElements);
    elementsArray.forEach(element => element.remove())
}

createGrid();

newGameButton();
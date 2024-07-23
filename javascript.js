// Function to create element with ID

function buildElement(elementName, elementID) {
    const newElement = document.createElement(elementName);
    newElement.setAttribute("id", elementID);
    return newElement;
}

// Function to build grid

function createGrid(){
    container = document.querySelector("#container");
    let rowNum = 1;
    let rowIDs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"];
    for (rowNum; rowNum <= 16; rowNum++) {
        container.appendChild(buildElement("div", "row" + rowNum.toString()))
    }
}

createGrid ();
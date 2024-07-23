// Function to create element with a class and ID

function buildElement(elementName, elementID, className) {
    const newElement = document.createElement(elementName);
    newElement.setAttribute("id", elementID);
    newElement.classList.add(className);
    return newElement;
}

// Function to build grid

function createGrid(){
    container = document.querySelector("#container");
    let rowNum = 1;
    let columnIDs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"];
    for (rowNum; rowNum <= 16; rowNum++) {
        container.appendChild(buildElement("div", "row" + rowNum.toString(), "row"))
        currentRow = document.querySelector(`#row${rowNum.toString()}`);
        for (let columnID of columnIDs) {
            currentRow.appendChild(buildElement("div", rowNum + columnID, "gridItem"));
        }
    }
}

createGrid ();
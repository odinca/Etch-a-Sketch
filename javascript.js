// Function to create element with a class and ID

function buildElement(elementName, elementID, className) {
    const newElement = document.createElement(elementName);
    newElement.setAttribute("id", elementID);
    newElement.classList.add(className);
    return newElement;
}

// Function to build grid

function createGrid(){
    const container = document.querySelector("#container");
    let columnIDs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"];
    for (let rowNum = 1; rowNum <= 16; rowNum++) {
        container.appendChild(buildElement("div", "row" + rowNum.toString(), "row"))
        const currentRow = document.querySelector(`#row${rowNum.toString()}`);
        for (let columnID of columnIDs) {
            currentRow.appendChild(buildElement("div", rowNum + columnID, "gridItem"));
        }
    }
    changeColour();
}

// Function to change colour of mouse selected element

function changeColour() {
    const square = document.querySelector("#container");

    square.addEventListener("mouseover", (event) => {
        if (event.target.classList == "gridItem") {
        event.target.style.backgroundColor = "rgb(105 105 105)";
        }
    });
}

createGrid ();


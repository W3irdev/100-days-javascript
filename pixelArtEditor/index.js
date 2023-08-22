let gridWidth = document.getElementById("width-range");
let gridHeight = document.getElementById("height-range");
let widthValue = document.getElementById("width-value");
let heightValue = document.getElementById("height-value");
let createGrid = document.getElementById("create-grid");
let eraseGrid = document.getElementById("clear-grid");
let paint = document.getElementById("paint");
let erase = document.getElementById("erase");
let color = document.getElementById("color-input");
let canvas = document.querySelector(".container");

gridWidth.addEventListener("input", () => {
    widthValue.innerHTML = gridWidth.value;
});

gridHeight.addEventListener("input", () => {
    heightValue.innerHTML = gridHeight.value;
});

createGrid.addEventListener("click", () => {
    let rows = gridHeight.value;
    let cols = gridWidth.value;
    
    
    for(i = 0; i < rows; i++){
        canvas.appendChild(document.createElement('tr'));
        for(x = 0; x < cols; x++){
            let col = document.createElement('td');
            col.style.backgroundColor = "white";
            canvas.appendChild(col);
        }
    }
});

eraseGrid.addEventListener("click", () => {
    canvas.innerHTML = "";
});

paint.addEventListener("click", ()=>{
    
    canvas.childNodes.forEach(element => {
        element.addEventListener("click", () =>{
        let brush = color.value;
        let newcol = document.createElement('td');
        newcol.style.backgroundColor = brush;
        element.replaceWith(newcol);
    })
});
});

erase.addEventListener("click", ()=>{
    canvas.childNodes.forEach(element => {
        if(element.nodeName=='TD'){
            let newcol = document.createElement('td');
            element.replaceWith(newcol);
        }


    
});
});

window.onload = () => {
    gridHeight.value = 0;
    gridWidth.value = 0;
};
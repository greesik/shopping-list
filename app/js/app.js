import "../scss/main.scss";

let addButton = document.querySelector("#add");
let tBody = document.querySelector("tbody");
let categoryInput = document.querySelector("#categories");
let itemInput = document.querySelector("#item");
let quantityInput = document.querySelector("#quantity");
let unitInput = document.querySelector("#pieces");


addButton.addEventListener("click", function(){
    let tableRow = document.createElement("tr");
    let item = document.createElement("td");
    tableRow.appendChild(item);
    item.innerText = itemInput.value;
    let quantity = document.createElement("td");
    tableRow.appendChild(quantity);
    quantity.innerText = quantityInput.value;
    let unit = document.createElement("td");
    tableRow.appendChild(unit);
    if (unitInput.checked) {
        unit.innerText = "szt."
    } else {
        unit.innerText = "kg"
    }
    let category = document.createElement("td");
    category.innerText = categoryInput.options[categoryInput.selectedIndex].text;
    tableRow.appendChild(category);
    let deleteBtn = document.createElement("td");
    deleteBtn.innerHTML = "<a href='#' class='delete'>Usuń</a>";
    tableRow.appendChild(deleteBtn);
    tBody.appendChild(tableRow);

    let deleteRow = document.querySelectorAll(".delete");
    for (let i=0; i<deleteRow.length; i++){
        deleteRow[i].addEventListener("click", function(){
            deleteRow[i].parentElement.parentElement.remove();
        });
    };

});


import "../scss/main.scss";
import 'jspdf-autotable';
import jsPDF from 'jspdf';

let addButton = document.querySelector("#add");
let tBody = document.querySelector("tbody");
let categoryInput = document.querySelector("#categories");
let itemInput = document.querySelector("#item");
let quantityInput = document.querySelector("#quantity");
let unitInput = document.querySelector("#pieces");
// let pieceCounter = 0;
// let weightCounter = 0;
let rows = document.querySelectorAll("tr");
// let overall = document.querySelector(".overall");
let showCategories = document.querySelector("#show-categories");
let arrCategories = [];
let pdfDownload = document.querySelector("#pdf");
let body = document.querySelector("body");
body.style.background = "url('images/bg-list.jpg') no-repeat";
body.style.backgroundSize = "cover";

//form validation
setInterval(validateForm, 200);
function validateForm(){
    if (itemInput.value.length === 0 || quantityInput.value.length === 0) {
        addButton.disabled = true
    } else {
        addButton.disabled = false
    }
}


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

    // deleting a chosen row
    let deleteRow = document.querySelectorAll(".delete");
    for (let i=0; i<deleteRow.length; i++){
        deleteRow[i].addEventListener("click", function(){
            deleteRow[i].parentElement.parentElement.remove();
        });
    }

    // counter of all the products
    // rows.forEach(function() {
    //     if (unit.innerText === "szt.") {
    //         pieceCounter = pieceCounter + parseInt(quantity.innerText);
    //     } else if (unit.innerText === "kg") {
    //         weightCounter = weightCounter + parseInt(quantity.innerText);
    //     }
    // });

    // filling <select> with options of categories added to the list
    rows.forEach(function(){
        if (!arrCategories.includes(category.innerText)){
            arrCategories.push(category.innerText);
            let option = document.createElement("option");
            option.innerHTML = arrCategories[arrCategories.length - 1];
            showCategories.appendChild(option);
        }
    });

    // showing only selected category
    showCategories.addEventListener("change", function(event){
        category.parentElement.style.display = "none";
        if (category.innerText === event.target.value) {
            rows.forEach(function(){
                category.parentElement.style.display = "table-row";
            })
            } else {
            if (event.target.value === "all") {
                rows.forEach(function(){
                    category.parentElement.style.display = "table-row";
                })
            }
        }
    });
});

// overall.innerText = `W sumie planujemy zakupić ${pieceCounter} sztuk i ${weightCounter} kilogramów towaru.`;

// using jsPDF to make download of the list possible
pdfDownload.addEventListener("click", function(){
    let doc = new jsPDF();
    doc.autoTable({html: '.table'});
    doc.save('ShoppingList.pdf')
});

import "../scss/main.scss";

let addButton = document.querySelector("#add");
let tBody = document.querySelector("tbody");
let categoryInput = document.querySelector("#categories");
let itemInput = document.querySelector("#item");
let quantityInput = document.querySelector("#quantity");


addButton.addEventListener("click", function(){
    let tr1 = document.createElement("tr");
    let td1 = document.createElement("td");
    tr1.appendChild(td1);
    td1.innerText = itemInput.value;
    let td2 = document.createElement("td");
    tr1.appendChild(td2);
    td2.innerText = quantityInput.value;
    let td3 = document.createElement("td");
    td3.innerText = categoryInput.options[categoryInput.selectedIndex].text;
    tr1.appendChild(td3);
    let td4 = document.createElement("td");
    td4.innerHTML = "<a href='#' class='delete'>Usuń</a>";
    tr1.appendChild(td4);
    tBody.appendChild(tr1);

    let deleteRow = document.querySelectorAll(".delete");
    for (let i=0; i<deleteRow.length; i++){
        deleteRow[i].addEventListener("click", function(){
            deleteRow[i].parentElement.parentElement.remove();
        });
    };

});


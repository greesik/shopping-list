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
    tBody.appendChild(tr1);
});
const inputField = document.getElementById("input-field");
const listBag = document.getElementById("list");

function addTask(){
    if(inputField.value === ''){
        alert("Write something to add task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputField.value;
        listBag.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputField.value = "";
    saveData();
}

listBag.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},  false);

function saveData(){
    localStorage.setItem("data" , listBag.innerHTML);
}
function showTask(){
    listBag.innerHTML =  localStorage.getItem("data");
}
showTask();



//  select element 
let allSpan = document.querySelectorAll(".buttons span");
let results = document.querySelector(".ruslts > span");
console.log(results)


let theInput = document.getElementById("the-input");

allSpan.forEach( span => {
    span.addEventListener("click", (e) => {
        if(e.target.classList.contains("Check-item") ){
            checkItem();
        }
        else if(e.target.classList.contains("Add-item")){
            addItem();
        }
        else if(e.target.classList.contains("delete-item")){
            deleteItem();
        }
        else if(e.target.classList.contains("show-item")){
            showItem();
        }


    });
});

function showMessage(){
        results.innerHTML = ` input cant be empty `;
}

function checkItem(){
    if(theInput.value !== ""){
        if(localStorage.getItem(theInput.value)){
            results.innerHTML = ` found local item called <span> ${theInput.value} </span> `;
        }else{
            results.innerHTML = ` no local item called <span> ${theInput.value} </span> `; 
        }
    }else{
        showMessage();
    }
}

function addItem(){
    if(theInput.value !== ""){
        localStorage.setItem(theInput.value ,"value");
        results.innerHTML = ` local storage item <span> ${theInput.value} </span> Added `;
        theInput.value = "";
    } else {
        showMessage();
    }
}

function deleteItem(){
    if(theInput.value !== ""){
        if(localStorage.getItem(theInput.value)){
            localStorage.removeItem(theInput.value);
            results.innerHTML = `   local storage item called <span> ${theInput.value} </span> Deleted `;
        }else{
            results.innerHTML = ` no local storage with the name called <span> ${theInput.value} </span> `; 
        }
    } else {
        showMessage();
    }
}

function showItem(){
    if(localStorage.length ){
        // make  result empty
        results.innerHTML ="";
        //console.log(` found Element ${localStorage.length}  `);
        for(let [key,value] of Object.entries(localStorage)){
            results.innerHTML += ` <span class ="keyes"> ${key}  </span> `;
            

        }
    }else{
        results.innerHTML = `localstorage is empty`;
    }
}


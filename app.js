const hideBut = document.getElementById("hideBut");
const listDiv = document.getElementById("listDiv");
const changeP = document.getElementById("changeP");
const changeInput = document.getElementById("changeInput");
const changeBut = document.getElementById("changeBut");
const addInput = document.getElementById("addInput");
const addBut = document.getElementById("addBut");
const list = document.getElementById("list");
//const removeListBut = document.getElementById("removeListBut");
//const upBut = document.getElementsByClassName("upBut");
//const downBut = document.getElementsByClassName("downBut");

var listLiS = document.querySelectorAll("#list > li");

function addLiButton(li) {
  li.innerHTML += '<button class="upBut">Up</button><button class="downBut">Down</button><button class="removeBut">Remove</button>'
}

for (var i = 0; i < listLiS.length; i++) {
  addLiButton(listLiS[i]);
}

var hideButText = hideBut.textContent;

hideBut.addEventListener("click", () => {
  if (listDiv.style.display === "none") {
    listDiv.style.display = "block";
    hideBut.textContent = hideButText;
  } else {
    listDiv.style.display = "none";
    hideBut.textContent = "Show list";
  }
});

changeBut.addEventListener("click", () => {
  if (changeInput.value === "") {
    changeInput.placeholder = "Write something!!";
  } else {
    changeP.textContent = changeInput.value;
    changeInput.value = "";
  }
}); 

addBut.addEventListener("click", () => {
  if (addInput.value === "") {
    addInput.placeholder = "Write something!!";
  } else {
    var newListLi = document.createElement("LI");
    
    newListLi.innerHTML = addInput.value;
    addLiButton(newListLi);
    list.appendChild(newListLi);
    
    addInput.value = "";
  }
}); 

removeListBut.addEventListener("click", () => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
});

list.addEventListener("click", (event) => {
  let but = event.target;
  let li = but.parentNode;
  
  if (but.className === "removeBut") {
    list.removeChild(li);
  } else if (but.className === "upBut") {
    console.log(list.firstElementChild);
    console.log(li);
    
    if (list.firstElementChild != li) {
      list.insertBefore(li, li.previousElementSibling);
    }
  } else if (but.className === "downBut") {
    console.log(li.nextElementSibling);
    console.log(li.nodeName);
    
    if (list.lastElementChild != li) {
      list.insertBefore(li, li.nextElementSibling.nextElementSibling);
    }  
  } 
});



//document.querySelector("ul").addEventListener("click", (event) => {
//  console.log(event.target);
//  console.log(event.bubbles);
//});

console.log("End");



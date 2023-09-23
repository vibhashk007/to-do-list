var taskList = document.querySelector("#taskList");

function addTask() {
  var newTask = document.createElement("li");
  var inputVal = document.getElementById("taskInput").value;
  var taskVal = document.createTextNode(inputVal);
  var delIcon = document.createElement("span");
  delIcon.innerHTML = "\u00D7";
  
  newTask.appendChild(taskVal);
  if (inputVal === "") {
    alert("Please create a valid task");
  } else {
    taskList.appendChild(newTask);
    newTask.appendChild(delIcon);
  }
  document.getElementById("taskInput").value = "";
}

//// This function Adds the functionality of marking tasks as complete or deleting tasks

taskList.addEventListener("click",function(e){          
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
    }
},false);


/////// This function is added to add tasks to the to do list when the eneter key is pressed////////

var inputBox = document.getElementById("taskInput");

inputBox.addEventListener("keypress",function(e){
    var key = e.which || e.keyCode || 0;
    if( key === 13){
        addTask();
    }
});
















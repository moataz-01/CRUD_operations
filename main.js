var data = [];
var tabl = document.getElementById("tabl");
var msg = document.getElementsByClassName("msg");
function Add() {
    var usernameEl = document.getElementById("username");
    var taskEl = document.getElementById("task");
    if(usernameEl.value != "" && taskEl.value != "") {
        var obj = {Name: usernameEl.value, Task: taskEl.value};
        data.push(obj);
        usernameEl.value = "";
        taskEl.value = "";
        show();
        tabl.style.opacity = 1;
        msg[0].style.display = "none";
        msg[0].innerHTML = "";
        msg[1].style.display = "none";
        msg[1].innerHTML = "";
    } else if(usernameEl.value === "" && taskEl.value === "") {
        msg[0].style.display = "block";
        msg[0].innerHTML = "Name cannot be Empty.";
        msg[1].style.display = "block";
        msg[1].innerHTML = "Task cannot be Empty.";
    }
     else if(usernameEl.value === ""){
        msg[0].style.display = "block";
        msg[0].innerHTML = "Name cannot be Empty.";
        msg[1].style.display = "none";
        msg[1].innerHTML = "";
    } else if(taskEl.value === "") {
        msg[1].style.display = "block";
        msg[1].innerHTML = "Task cannot be Empty.";
        msg[0].style.display = "none";
        msg[0].innerHTML = "";
    } 
}
function show() {
    var showTable = document.getElementById("showTable");
    var result = "";
    for(var i = 0; i < data.length; i++) {
        result += ` <tr>
                        <td>${i}</td>
                        <td id="nameUpdate${i}">${data[i].Name}</td>
                        <td id="taskUpdate${i}">${data[i].Task}</td>
                        <td><button id="updateBtn${i}" onclick="update(${i})">Update</button> <button id="confirmBtn${i}" onclick="change(${i})" style="display:none;">Confirm</button></td>
                        <td><button onclick="destroy(${i})">Delete</button></td>
                    </tr>`
    }
    showTable.innerHTML = result;
    if(result == "") {
        tabl.style.opacity = 0;
    }
}
function destroy(id) {
    data.splice(id, 1);
    show();
}

function update(id) {
    var nameUpdate = document.getElementById("nameUpdate"+id);
    var taskUpdate = document.getElementById("taskUpdate"+id);
    var updateBtn = document.getElementById("updateBtn"+id);
    var confirmBtn = document.getElementById("confirmBtn"+id);
    nameUpdate.innerHTML = `<input id="changeName" type="text" value="${data[id].Name}">`;
    taskUpdate.innerHTML = `<input id="changeTask" type="text" value="${data[id].Task}">`;
    updateBtn.style.display = "none";
    confirmBtn.style.display = "block";
}
function change(id) {
    var nameUpdate = document.getElementById("nameUpdate"+id);
    var taskUpdate = document.getElementById("taskUpdate"+id);
    var updateBtn = document.getElementById("updateBtn"+id);
    var confirmBtn = document.getElementById("confirmBtn"+id);
    if(changeName.value == "" && changeTask.value == "") {
        destroy(id);
    } else {
        data[id].Name = changeName.value;
        data[id].Task = changeTask.value;
        nameUpdate.innerHTML = `${data[id].Name}`;
        taskUpdate.innerHTML = `${data[id].Task}`;
        confirmBtn.style.display = "none";
        updateBtn.style.display = "block";
    }

}
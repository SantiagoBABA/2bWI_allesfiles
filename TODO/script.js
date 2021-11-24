const tasks = ["Mission", "Auftrag", "Aufgabe"];
printTaskList();






document.getElementById("Befehlaufgeben").addEventListener("click",function(){
 document.getElementById("txtNewTask").value
 tasks.push(newTask);
 printTaskList();
});

function printTaskList(){
document.getElementById("taskList").innerHTML = getHTMLTasks()};


 function getHTMLTasks(){
let html = "";
tasks.forEach(element => {
  html+="<li>" + element + "</li>"
    
});

return html;
}
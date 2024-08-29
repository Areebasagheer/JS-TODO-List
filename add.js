var lists = document.getElementById("todoList");

function add() {
  var input = document.getElementById("inp");

  if (input.value == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Write something",

    });
  }

  else {
    var list = document.createElement("li");
    list.innerHTML = input.value;
    input.value = "";
    

    var btnContainer = document.createElement("div");
    btnContainer.setAttribute("class", "btn-con");

    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash fa-lg"></i>';
    deleteBtn.classList.add("delete-btn");
    deleteBtn.setAttribute("onclick","removelist(event)");
    
    var editBtn = document.createElement("button");
    editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square fa-lg"></i>'
    editBtn.classList.add("edit-btn");
    editBtn.setAttribute("onclick","edit(event)");

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);


    list.appendChild(btnContainer);
    lists.appendChild(list);
  }


}
function removelist(event){
    event.target.closest("li").remove();
  }

function edit(event){
  var updated = prompt("updated task",event.target.closest("li").firstChild.nodeValue);
  if (updated !== null){
    event.target.closest("li").firstChild.nodeValue = updated
  }
}
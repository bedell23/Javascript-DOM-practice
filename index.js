var form = document.querySelector("#addForm");
var itemsList = document.querySelector("#items");

// form events
form.addEventListener("submit", addItem);
itemsList.addEventListener("click", removeItem);

// add Item
function addItem(e) {
  e.preventDefault();
  // get input value
  var newItems = document.querySelector("#inputId").value;
  // create li element
  var li = document.createElement("li");
  // add class name
  li.className = "list-group-item";
  // add text node with input value
  li.appendChild(document.createTextNode(newItems));
  // delete button
  var deleteBtn = document.createElement("button");

  // add class name to delete btn
  deleteBtn.className = "btn btn-danger btn-sm delete float-right";
  // appent text node to delete btn
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);

  itemsList.appendChild(li);
  document.getElementById("inputId").value = "";
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you show")) {
      var li = e.target.parentElement;
      itemsList.removeChild(li);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let buttonSubmit = document.querySelector('#create-task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Does not redirect');
    let userValue = document.querySelector('#new-task-description').value;
    let listItem = document.createElement("li"); 
    listItem.innerHTML = userValue;
    document.querySelector('#tasks').append(listItem);
    document.querySelector('#create-task-form').reset();
}, false);



});

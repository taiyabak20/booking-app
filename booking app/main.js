


let list= document.querySelector('#users').innerHTML;
const btn = document.querySelector('.btn');

btn.addEventListener('click', e => {

  e.preventDefault();
  //console.log(nameInput.value);
  //console.log(emailInput.value);
let nameInput = document.querySelector('#name').value;
let emailInput= document.querySelector('#email').value;


  const storedUserDataJSON = localStorage.getItem("details");
  const details = storedUserDataJSON ? JSON.parse(storedUserDataJSON) : [];

  const objInput = {
    name: nameInput ,
    email: emailInput
  };

details.push(objInput);

console.log(details);
  localStorage.setItem("details", JSON.stringify(details));

  function updateUsersList() {
    let print = '';
    details.forEach((user, index) => {
      print += `&bull; ${user.name} - ${user.email} <button class="dlt-button">delete</button><br>`;
    });
  
    document.querySelector('#users').innerHTML = print;
  
    let deleteButtons = document.querySelectorAll(".dlt-button");
  
    deleteButtons.forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        deleteUser(index);
      });
    });
  }
  
  updateUsersList(); 
  
  function deleteUser(index) {
    details.splice(index, 1);
    updateUsersList();
  }
  
  document.querySelector('#name').value = '';
  document.querySelector('#email').value = '';

  //console.log(objInput);
});

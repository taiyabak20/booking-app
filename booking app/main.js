


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
      print += `&bull; ${user.name} - ${user.email} <button class="dlt-button">delete</button> <button class="edit-button">edit </button><br>`;
    });
  
    document.querySelector('#users').innerHTML = print;
  
    let deleteButtons = document.querySelectorAll(".dlt-button");
  
    deleteButtons.forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        deleteUser(index);
      });
    });

    let editButton = document.querySelectorAll(".edit-button")
    editButton.forEach((editButton, index)=> {
      editButton.addEventListener("click", ()=> {
        editUser(index);
      })
    })
  }
  
  updateUsersList(); 

  function deleteUser(index) {
    details.splice(index, 1);
    updateUsersList();
    localStorage.setItem("details", JSON.stringify(details)); 
  }
  
  function editUser(index){
    const userD = details[index];
    document.querySelector('#name').value = userD.name;
    document.querySelector('#email').value = userD.email;
    deleteUser(index);

  }


  document.querySelector('#name').value = '';
  document.querySelector('#email').value = '';

  //console.log(objInput);
});

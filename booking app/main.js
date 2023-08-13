
const nameInput = document.querySelector('#name');
const emailInput= document.querySelector('#email')

const btn = document.querySelector('.btn');

btn.addEventListener('click', e => {
  e.preventDefault();
  //console.log(nameInput.value);
  //console.log(emailInput.value);
  localStorage.setItem("email", `${emailInput.value}`);
  localStorage.setItem("name", `${nameInput.value}`);
  nameInput.value='';
  emailInput.value='';
 
});
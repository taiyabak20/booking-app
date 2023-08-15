


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

  let print =''
  details.forEach(user => {
    print+=`&bull; ${user.name} - ${user.email}  <br>`
    document.querySelector('#users').innerHTML=print;
  });
  
  document.querySelector('#name').value = '';
  document.querySelector('#email').value = '';

  //console.log(objInput);
});
console.log(list);
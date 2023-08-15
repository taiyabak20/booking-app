
const nameInput = document.querySelector('#name');
const emailInput= document.querySelector('#email')



const btn = document.querySelector('.btn');

btn.addEventListener('click', e => {
  e.preventDefault();
  //console.log(nameInput.value);
  //console.log(emailInput.value);

  const objInput = {
    name: nameInput.value ,
    email: emailInput.value
  };


  localStorage.setItem("userInput", JSON.stringify(objInput));
  
  nameInput.value='';
  emailInput.value='';

  console.log(objInput);
});
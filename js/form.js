//EVENTOS EN EL FORM
const form = document.getElementById("form1");
let formName = document.getElementById("name");
let formMail = document.getElementById("email");
let formMsg = document.getElementById("msg");
let correos = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
 
  if (formName.value == '' || formMail.value == '' || formMsg.value == '' ){
    Swal.fire(
      'Something went wrong',
      'Try again',
      'error'
    )
  } else {
    Swal.fire(
      'Message send',
      'Thank you for your message!',
      'success'
    )
    createForm()
  }
});

const createForm = () => {
  document.getElementById('form1').reset();
};

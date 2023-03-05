let form = document.querySelector('form');

let getData = (form) => {
  let data = {
    name          : form.name.value,
    email         : form.email.value,
    phoneNumber   : form.phoneNumber.value,
    subject       : form.subject.value,
    clientMessage : form.clientMessage.value,
  };

  return data;
};

let mailTo = (emailReceiver, data) => {
  window.location.href = `mailto:${emailReceiver}?subject=${data.subject}&body=Hello my name is ${data.name}, ${data.clientMessage}. you can contact me here ${data.phoneNumber}.`;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let data = getData(form);
  mailTo('afra.faris123@gmail.com', data);
});

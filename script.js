// $("#contact-form").submit(function (e) {
//   var name = document.getElementById("inputName"),
//     email = document.getElementById("inputEmail"),
//     message = document.getElementById("inputMessage");

//   if (!name.value || !email.value || message.value) {
//     alertify.error("Please check your entries");
//   } else {
var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Thanks for your submission!";
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);
//     e.preventDefault();
//     $(this).get(0).reset();
//     alertify.success("Message Sent");
//   }
// });

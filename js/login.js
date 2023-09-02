const elLoginForm = document.querySelector(".login-form");
const elLoginInput = document.querySelector(".login-input");
const elLoginPassword = document.querySelector(".login-password");

const users = JSON.parse(localStorage.getItem("users") || "[]");
localStorage.setItem("users", JSON.stringify(users));

if(localStorage.getItem("user_id")) localStorage.removeItem("user_id");


elLoginForm.addEventListener("submit", evt => {
  evt.preventDefault();

  const elLoginInputValue = elLoginInput.value.trim();
  const elLoginPasswordValue = elLoginPassword.value;

  const exitingUser = users.find(item => (item.user_name == elLoginInputValue || item.user_phone == elLoginInputValue) && item.user_password == elLoginPasswordValue);
  const userId = exitingUser?.id;

  localStorage.setItem("user_id", userId);

  if(exitingUser) {
    window.location.href = "./index.html"
  } else {
    alert("Bunday foydalanuvchi yo'q☹");
    return;
  }

  elLoginInput.value = "";
  elLoginPassword.value = "";
})
const elRegisterForm = document.querySelector(".register-form");
const elUserName = elRegisterForm.querySelector(".register-input");
const elNumber = elRegisterForm.querySelector(".register-number");
const elPassword = elRegisterForm.querySelector(".register-password");

const users = JSON.parse(localStorage.getItem("users") || "[]");
localStorage.setItem("users", JSON.stringify(users));

if(localStorage.getItem("user_id")) localStorage.removeItem("user_id");

elRegisterForm.addEventListener("submit", evt => {
  evt.preventDefault();
  
  const elUserNameValue = elUserName.value.trim();
  const elNumberValue = elNumber.value;
  const elPasswordValue = elPassword.value.trim();
  

  if(elUserNameValue.includes(" ")) {
    alert("Iltimos, bosh joy bilan nomlamang");
    return;
  }
  // bizda raqamimiz +998 dan boshlanmasa birinchi shartimiz true bo'ladide ifni ichidegi shart ishlab ketib qaytarvoradi 
  if(!elNumberValue.startsWith("+998") || elNumberValue.length != 13) {
    alert("Iltimos, raqamingizni to'g'ri kiriting. \nRaqamingiz +998 dan boshlanishi va raqamingiz uzunligi 13 taga teng bo'lishi kerak (+ bilan birga)");
    return;
  }

  if(elPasswordValue.includes(" ")) {
    alert("Iltimos, bosh joy bilan password qo'ymang");
    return;
  }
  
  // get user's regestreted time
  const date = new Date();
  
  // on converting from number to string string type is cut the zero
  const day = date.getDate().toString().padStart(2, 0);
  let month = date.getMonth() + 1;
  month = month.toString().padStart(2, 0);
  const year = date.getFullYear().toString().slice(2, 4);
  const hour = date.getHours().toString().padStart(2, 0);
  const minute = date.getMinutes().toString().padStart(2, 0);
  const second = date.getSeconds().toString().padStart(2, 0);
  
  const exiting_user = users.find(item => item.user_name == elUserNameValue || item.user_phone == elNumberValue);
  
  if(exiting_user) {
    alert("Shunday nomli user yoki shu raqamdan ro'yxatdan o'tilgan. \nIltimos, boshqa user name va telefon raqamini kiriting")
    return;
  }

  const new_user = {
    id: users.length ? users.length + 1 : 1,
    user_name: elUserNameValue,
    user_password: elPasswordValue,
    user_phone: elNumberValue,
    user_orders: [],
    user_registered_date: `${day}-${month}-${year} ${hour}:${minute}:${second}`
  }

  users.push(new_user);

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("user_id", JSON.stringify(new_user.id));
  
  elUserName.value = "";
  elNumber.value = "+998"
  elPassword.value = "";

  window.location.href = "./index.html"
})
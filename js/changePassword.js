const elChangeForm = document.querySelector(".change-form");
const elChangeInput = elChangeForm.querySelector(".change-input");
const elChangePhone = elChangeForm.querySelector(".change-phone");

const users = JSON.parse(localStorage.getItem("users") || "[]");

elChangeForm.addEventListener("submit", evt => {
  evt.preventDefault();
  
  const elChangeInputValue = elChangeInput.value.trim();
  const elChangePhoneValue = elChangePhone.value;

  const changingUser = users.find(item => item.user_name == elChangeInputValue && item.user_phone == elChangePhoneValue);

  if(!changingUser) {
    alert("Foydalanuvchi nomi yoki telefon raqamni to'g'ri kiriting");
    return;
  } else {
    const elNewPassword = prompt("Yangi parolni kiriting").trim();
    if(elNewPassword.includes(" ") || (elNewPassword.length < 8 || elNewPassword.length >= 20)) {
      alert("Iltimos, parol qo'yayotganingizda bosh joylarni ishlatmang yoki parolni uzunligini mos emas");
      return;
    }
    alert("Parol muvaffaqqiyatli o'zgartirildi ✅")
    changingUser.user_password = elNewPassword;
    localStorage.setItem("users", JSON.stringify(users));
    console.log(users);
  }

  elChangeInput.value = "";
  elChangePhone.value = "";
})
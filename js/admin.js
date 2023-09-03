const elAdminList = document.querySelector(".users-list");
const elAdminModalList = document.querySelector(".modal-admin-list");
const elAdminData = document.querySelector(".order-content");
const elAdminOrderList = document.querySelector(".order-list");
const fragmentItems = document.createDocumentFragment();

const users = JSON.parse(localStorage.getItem("users"));
const orderedUsers = users.filter(item => item.user_orders.length != 0);

function renderAdmin(arr, list) {
  list.innerHTML = "";
  if(list == elAdminModalList) {
    arr.forEach(item => {
      const itemElement = document.createElement("li");
      itemElement.classList.add("modal-admin-item", "d-flex", "align-items-center", "justify-content-between", "column-gap-5", "p-3", "border-2", "border-secondary-subtle", "border", "rounded-3", "bg-light-subtle");
      
      itemElement.innerHTML = `
      <div class="modal-list-inner">
      <h3 class="modal-admin-title m-0 fs-5 fw-bold">${item.user_name}</h3>
      <time datetime="${item.user_registered_date}">${item.user_registered_date}</time>
      </div>
      <a class="d-block" href="tel:${item.user_phone}">${item.user_phone}</a>
      `
      fragmentItems.append(itemElement)
    })
  }
  else {
    let orderName = "";
    arr.forEach(item => {
      if(item.user_orders.length) {
        const liElement = document.createElement("li");
      liElement.classList.add("users-item","align-items-center", "justify-content-between", "p-3", "border-2", "border-secondary-subtle", "border", "rounded-3", "bg-light-subtle");
      
      item.user_orders.forEach(element => {
        orderName += `${element.product_name}
`;
        liElement.innerHTML = `
        <div class="users-item-inner">
        <pre class="users-title-wrapper"><h3 class="users-title m-0 fs-5 fw-bold">${orderName}</h3></pre>
        <span class="w-25 d-inline-block fs-5 fw-bold text-center text-danger">  ${item.id}</span>
        ||<time class="w-50 d-inline-block text-secondary text-center" datetime="${element.ordered_time}">${element.ordered_time}</time>
        </div>
        <button class="btn-active btn btn-light" type="button" data-id="${item.id}">▶</button>
        `
      })
      fragmentItems.append(liElement)
      }
    });
  }
  
  list.append(fragmentItems)
}

function renderAdminOrders(userId) {
  orderedUsers.forEach(item => {
    if(item.id == userId) {
      if(item.user_orders.length) {
        let cash = 0;
        elAdminData.innerHTML = `
        <span class="text-bg-danger p-3 rounded-2">${item.id}</span>
        <span class="text-bg-warning p-3 rounded-2">${item.user_name}</span>
        <a class="text-bg-primary p-3 rounded-2" href="tel:${item.user_phone}">${item.user_phone}</a>
        `
        elAdminOrderList.innerHTML = ""
        item.user_orders.forEach(element => {
          const liElement = document.createElement("li");
          liElement.classList.add("order-item", "p-3", "border", "border-2", "rounded-2");
          cash += element.total
          liElement.innerHTML = `
          <h4 class="text-start m-0">${element.product_name}</h4>
          <span>${element.product_count}</span>
          <span>${element.total} so'm</span>
          <div class="d-flex">
          <button class="admin-btn btn" type="button" data-id="${item.id}" data-product="${element.id}">✅</button>
          </div>
          `
          fragmentItems.append(liElement);
        })
        const totalItem = document.createElement("li");
        totalItem.classList.add("d-flex", "justify-content-between", "p-3", "border", "border-2", "rounded-2");
        totalItem.innerHTML = `
        <strong class="fs-5">Total</strong> 
        <span class="cash text-warning">${cash} so'm</span>
        <button class="btn-done btn btn-success" data-id="${item.id}">Done</button>
        `
        if(fragmentItems.childElementCount) {
          fragmentItems.appendChild(totalItem);
        }
      } else {
        elAdminOrderList.textContent = ""
        elAdminData.textContent = ""
      }
    }
  })
  elAdminOrderList.append(fragmentItems)
}

renderAdmin(users, elAdminModalList);

elAdminList.addEventListener("click", evt => {
  if(evt.target.matches(".btn-active")) {
    const targetId = evt.target.dataset.id;
    renderAdminOrders(targetId);
  }
})

elAdminOrderList.addEventListener("click", evt => {
  const targetId = evt.target.dataset.id;
  const productId = evt.target.dataset.product;
  if(evt.target.matches(".admin-btn")) {
    const doneUser = orderedUsers.find(item => item.id == targetId);
    const doneProduct = doneUser.user_orders.findIndex(item => item.id == productId);
    doneUser.user_orders.splice(doneProduct, 1);
  }
  if(evt.target.matches(".btn-done")) {
    const doneUser = orderedUsers.find(item => item.id == targetId);
    doneUser.user_orders = []
    localStorage.setItem("users", JSON.stringify(users))
    elAdminOrderList.textContent = "";
    elAdminData.textContent = "";
  }
  renderAdminOrders(targetId)
  renderAdmin(orderedUsers, elAdminList)
  localStorage.setItem("users", JSON.stringify(users));
})

const elAdminUsers = document.querySelector(".users");
const elAdminUsersBtn = elAdminUsers.querySelector(".users-btn");

elAdminUsersBtn.addEventListener("click", () => {
  if(elAdminUsers.classList.contains("bg-white")) {
    renderAdmin(orderedUsers, elAdminList)
    elAdminUsers.classList.remove("bg-white")
    elAdminUsers.classList.add("bg-primary-subtle");
    if(!orderedUsers.length) {
      const errorMessage = document.createElement("h3");
      errorMessage.classList.add("text-center", "text-bg-danger");
      errorMessage.textContent = "Buyurtmalar yo'q"
      elAdminList.append(errorMessage)
    }
  } else if(elAdminUsers.classList.contains("bg-primary-subtle")) {
    elAdminUsers.classList.remove("bg-primary-subtle")
    elAdminUsers.classList.add("bg-white");
    elAdminList.innerHTML = ""
  }
})
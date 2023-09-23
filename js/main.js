const ordersCount = document.querySelector(".orders-count");
const elList = document.querySelector(".list");
const modalList = document.querySelector(".modal-list");
const modalTotal = document.querySelector(".modal-total");
const modalBtn = document.querySelector(".btn-submit");
const logOutBtn = document.querySelector(".logout-btn");

const itemFragment = document.createDocumentFragment();

const users = JSON.parse(localStorage.getItem("users"));
const userId = JSON.parse(localStorage.getItem("user_id"));

// checking the user exiting
if(!userId) {
  window.location.href = "./login.html"
}

const orderingUser = users.find(item => item.id == userId);

function renderOrder(arr, list) {
  list.innerHTML = "";
  
  if(list == elList) {
    arr.forEach(item => {
      const liElement = document.createElement("li");
      liElement.classList.add("list-item", "d-flex", "flex-column", "p-3", "rounded-3");
      liElement.innerHTML = `
      <img src="${item.product_image}" width="350" alt="${item.product_name}">
      <h3 class="mb-3 fw-semibold flex-grow-1">${item.product_name}</h3>
      <p class="desc-wrapper m-0">
      ${item.product_recipe}
      </p>
      <span class="my-3"><strong>${item.product_price}</strong> so'm</span>
      <button class="order-btn btn btn-success" data-id="${item.id}">Savatga qo'shish ➕</button>
      `
      itemFragment.append(liElement);
    });
  } else {
    let cash = 0;
    arr.forEach(item => {
      const liElement = document.createElement("li");
      liElement.classList.add("d-flex", "align-items-center");
      liElement.innerHTML = `
      <h3 class="m-0">${item.product_name}</h3>
      <button class="delete-btn btn flex-grow-1 text-end p-0 pe-4 border-0" data-id=${item.id}>
      <svg width="24" height="25" viewBox="0 0 24 25" fill="#323232" xmlns="http://www.w3.org/2000/svg"><path d="M16 9.5V19.5H8V9.5H16ZM14.5 3.5H9.5L8.5 4.5H5V6.5H19V4.5H15.5L14.5 3.5ZM18 7.5H6V19.5C6 20.6 6.9 21.5 8 21.5H16C17.1 21.5 18 20.6 18 19.5V7.5Z" fill="inherit"></path></svg>
      </button>
      <div class="d-flex flex-wrap justify-content-center align-items-center text-center shadow rounded-3">
      <button type="button" class="btn-subtracter btn w-25 me-3 btn-light"  data-id=${item.id}>-</button>
      ${item.product_count}
      <button type="button" class="btn-adder btn w-25 ms-3 btn-light"  data-id=${item.id}>+</button>
      <div class="w-100">${item.total}so'm</div>
      </div>
      `
      cash += item.total;
      itemFragment.append(liElement)
    })
    modalTotal.textContent = `${cash} so'm`
  }
  
  // for badge
  if(orderingUser.user_orders.length) {
    ordersCount.textContent = orderingUser.user_orders.length;
  } else {
    ordersCount.textContent = ""
  }
  
  list.append(itemFragment)
}

renderOrder(product, elList);
renderOrder(orderingUser.user_orders, modalList);

elList.addEventListener("click", evt => {
  if(evt.target.matches(".order-btn")) {
    const btnId = evt.target.dataset.id;
    const addCart = product.find(item => item.id == btnId);
    
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

    addCart.ordered_time = `${day}-${month}-${year} ${hour}:${minute}:${second}`;
    
    // we checking the order from don't add second same order
    const checkOrder = orderingUser.user_orders.find(item => item.id == addCart.id);
    
    if(!checkOrder) {
      orderingUser.user_orders.push(addCart);
      renderOrder(orderingUser.user_orders, modalList)
    }
    else {
      alert("Buyurtmalar ro'yxatiga qo'shilgan");
      return;
    }
    localStorage.setItem("users", JSON.stringify(users));
  }
})

modalList.addEventListener("click", evt => {
  if(evt.target.matches(".delete-btn") || evt.target.matches("svg") || evt.target.matches("path")) {
    const btnId = evt.target.dataset.id;
    const deletingOrderIndex = orderingUser.user_orders.findIndex(item => item.id == btnId);
    orderingUser.user_orders.splice(deletingOrderIndex, 1);
    localStorage.setItem("users", JSON.stringify(users));
    renderOrder(orderingUser.user_orders, modalList)
  }
  
  if(evt.target.matches(".btn-adder")) {
    const btnId = evt.target.dataset.id;
    const addingProduct = orderingUser.user_orders.find(item => item.id == btnId);
    
    addingProduct.product_count++;
    addingProduct.total = addingProduct.product_count * addingProduct.product_price
    
    localStorage.setItem("users", JSON.stringify(users));
    renderOrder(orderingUser.user_orders, modalList)
  }
  
  if(evt.target.matches(".btn-subtracter")) {
    const btnId = evt.target.dataset.id;
    const subtractingProduct = orderingUser.user_orders.find(item => item.id == btnId);
    
    if(subtractingProduct.product_count > 1) {
      subtractingProduct.product_count--;
      subtractingProduct.total = subtractingProduct.product_count * subtractingProduct.product_price
    }
    localStorage.setItem("users", JSON.stringify(users));
    renderOrder(orderingUser.user_orders, modalList)
  }
})

modalBtn.addEventListener("click", () => {
  alert("Buyurtmangiz qabul qilindi✅")
})

logOutBtn.addEventListener("click", () => {
  localStorage.removeItem("user_id");
  window.location.href = "./login.html"
})
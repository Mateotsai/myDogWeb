// form的預設行為是繳交之後刷新整個頁面，這邊要先取消這個設定
const form = document.getElementById("input-wrapper");
form.addEventListener("submit",(e) => {
    e.preventDefault();
});

// 購物車
    document.getElementById('addToCartButton').addEventListener('click', function() {
    const productName = document.querySelector('.card-title').innerText;
    const size = document.getElementById('sizeSelect').value;
    const quantity = document.getElementById('quantitySelect').value;
    const price = document.getElementById('price').innerText;

    if (size === "選擇尺寸" || quantity === "選擇數量") {
        alert("請選擇尺寸和數量");
        return;
    }

    const totalPrice = quantity * price;

    const cartList = document.getElementById('cartList');
    const newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.innerHTML = `${productName} - 尺寸: ${size}, 數量: ${quantity}, 金額: $${totalPrice}
        <span class="delete"></span>`;

    cartList.appendChild(newItem);

    // 添加删除按钮的事件监听器
    newItem.querySelector('.delete').addEventListener('click', function() {
        this.parentElement.remove();
    });
    });
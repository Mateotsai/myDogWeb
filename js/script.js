// form的預設行為是繳交之後刷新整個頁面，這邊要先取消這個設定
const form = document.getElementById("input-wrapper");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    });
}

// 購物車
document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-to-cart-button')) {
            const card = event.target.closest('.card');
            const productName = card.querySelector('.product-name').innerText;
            const productId = card.querySelector('.product-id').innerText;
            const size = card.querySelector('.size-select').value;
            const quantity = card.querySelector('.quantity-select').value;
            const price = card.querySelector('.price').innerText;

            if (size === "選擇尺寸" || quantity === "選擇數量") {
                alert("請選擇尺寸和數量");
                return;
            }

            const product = {
                name: productName,
                id: productId,
                size: size,
                quantity: quantity,
                price: parseFloat(price),
                totalPrice: quantity * parseFloat(price)
            };

            addToCart(product);
        }

        if (event.target.classList.contains('delete')) {
            const item = event.target.closest('li');
            item.remove();
            updateTotalAmount();
        }
    });

    function addToCart(product) {
        const cartList = document.getElementById('cartList');
        const newItem = document.createElement('li');
        newItem.classList.add('item');
        newItem.innerHTML = `${product.name} - 尺寸: ${product.size} , 　數量: ${product.quantity} , 　金額:　$ ${product.totalPrice}
            <span class="delete"> </span>`;

        cartList.appendChild(newItem);
        updateTotalAmount();

        newItem.querySelector('.delete').addEventListener('click', function() {
            newItem.remove();
            updateTotalAmount();
        });
    }

    function updateTotalAmount() {
        const cartList = document.getElementById('cartList');
        const items = cartList.querySelectorAll('.item');
        let totalAmount = 0;
        items.forEach(function(item) {
            const itemText = item.innerText;
            const priceMatch = itemText.match(/金額:\s\$ (\d+(\.\d+)?)/);
            if (priceMatch) {
                totalAmount += parseFloat(priceMatch[1]);
            }
        });
        document.getElementById('totalAmount').innerText = totalAmount.toFixed(2);
    }

    document.getElementById('checkoutButton').addEventListener('click', function() {
        alert('結帳功能尚未實現'); // 這裡可以添加你的結帳邏輯
    });
});

    

    // 添加删除按钮的事件监听器
    newItem.querySelector('.delete').addEventListener('click', function() {
        this.parentElement.remove();

     });


  
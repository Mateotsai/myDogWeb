//篩選器
document.addEventListener('DOMContentLoaded', () => {
    const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
    const productCards = document.querySelectorAll('.product-card');
  
    filterCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        filterProducts();
      });
    });
  
    function filterProducts() {
      const selectedCategories = Array.from(filterCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
  
      productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (selectedCategories.length === 0 || selectedCategories.includes(category)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
  
    // Initialize the filter on page load
    filterProducts();
  });


  // 購物車
<<<<<<< HEAD
  document.addEventListener('DOMContentLoaded', function() {
    let cartCount = 0;

=======
document.addEventListener('DOMContentLoaded', function() {
>>>>>>> 937deeff7df1b19460cf1b56925ac619caae1d40
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
<<<<<<< HEAD
                quantity: parseInt(quantity),
=======
                quantity: quantity,
>>>>>>> 937deeff7df1b19460cf1b56925ac619caae1d40
                price: parseFloat(price),
                totalPrice: quantity * parseFloat(price)
            };

            addToCart(product);
<<<<<<< HEAD
            updateCartCount(product.quantity); 
=======
>>>>>>> 937deeff7df1b19460cf1b56925ac619caae1d40
        }

        if (event.target.classList.contains('delete')) {
            const item = event.target.closest('li');
<<<<<<< HEAD
            const quantity = parseInt(item.getAttribute('data-quantity'));
            item.remove();
            updateTotalAmount();
            updateCartCount(-quantity); 
=======
            item.remove();
            updateTotalAmount();
>>>>>>> 937deeff7df1b19460cf1b56925ac619caae1d40
        }
    });

    function addToCart(product) {
        const cartList = document.getElementById('cartList');
        const newItem = document.createElement('li');
        newItem.classList.add('item');
<<<<<<< HEAD
        newItem.setAttribute('data-quantity', product.quantity); 
=======
>>>>>>> 937deeff7df1b19460cf1b56925ac619caae1d40
        newItem.innerHTML = `${product.name} - 尺寸: ${product.size} , 　數量: ${product.quantity} , 　金額:　$ ${product.totalPrice}
            <span class="delete"> </span>`;

        cartList.appendChild(newItem);
        updateTotalAmount();

        newItem.querySelector('.delete').addEventListener('click', function() {
            newItem.remove();
            updateTotalAmount();
<<<<<<< HEAD
            updateCartCount(-product.quantity); 
=======
>>>>>>> 937deeff7df1b19460cf1b56925ac619caae1d40
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

<<<<<<< HEAD
    function updateCartCount(change) {
        cartCount += change;
        document.getElementById('cartCount').innerText = cartCount;
    }

    function clearCart() {
        const cartList = document.getElementById('cartList');
        cartList.innerHTML = '';
        updateTotalAmount();
        updateCartCount(-cartCount); 
    }

    document.getElementById('checkoutButton').addEventListener('click', function() {
        alert('結帳功能尚未實現'); // 未來加上結帳邏輯
        clearCart(); 
    });
});
    

    // 添加刪除按鈕的事件監控器
=======
    document.getElementById('checkoutButton').addEventListener('click', function() {
        alert('結帳功能尚未實現'); // 這裡可以添加你的結帳邏輯
    });
});

    

    // 添加删除按钮的事件监听器
>>>>>>> 937deeff7df1b19460cf1b56925ac619caae1d40
    newItem.querySelector('.delete').addEventListener('click', function() {
        this.parentElement.remove();

     });
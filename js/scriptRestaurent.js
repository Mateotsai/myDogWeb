//餐廳篩選器
document.addEventListener('DOMContentLoaded', function () {
    const products = [
        {
            "name": "汪星人咖啡廳",
            "image": "./image/rest1.png",
            "district": "北屯區",
            "services": ["寵物可落地", "寵物專屬空間"],
            "url": "#"
        },
        {
            "name": "角落",
            "image": "./image/rest2.png",
            "district": "中區",
            "services": ["寵物可落地", "寵物專屬空間", "寵物專屬餐"],
            "url": "#"
        },
        {
            "name": "踏踏地球",
            "image": "./image/rest3.png",
            "district": "西屯區",
            "services": ["寵物可落地"],
            "url": "#"
        },
        {
            "name": "尾巴搖搖",
            "image": "./image/rest4.png",
            "district": "西區",
            "services": ["寵物可落地","寵物專屬空間", "寵物專屬餐"],
            "url": "#"
        },
        {
            "name": "毛茶屋",
            "image": "./image/rest5.png",
            "district": "西區",
            "services": ["寵物可落地"],
            "url": "#"
        },
        {
            "name": "趴趴走吧",
            "image": "./image/rest6.png",
            "district": "北區",
            "services": ["寵物可落地", "寵物專屬空間"],
            "url": "#"
        },
        {
            "name": "愛犬廚房",
            "image": "./image/rest7.png",
            "district": "中區",
            "services": ["寵物可落地", "寵物專屬空間", "寵物專屬餐"],
            "url": "#"
        },
        {
            "name": "毛五木",
            "image": "./image/rest8.png",
            "district": "北屯區",
            "services": ["寵物可落地"],
            "url": "#"
        },
        {
            "name": "森林小徑",
            "image": "./image/rest9.png",
            "district": "西區",
            "services": ["寵物可落地"],
            "url": "#"
        },
        
       
    ];

    function renderProducts(filteredProducts) {
        const productContainer = document.getElementById('productContainer');
        productContainer.innerHTML = ''; //清空容器
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('col-lg-4', 'col-md-6', 'mt-3', 'product-card');
            productCard.dataset.district = product.district;
            productCard.dataset.services = product.services.join(',');

            productCard.innerHTML = `
                <div class="card">
                    <img src="${product.image}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">
                            <ul>
                                <li>${product.district}</li>
                                ${product.services.map(service => `<li>${service}</li>`).join('')}
                                 ${new Array(4 - product.services.length).fill('<li class="invisible">-</li>').join('')}
                            </ul>
                        </p>
                        <a href="${product.url}" class="btn btn-success">店家官網</a>
                    </div>
                </div>
            `;
            productContainer.appendChild(productCard);
        });
    }

    function filterProducts() {
        const selectedDistricts = Array.from(document.querySelectorAll('.filter-checkbox:checked'))
            .map(checkbox => checkbox.value);

        const filteredProducts = products.filter(product => 
            selectedDistricts.length === 0 || selectedDistricts.includes(product.district)
        );

        renderProducts(filteredProducts);
    }

    document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });

    renderProducts(products); // 初次渲染所有產品
});
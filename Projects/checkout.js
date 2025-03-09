document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {id: 1, name: 'Chameli', price: 299.00},
        {id: 2, name: 'Champakali', price: 199.00},
        {id: 3, name: 'Lili', price: 29.00},
    ];

    let cart = JSON.parse(localStorage.getItem('cartItem')) || [];

    const productList = document.getElementById('product-list');
    const cartList = document.getElementById('cart-items');
    const emptyCartMsg = document.getElementById('empty-cart');
    const cartTotal = document.getElementById('cart-total');
    const totalPriceDisplay = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
        <span>${product.name} - ₹${product.price.toFixed(2)}</span>
        <button data-id="${product.id}">Add to cart</button>
        `;
        productList.appendChild(productDiv);
    });

    productList.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON') {
            const cartProduct = parseInt(e.target.getAttribute("data-id"));           
            const product = products.find(p => p.id === cartProduct)
            addToCart(product);
            saveCart();
        }
    });

    function addToCart(product) {
        // cart.push(product);
        // console.log(product);
        let cartItem = cart.find(item => item.id === product.id);

        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        renderCart();
        saveCart();
    }

    function renderCart() {
        cartList.innerHTML = "";
        let totalPrice = 0;

        if(cart.length > 0) {
            emptyCartMsg.classList.add('hidden');
            cartTotal.classList.remove('hidden');

            cart.forEach((item, index) => {
                totalPrice += item.price * item.quantity;
                let cartItem = document.createElement('div');
                cartItem.classList.add('cartProductRemove');
                cartItem.innerHTML = `
                ${item.name} - ₹${item.price.toFixed(2)} x ${item.quantity}
                <button data-index="${index}">Remove</button>
                `;
                cartList.appendChild(cartItem);
            });
            totalPriceDisplay.textContent = `₹${totalPrice.toFixed(2)}`;
        }else {
            emptyCartMsg.classList.remove('hidden');
            cartTotal.classList.add('hidden');
            totalPriceDisplay.textContent = `₹0.00`;
        }

        cartList.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const removeIndex = parseInt(e.target.getAttribute("data-index"));

                if(cart[removeIndex].quantity > 1) {
                    cart[removeIndex].quantity -= 1;
                }else {
                    cart.splice(removeIndex, 1);
                }
                saveCart();
                renderCart();
            });
        });
        saveCart();
    }

    checkoutBtn.addEventListener('click', () => {
        cart.length = 0;
        alert("Cart is checkedout successfully.");
        renderCart();
        saveCart();
    });

    function saveCart() {
        localStorage.setItem('cartItem', JSON.stringify(cart));
    }

    renderCart();
});

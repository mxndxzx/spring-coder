// DOM selectors
const cartToggler = document.querySelector('.cart--toggle');
const cart = document.querySelector('.cart');

// Get saved storage
const getStorage = () => JSON.parse(localStorage.getItem('cart')) || [];

// Save item to local storage
const saveStorage = (e) => {localStorage.setItem('cart', JSON.stringify(e))};

// Add item to cart
const addToCart = (itemId) => {
    let cart = getStorage();
    if (isInCart(itemId)) {
        quantAdd(itemId);
    } else {
        const foundProd = products.find(e => e.id == itemId);
        cart.push(foundProd);
        saveStorage(cart);
        showProducts();
    }
};

// Show added products in the cart
const showProducts = () => {
    let storedCart = getStorage();
    cart.innerHTML = ' ';
    storedCart.forEach(e => {
        cart.innerHTML += `
            <div id="artId-${e.id}" class="cart__div">
                <div class="cart__article">
                    <img class="cart__article--img" src="${e.img}" alt="${e.title}">
                    <div class="cart__article--div"></div>
                    <div class="cart__article--opt">
                        <div class="article__name">${e.title}</div>
                        <div class="article__price">${priceMask(e.total)}</div>
                        <div class="article__quant">${(e.quant)} Item</div>
                    </div>
                    <div onclick="quantSus(${e.id})" class="cart__article--remove">X</div>
                </div>
            </div>`;
        // Remove items if quant == 0
        const prodId = document.querySelector('#artId-' + e.id);
        const prodIndex = storedCart.findIndex(elm => elm.id == e.id);
        if (storedCart[prodIndex].quant == 0) prodId.innerHTML = ' ';
    });
};

// Item quantity logic
const quantAdd = (itemId) => {
    let cart = getStorage();
    const prodIndex = cart.findIndex(e => e.id == itemId);
    cart[prodIndex].quant++;
    cart[prodIndex].total = cart[prodIndex].quant * cart[prodIndex].price;
    saveStorage(cart);
    showProducts();
};

const quantSus = (itemId) => {
    let cart = getStorage();
    const prodIndex = cart.findIndex(e => e.id == itemId);
    cart[prodIndex].quant--;
    cart[prodIndex].total = cart[prodIndex].quant * cart[prodIndex].price;
    if (cart[prodIndex].quant == 0) localStorage.removeItem(cart[prodIndex]);
    saveStorage(cart);
    showProducts();
};

// Is the item in the cart?
const isInCart = (itemId) => {
    let cart = getStorage();
    return cart.some(e => e.id == itemId);
};

// Show cart container
const showCart = () => {cart.classList.toggle('cart--show')};

// Event listeners
cartToggler.addEventListener('click', showCart);

// Function calls
showProducts();
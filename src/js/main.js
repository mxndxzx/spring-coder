// DOM Selectors
const cards = document.querySelector('.indexCards');
const cartToggler = document.querySelector('.cart--toggle');
const cartItems = document.querySelector('.cart');
const evAddToCart = document.querySelectorAll('.card__btn');
const remItem = document.querySelectorAll('.cart__article--remove');

// Events

// Functions
const priceMask = (element) => {
    const priceMask = new Intl.NumberFormat('us-US', {
        style: 'currency', currency: 'USD'
    });
    return priceMask.format(element);
}

const cardShow = (product) => {
    cards.innerHTML = '';
    product.forEach(element => {
        cards.innerHTML += `
            <div class="card">
                <a class="card__img" href="#"><img src="${element.img}" alt="..."></a>
                <div class="card__text">
                    <div><a class="card__text--type" href="#">Guitarras Eléctricas</a></div>
                    <div class="card__text--title"><a href="#">${element.title}</a></div>
                    <div class="card__text--price">${priceMask(element.price)}</div>
                </div>
                <input onclick="addToCart(${element.id})" class="card__btn" type="button" value="Agregar al carrito" />
            </div>`;
    });
};

const getStorage = () => {return JSON.parse(localStorage.getItem("cart")) || []};

const saveStorage = (newCart) => {localStorage.setItem("cart", JSON.stringify(newCart))};

const addToCart = (itemId) => {
    let cart = getStorage();
    if (isInCart(itemId)){
        quantAdd(itemId);
    } else {
        const foundProd = products.find(e => e.id == itemId);
        cart.push(foundProd);
        saveStorage(cart);
        showProducts();
    }
};

const showProducts = () => {
    let cart = getStorage();
    cartItems.innerHTML = '';
    cart.forEach(element => {
        cartItems.innerHTML += `
            <div id="artId-${element.id}">
                <div class="cart__article">
                    <img class="cart__article--img" src="${element.img}" alt="">
                    <div class="cart__article--div"></div>
                    <div class="cart__article--opt">
                        <div class="article__name">${element.title}</div>
                        <div class="article__price">${priceMask(element.total)}</div>
                        <div class="article__quant">${(element.quant)} Item</div>
                    </div>
                    <div onclick="removeItem(${element.id})" class="cart__article--remove">X</div>
                </div>
            </div>`;
        // Remove item visually
        const artId = document.querySelector('#artId-' + element.id);
        const prodIndex = cart.findIndex(e => e.id == element.id);
        if (cart[prodIndex].quant == 0) {
            artId.innerHTML = ' ';
        } 
    });
};

const quantAdd = (quantId) => {
    let cart = getStorage();
    const prodIndex = cart.findIndex(e => e.id == quantId);
    cart[prodIndex].quant++;
    cart[prodIndex].total = cart[prodIndex].quant * cart[prodIndex].price;
    saveStorage(cart);
    showProducts();
};

const isInCart = (cartId) => {
    let cart = getStorage();
    return cart.some(e => e.id == cartId);
};

const removeItem = (remId) => {
    let cart = getStorage();
    const prodIndex = cart.findIndex(e => e.id == remId);
    cart[prodIndex].quant--;
    cart[prodIndex].total = cart[prodIndex].quant * cart[prodIndex].price;
    if (cart[prodIndex].quant == 0) {
        localStorage.removeItem(cart[prodIndex]);
    };
    saveStorage(cart);
    showProducts();
};

const cartShow = () => {
    cartItems.classList.toggle('cart--show');
};


// Event Listeners
cartToggler.addEventListener("click", cartShow)

cardShow(products);
showProducts();
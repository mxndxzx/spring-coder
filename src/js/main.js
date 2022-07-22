// Variables
const cards = document.querySelector('.indexCards');
const cartItems = document.querySelector('.cart');

// Functions
const cardShow = (product) => {
    cards.innerHTML = "";
    product.forEach(element => {
        cards.innerHTML += `
            <div class="card">
                <a class="card__img" href="#"><img src="${element.img}" alt="..."></a>
                <div class="card__text">
                    <a class="card__text--type" href="#">Guitarras Eléctricas</a>
                    <h3 class="card__text--title"><a href="#">${element.title} ${element.year} ${element.color} ${element.reissue}</a></h3>
                    <p class="card__text--price">U$S ${element.priceStr}</p>
                </div>
                <input onclick="addToCart(${element.id})" class="card__btn" type="button" value="Agregar al carrito" />
            </div>`;
    });
};

const getStorage = () => {return JSON.parse(localStorage.getItem("cart")) || []};

const saveStorage = (newCart) => {localStorage.setItem("cart", JSON.stringify(newCart))};

const addToCart = (itemId) => {
    let cart = getStorage();
    const foundProd = products.find(e => e.id == itemId);
    cart.push(foundProd);
    saveStorage(cart);
    showProducts();
};

const showProducts = () => {
    let cart2 = getStorage();
    cartItems.innerHTML = "";
    cart2.forEach(element => {
        cartItems.innerHTML += `
            <div class="cart__article">
                <img class="cart__article--img" src="${element.img}" alt="">
                <div class="cart__article--div"></div>
                <div class="cart__article--opt">
                    <div class="article__name">${element.title} ${element.year} ${element.color} ${element.reissue}</div>
                    <div class="article__price">U$S ${element.priceStr}</div>
                </div>
                <div class="cart__article--remove">X</div>
            </div>`;
    });
    console.log("Funca");
};

cardShow(products);
// localStorage.clear();
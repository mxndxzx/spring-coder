// Libraries
AOS.init();

// DOM Selectors
const cards = document.querySelector('.indexCards');
const evAddToCart = document.querySelectorAll('.card__btn');
const remItem = document.querySelectorAll('.cart__article--remove');
const usdBanner = document.querySelector('.usd--banner');

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

const getUsd = () => {
    fetch('https://api.bluelytics.com.ar/v2/latest',)
        .then(response => response.json())
        .then(res => {
            usdBanner.innerHTML = ' ';
            usdBanner.innerHTML = `
                <p>Dólar blue</p>
                <p>${res.blue.value_buy}</p>
            `;
        });
};

cardShow(products);
getUsd();

// Variables
let input;

// Clases
class Bass {
    constructor(brand,model,color,year,serial,price){
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.year = year;
    this.serial = serial;
    this.price = price;
    };
};



// Productos
const bajo1 = new Bass("Fender","Jazz Bass","Sunburst",1968,130173,8000);
const bajo2 = new Bass("Fender","Jazz Bass American Standard Fretless","Sunburst",1992,451234,2700);
const bajo3 = new Bass("Music Man","Sabre","Walnut",1979,0036502,3800);
const bajo4 = new Bass("Gibson","EB-3","Cherry Red",1969,0456670,3700);

// Call resultado total de productos
const result = total(bajo1.price, bajo2.price, bajo3.price, bajo4.price);

// Funcion total
function total(p1,p2,p3,p4){
    let sum = p1 + p2 + p3 + p4;
    let iva = (sum * 21)/100;
    let result = iva + sum;
    alert(`Total + IVA: U$D ${result}. Presione aceptar para ver opciones de pago`);
    return result;
};

// Call intereses de cuotas
pay();

// Funciones de pago
function pay() {
    do {
    input = parseInt(prompt("Introduzca la cantidad de cuotas que desee. El mínimo es 1 y el máximo 18"));
    if (isNaN(input) || (((input < 1) || (input > 18)))) {
        alert('Ingrese un número válido. El mínimo es 1 y el máximo 18');
    };
    } while (isNaN(input) || (((input < 1) || (input > 18))));
    if (input == 1) {
    onePay();
    } else {
    multPay(input, result);
    };
} while (isNaN(input));

function onePay() {
    let onePay = result - ((result * 20) / 100);
    alert(`El precio en 1 pago, con 20% de descuento, es de U$D ${onePay}`);
};

function multPay(payNum, price) {
    let initFee = 3.17;
    let endFee = (payNum * initFee);
    let interest = price + ((price * endFee) / 100);
    let total = interest / payNum;
    alert(`El precio final es de U$D ${Math.round(interest)}, que pueden ser pagados en ${payNum} cuotas de U$D ${Math.round(total)} (Interés del ${endFee}%)`);
};
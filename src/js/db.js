// DATABASE: This file has all the products shown within the shop
class instrument {
    constructor (id,title,color,year,reissue,serial,priceStr,price,img) {
        this.id = id;
        this.title = title;
        this.color = color;
        this.year = year;
        this.reissue = reissue;
        this.serial = serial;
        this.priceStr = priceStr;
        this.price = price;
        this.img = img;
    };
};

// class amps {
//     constructor (id, brand,model,series,valve,type,year,power,serial,price,img) {
//         this.id = id;
//         this.brand = brand;
//         this.model = model;
//         this.series = series;
//         this.valve = valve;
//         this.type = type;
//         this.year = year;
//         this.power = power;
//         this.serial = serial;
//         this.price = price;
//         this.img = img;
//     };
// };

// Product catalogue
const products = [
    new instrument (1,"Fender Telecaster Custom Shop", "Olympic White","1967"," ","113228","19.990,00",19990,"src/img/guitars/1967-fender-tele-white/hero.jpg"),
    new instrument (2,"Gibson Les Paul Special", "Tv. Yellow","1957"," ","18934","23.590,00",23590,"src/img/guitars/1957-gibson-lp-yellow/hero.jpg"),
    new instrument (3,"Fender Stratocaster", "Desert Sand","1996","1957 Cunetto Relic","192836","5.990,00",5990,"src/img/guitars/1996-fender-strato-sand/hero.jpg"),
];